var React = require("react"),
	ListView;

/**
 * ListView component.
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

ListView = React.createClass({
	render: function() {
		var sections = this.props.sections,
			listview = [],
			items;

		for (var i = 0, l = sections.length; i < l; i++) {
			if (sections[i].header) {
				listview.push(<h3 key={"header-" + sections[i].key} className="list-header">{sections[i].header}</h3>);
			}

			if (sections[i].items) {
				items = [];

				for (var j = 0, m = sections[i].items.length; j < m; j++) {
					for (var key in sections[i].items[j]) {
						items.push(<li key={key} className="list-item">{sections[i].items[j][key]}</li>);
					}
				}

				listview.push(<ul key={"section-" + sections[i].key} className="list-section">{items}</ul>);
			}
		}

		return (<div className="list-view">{listview}</div>);
	}
});

module.exports = ListView;
