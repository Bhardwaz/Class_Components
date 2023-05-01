import React from "react";

class ClChildComponent extends React.Component{
    constructor(props){
       super(props)
       this.state = {
        count : 0,
        count2:0
       }
    console.log('child constructor');
    }
    componentDidMount(){
    // best place to make API call
    console.log('child component did mount');  
    }
    render(){
        console.log('child render');
        return(
            <div>
                <h1>Child of class Component</h1>
                // we do not mutate state directly
                <h1>{this.props.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count:1,
                        count2:12
                    })
                }}>Set Count</button>
            </div>
        )
    }
}
export default ClChildComponent