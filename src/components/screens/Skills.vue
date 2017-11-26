<template>
	<div class="skills">
		<div class="container">
			<div class="commit-list">
				<span v-for="(item, index) in commits.slice().reverse()" :key="`commit-hash-${index}`">
					<div class="commit-wrapper">
						<div @click="selected=commits.length-1-index" class="hash-link">{{item.hash}}</div>
						{{timeSince(item.date)}}
					</div>
				</span>
			</div>
			<div class="diff-display">
				<div v-for="(line, index) in completeDiff" :key="`src-line-${index}`">
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
export default {
	name: 'skills',
	data: () => ({
		selected: 8,
		commits: [
			{
				hash: 'e1b6410',
				diff: [{position: 0, content: 'HTML: Personal site 1.0'}],
				message: 'Inspired by my dad\'s site & others',
				date: new Date(2002, 0),
			},
			{
				hash: 'c0061d0',
				diff: [{position: 1, content: 'Python'}],
				message: 'Recursion clicks; coding is awesome',
				date: new Date(2015, 1),
			},
			{
				hash: 'f523646',
				diff: [{position: 0, del: true},
					{position: 1, content: 'JS'},
					{position: 0, content: 'HTML'}],
				message: 'First tech gig!',
				date: new Date(2015, 5),
			},
			{
				hash: '85aaa3f',
				diff: [{position: 0, content: 'C++'},
					{position: 3, del: true},
					{position: 3, content: 'Python'}],
				message: 'Software design; TA for Intro',
				date: new Date(2015, 8),
			},
			{
				hash: 'g3002a0',
				diff: [{position: 4, content: 'SQL'},
					{position: 4, content: 'Scheme'},
					{position: 0, content: 'Android'},
					{position: 1, del: true},
					{position: 1, content: 'C++ TA'}],
				message: 'Recursive AND minimalistic?? Sweet!',
				date: new Date(2016, 1),
			},
			{
				hash: 'eb9f3c5',
				diff: [{position: 6, del: true},
					{position: 4, content: 'Microsoft SQL Server'},
					{position: 2, del: true},
					{position: 2, content: 'HTML'},
					{position: 1, content: 'ASP.NET MVC'}],
				message: 'Intern at Proto Labs Inc.',
				date: new Date(2016, 5),
			},
			{
				hash: '46c390e',
				diff: [{position: 2, content: 'Bash'}],
				message: 'Adventures in scripting',
				date: new Date(2016, 8),
			},
			{
				hash: '7530344',
				diff: [{position: 3, del: true},
					{position: 3, content: 'C++ level up'}],
				message: 'ALGORITHMS',
				date: new Date(2017, 1),
			},
			{
				hash: '0f830e9',
				diff: [{position: 9, content: 'Vue.js'},
					{position: 7, content: 'PowerShell'},
					{position: 7, content: '.NET Core'},
					{position: 5, content: 'Jest'},
					{position: 4, content: 'Entity Framework Core'},
					{position: 7, del: true}],
				message: 'Proto Labs ECommerce project',
				date: new Date(2017, 5),
			},
		],
	}),
	computed: {
		completeDiff() {
			let lines = [];
			for (let i = 0; i < this.selected + 1; ++i) {
				let c = this.commits[i];
				if (lines.length > 0) {
					lines = lines.filter(l => l.type !== 'deleted');
				}
				for (let j = 0; j < c.diff.length; ++j) {
					let l = c.diff[j];
					if (l.del) {
						lines[l.position].type = 'deleted';
					} else {
						let pos = l.position + ((lines[l.position] || {}).type === 'deleted' ? 1 : 0);
						lines.splice(pos, 0, ({
							type: ((i === this.selected) ? 'added' : 'unchanged'),
							content: l.content,
							message: c.message,
						}));
					}
				}
			}
			return lines;
		},
	},
	methods: {
		timeSince(date) {
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
	width: 800px;
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

.unchanged {
	.message {
		color: gray;
	}
}

.added {
	color: forestgreen;
	background-color: #e6ffed;
}

.message {
	float: right;
}

.deleted {
	color: #f55;
}

.diff-line {
	padding: 5px;
}
</style>
