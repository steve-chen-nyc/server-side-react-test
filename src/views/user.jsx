var React = require("react");
var DefaultLayout = require("./layouts/default");

class HomePage extends React.Component {
  render() {
    return (
      // SERVER SIDE RENDERED
      <DefaultLayout title={this.props.title}>
        <h1>USER NAME: {this.props.user.username}</h1>
      </DefaultLayout>
    );
  }
}

module.exports = HomePage;
