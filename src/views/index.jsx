var React = require('react');
var DefaultLayout = require('./layouts/default');

class HomePage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.name}</div>
        <div id="root"></div>
        <script src="./app.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = HomePage;
