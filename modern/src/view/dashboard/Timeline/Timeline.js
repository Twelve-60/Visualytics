Ext.define('Visualytics.view.dashboard.timeline.Timeline', {
	extend: 'Ext.container.Container',
	requires: [
		'Ext.draw.Container',
		'Visualytics.view.dashboard.timeline.TimelineController',
		'Visualytics.view.dashboard.timeline.sprites.Timeline'
	],
	xtype: 'timeline',
	controller: 'timeline',
	layout: 'fit',
	items: [{
		xtype: 'draw',
		layout: 'fit',
		gradients: [{
			id: 'flag',
			type: 'linear',
			stops: [{
				offset: 0,
				color: '#d00'
			}, {
				offset: 1,
				color: '#f44'
			}]
		}],
		listeners: {
			bodyresize: 'onResize'
		}
	}],
	redraw: function (drawContainer, size) {
		var surface = drawContainer.getSurface();

		surface.removeAll(true);

		surface.add({
			type: 'timeline',
			width: size.width * 0.9,
			translationX: size.width / 2,
			translationY: size.height / 2,
			milestones: [
				{label: 'Case Information', numTicks: 5},
				{label: 'Issues & Evidence', numTicks: 3},
				//{label: 'Testing', numTicks: 4},
				//{label: 'Testing', numTicks: 8},
				{label: 'Goals & Actions', numTicks: 2}
			],
			flags: [
				{milestone: 0, tick: 2},
				{milestone: 0, tick: 4},
				{milestone: 1, tick: 0},
				{milestone: 1, tick: 3}
			]
		});
	}
});
