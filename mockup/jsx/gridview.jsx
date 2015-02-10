var React = require("react"),
	GridView;

/**
 * GridView component.
 *
 * sections: [
 * 	{
 * 		key: "somekey",
 * 		header: "Some header"
 * 		items: [ { key: item } ]
 * 	},
 * 	{
 * 		key: "otherkey",
 * 		header: "Another header"
 * 		items: [ { key: item } ]
 * 	}
 * ]
 */

GridView = React.createClass({
	render: function() {
		var sections = this.props.sections,
			gridview = [],
			items;

		for (var i = 0, l = sections.length; i < l; i++) {
			if (sections[i].header) {
				gridview.push(<h3 key={"header-" + sections[i].key} className="grid-header">{sections[i].header}</h3>);
			}

			if (sections[i].items) {
				items = [];

				for (var j = 0, m = sections[i].items.length; j < m; j++) {
					for (var key in sections[i].items[j]) {
						items.push(<li key={key} className="grid-item">{sections[i].items[j][key]}</li>);
					}
				}

				gridview.push(<ul key={"section-" + sections[i].key} className="grid-section">{items}</ul>);
			}
		}

		return (<div className="grid-view">{gridview}</div>);
	}
});

module.exports = GridView;
