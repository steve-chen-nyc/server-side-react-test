var React = require("react");
var DefaultLayout = require("./layouts/default");

class HomePage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>Hello {this.props.name}</h1>
        <h5>List Of Users</h5>
        <ul>
          {this.props.users.map(user => {
            return <li key={user.username}>{user.username}</li>;
          })}
        </ul>
        <div id="root" />
        <script src="./app.js" />
      </DefaultLayout>
    );
  }
}

module.exports = HomePage;
