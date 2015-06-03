var React = require("react");

var Search = React.createClass({
    getInitialState() {
        return {
            search: ""
        };
    },
    render() {
        return (
            <div className="search-component">
            <input type="text" onChange={this.changeSearch} />
            <span>You are searching for: {this.state.search}</span>
            </div>
    );
    },
    changeSearch(event) {
        var text = event.target.value;

        this.setState({
            search: text
        });
    }
});

if (typeof(window)!=='undefined') {
    window.onload = function() {
        React.render(<Search />, document.body);
    }
}

module.exports = Search;
