import React from "react";
import ClChildComponent from "./ClChildComponent";
class Profile extends React.Component{
  constructor(props){
    super(props)
    console.log('constructor');
  }
  componentDidMount(){
    console.log('component did mount');
  }
  render(){
    console.log('render function');
    return <div>
        <h1> Class Component </h1>
        <ClChildComponent name="Classical Sumit" />
        <ClChildComponent name=" second Classical Sumit" />
    </div>
  }
}
export default Profile