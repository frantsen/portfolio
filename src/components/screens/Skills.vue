<template>
	<div class="skills">
		<div class="container">
			<div class="commit-list">
				<span v-for="(commit, index) in commitsDescending" :key="`commit-hash-${index}`">
					<div class="commit-wrapper">
						<div @click="selectCommit(index)" class="hash-link">{{commit.hashLabel}}</div>
						{{commit.date | timeSinceDate}}
					</div>
				</span>
			</div>
			<div class="diff-display">
				<div v-for="(line, index) in commitSrc" :key="`src-line-${index}`">
					<div :class="['diff-line', line.type]">
						{{line.content}}
						<div class="message">{{line.message}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const LineDiff = {
	Addition: 'addition',
	Deletion: 'deletion',
	NoChange: 'nochange',
};

class Commit {
	constructor(hashLabel, message, date, changes) {
		this.hashLabel = hashLabel;
		this.message = message;
		this.date = date;
		this.changes = changes;
	}
}

class LineChange {
	constructor(linePosition) {
		this.position = linePosition;
	}
}

class Addition extends LineChange {
	constructor(linePosition, content) {
		super(linePosition);
		this.content = content;
		this.type = LineDiff.Addition;
	}
}

class Deletion extends LineChange {
	constructor(linePosition) {
		super(linePosition);
		this.type = LineDiff.Deletion;
		this.del = true;
	}
}

export default {
	name: 'skills',
	data: () => ({
		idxSelectedCommit: 8,
		commits: [
			new Commit('e1b6410', 'Inspired by my dad\'s site & others', new Date(2002, 0), [
				new Addition(0, 'HTML: Personal site 1.0'),
			]),
			new Commit('c0061d0', 'Recursion clicks; coding is awesome', new Date(2015, 1), [
				new Addition(1, 'Python'),
			]),
			new Commit('f523646', 'First tech gig!', new Date(2015, 5), [
				new Deletion(0),
				new Addition(1, 'JS'),
				new Addition(0, 'HTML'),
			]),
			new Commit('85aaa3f', 'Software design; TA for Intro', new Date(2015, 8), [
				new Addition(0, 'C++'),
				new Deletion(3),
				new Addition(3, 'Python'),
			]),
			new Commit('g3002a0', 'Recursive AND minimalistic?? Sweet!', new Date(2016, 1), [
				new Addition(4, 'SQL'),
				new Addition(4, 'Scheme'),
				new Addition(0, 'Android'),
				new Deletion(1),
				new Addition(1, 'C++ TA'),
			]),
			new Commit('eb9f3c5', 'Intern at Protolabs Inc.', new Date(2016, 5), [
				new Deletion(6),
				new Addition(4, 'Microsoft SQL Server'),
				new Deletion(2),
				new Addition(2, 'HTML'),
				new Addition(1, 'ASP.NET MVC'),
			]),
			new Commit('46c390e', 'Adventures in scripting', new Date(2016, 8), [
				new Addition(2, 'Bash'),
			]),
			new Commit('7530344', 'C++ level up with ALGORITHMS', new Date(2017, 1), [
				new Deletion(3),
				new Addition(3, 'C++'),
			]),
			new Commit('0f830e9', 'Protolabs ECommerce project', new Date(2017, 5), [
				new Addition(9, 'Vue.js'),
				new Addition(7, 'PowerShell'),
				new Addition(7, '.NET Core'),
				new Addition(5, 'Jest'),
				new Addition(4, 'Entity Framework Core'),
				new Deletion(7),
			]),
		],
	}),
	computed: {
		commitsDescending() {
			return this.commits.slice().reverse();
		},
		commitSrc() {
			let linesResult = [];
			for (let i = 0; i < this.idxSelectedCommit + 1; ++i) {
				let commit = this.commits[i];
				if (linesResult.length > 0) {
					linesResult = linesResult.filter(l => l.type !== LineDiff.Deletion);
				}
				for (let j = 0; j < commit.changes.length; ++j) {
					let line = commit.changes[j];
					if (line.del) {
						linesResult[line.position].type = LineDiff.Deletion;
					} else {
						let pos = line.position + ((linesResult[line.position] || {}).type === LineDiff.Deletion ? 1 : 0);
						linesResult.splice(pos, 0, ({
							type: ((i === this.idxSelectedCommit) ? LineDiff.Addition : LineDiff.NoChange),
							content: line.content,
							message: commit.message,
						}));
					}
				}
			}
			return linesResult;
		},
	},
	filters: {
		timeSinceDate(date) {
			let seconds = Math.floor((new Date() - date) / 1000);
			let intervals = [{sec: 31536000, type: 'year'},
				{sec: 2592000, type: 'month'},
				{sec: 86400, type: 'day'},
				{sec: 3600, type: 'hour'},
				{sec: 60, type: 'minute'}];
			let interval = intervals.find(i => Math.floor(i.sec < seconds));
			if (!interval) return 'a moment ago';
			let count = Math.floor(seconds / interval.sec);
			return `${count} ${interval.type}${count > 1 ? 's' : ''} ago`;
		},
	},
	methods: {
		selectCommit(descIdxSelected) {
			this.idxSelectedCommit = this.commits.length - 1 - descIdxSelected;
		},
	},
};
</script>

<style lang="scss" scoped>
.skills {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
}

.container {
	min-width: 800px;
	height: 428px;
}

.hash-link {
	color: dodgerblue;
	display: inline-block;
	width: 70px;

	&:hover {
		cursor: crosshair;
		color: blue;
	}
}

.commit-list {
	width: 190px;
	display: inline-block;
	padding: 10px;
	margin-right: 10px;
	background-color: whitesmoke;
	height: 100%;
}

.commit-wrapper {
	padding: 5px;
}

.diff-display {
	float: right;
	width: 570px;
}

.nochange {
	.message {
		color: gray;
	}
}

.addition {
	color: forestgreen;
	background-color: #e6ffed;
}

.message {
	float: right;
}

.deletion {
	color: #f55;
}

.diff-line {
	padding: 5px;
}
</style>
