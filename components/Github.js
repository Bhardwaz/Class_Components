import React, {Component} from "react";
import GithubCard from "./GithubCard";
class Github extends Component{
    constructor(props){
        super(props)
    // this is the best place to set state
        this.state = {
            info : null
        }
    }
    async componentDidMount(){
      const data = await fetch('https://api.github.com/users/Bhardwaz')
      const json = await data.json()
      this.setState({
        info : json
      })
    }
    componentDidUpdate(){
      console.log(this.state.info);
    }
    render(){
        const {info} = this.state
        return(
           <div>
            <h1>Github Profile</h1>
            <GithubCard prop={info}/>
           </div> 
        )
    }
}
export default Github