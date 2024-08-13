import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  componentDidMount(){
    console.log("Component did mount" , this.state.count);
    this.setState ({
        count: this.state.count+100
    })
    
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

  render() {
    const {count } = this.state
    return (
      <div>
        <h1>Users Class component</h1>
        <h2> Name : {this.props.name}</h2>
        <h3>Location :{this.props.location}</h3>
        <h2> Counter  : {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })} > Counter Increment</button>
      </div>
    );
  }
}

export default UserClass;
