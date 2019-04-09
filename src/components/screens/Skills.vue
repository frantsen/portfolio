<template>
	<div class="skills">
		<div class="container">
			<div class="commit-list">
				<div v-for="(commit, index) in commitsDescending" :key="`commit-hash-${index}`">
					<div class="commit-wrapper">
						<div @click="selectCommit(index)" class="hash-link">
							{{commit.hashLabel}}
						</div>
						<div class="align-right">{{commit.date | timeSinceDate}}</div>
					</div>
				</div>
			</div>
			<div class="diff-display">
				<div v-for="(line, index) in commitSource" :key="`src-line-${index}`">
					<div :class="['diff-line', line.type]">
						{{line.content}}
						<div class="message">
							{{line.message}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const SnapshotLineType = {
	Addition: 'addition',
	Deletion: 'deletion',
	NoChange: 'nochange',
};

class Commit {
	constructor(hashLabel, message, date, additions, modifications) {
		this.hashLabel = hashLabel;
		this.message = message;
		this.date = date;
		this.additions = additions || [];
		this.modifications = modifications || [];
	}
}

export default {
	name: 'skills',
	data: () => ({
		idxSelectedCommit: 8,
		commits: [
			new Commit('e1b6410', 'Inspired by my dad\'s site & others', new Date(2002, 0),
				['HTML: Personal site 1.0']),
			new Commit('c0061d0', 'Recursion clicks; coding is awesome', new Date(2015, 1),
				['Python']),
			new Commit('f523646', 'First tech gig!', new Date(2015, 5),
				['JavaScript'],
				[{original: 'HTML: Personal site 1.0', modified: 'HTML'}]),
			new Commit('85aaa3f', 'Software design; TA for Intro', new Date(2015, 8), undefined,
				[{original: 'Python', modified: 'Python'}]),
			new Commit('g3002a0', 'Recursive AND minimalistic?? Sweet!', new Date(2016, 1),
				['SQL', 'Scheme', 'Android'],
				[{original: 'C++', modified: 'C++'}]),
			new Commit('eb9f3c5', 'Intern at Protolabs Inc.', new Date(2016, 5),
				['ASP.NET MVC'],
				[{original: 'HTML', modified: 'HTML'}, {original: 'SQL', modified: 'SQL Server'}]),
			new Commit('46c390e', 'Adventures in scripting', new Date(2016, 8),
				['Bash']),
			new Commit('7530344', 'C++ level up with ALGORITHMS', new Date(2017, 1), undefined,
				[{original: 'C++', modified: 'C++'}]),
			new Commit('0f830e9', 'Protolabs ECommerce project', new Date(2017, 5),
				['PowerShell', 'Jest', 'Entity Framework Core'],
				[{original: 'JavaScript', modified: 'Vue.js'}, {original: 'ASP.NET MVC', modified: '.NET Core'}]),
		],
	}),
	computed: {
		snapshots() {
			return this.commits.reduce((snapshots, commit, index, _) => {
				const lastSnapshot = index === 0 ? [] : snapshots[index - 1];
				let currentSnapshot = lastSnapshot
					.filter((l) => l.type !== SnapshotLineType.Deletion)
					.map((i) => Object.assign({}, i));

				const deletionKeys = commit.modifications
					.map((m) => m.original);
				currentSnapshot
					.forEach((l) => l.type = deletionKeys.includes(l.content)
						? SnapshotLineType.Deletion
						: SnapshotLineType.NoChange);

				currentSnapshot = currentSnapshot
					.concat(commit.additions
						.concat(commit.modifications
							.map((m) => m.modified) || [])
						.map((c) => ({
							content: c,
							type: SnapshotLineType.Addition,
							message: commit.message,
							date: commit.date,
						})))
					.sort(this.snapshotLineSort);

				snapshots.push(currentSnapshot);
				return snapshots;
			}, []);
		},
		commitsDescending() {
			return Array.from(this.commits.map((c) => ({
				hashLabel: c.hashLabel,
				date: c.date,
			}))).reverse();
		},
		commitSource() {
			return this.snapshots[this.idxSelectedCommit];
		},
	},
	filters: {
		timeSinceDate(date) {
			let seconds = Math.floor((new Date() - date) / 1000);
			let intervals = [
				{sec: 31536000, type: 'year'},
				{sec: 2592000, type: 'month'},
				{sec: 86400, type: 'day'},
				{sec: 3600, type: 'hour'},
				{sec: 60, type: 'minute'},
			];
			let interval = intervals.find(i => Math.floor(i.sec < seconds));
			if (!interval) {
				return 'a moment ago';
			}
			let count = Math.floor(seconds / interval.sec);
			return `${count} ${interval.type}${count > 1 ? 's' : ''} ago`;
		},
	},
	methods: {
		selectCommit(descIdxSelected) {
			this.idxSelectedCommit = this.commits.length - 1 - descIdxSelected;
		},
		snapshotLineSort: (a, b) =>
			a.content > b.content
				? 1
				: a.content < b.content
					? -1
					: a.type === SnapshotLineType.Deletion
						? -1
						: b.type === SnapshotLineType.Deletion
							? 1
							: 0,
	},
};
</script>

<style lang="scss" scoped>
.skills {
	width: 100%;
	height: 100%;
	display: flex;
}

.container {
	max-width: 800px;
	min-width: 600px;
	margin: auto;
	display: flex;
	flex-direction: row;
	flex: 1;
	transition: height 2s ;
}

.hash-link {
	color: dodgerblue;
	display: inline-flex;
	flex: 1;
	text-align: right;

	&:hover {
		cursor: crosshair;
		color: blue;
	}
}

.commit-list {
	display: inline-block;
	padding: 10px;
	margin-right: 10px;
	background-color: whitesmoke;
	flex: .9;
}

.diff-display {
	flex: 2;
}

.commit-wrapper {
	padding: 5px;
	display: flex;
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

@media (max-width: 600px) {
	.container {
		min-width: 400px;
		max-width: 80%;
	}

	.commit-list {
		display: none;
	}
}
</style>
