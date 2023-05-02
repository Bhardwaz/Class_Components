import React, {Component} from "react";
class GithubCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            info : props
        }
    }
    render(){
        const { info } = this.state;
        console.log(info.prop);
        return(
        <>
         <img style={{width:'200px', height:'200px'}} src={info.prop.avatar_url} alt="profile_pic"/>
         <h2>{info.prop.name}</h2>
         <p>{info.prop.bio}</p>  
         <p> Total Repositry : {info.prop.public_repos}</p>  
         <p> Last seen : {info.prop.updated_at}</p>  
        </>
        )
    }
}
export default GithubCard