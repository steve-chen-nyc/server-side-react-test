var React = require('react');
var DefaultLayout = require('./layouts/default');

class Foo extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello from {this.props.name}</div>
        <div id="foo"></div>
        <script src="./foo.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Foo;
