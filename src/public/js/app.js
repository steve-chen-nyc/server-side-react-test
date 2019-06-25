import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }
    
    componentDidMount() {
        axios.get("/api").then((data) => {
            this.setState({
                data: data.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.data.name}</h1>
                <p>From App.js</p>
            </div>
        )
    }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
