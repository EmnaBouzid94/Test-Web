import React, { Component } from 'react'
import Axios from 'axios';

class Post extends Component {
    state = { 
        post:{},
        comments:[],
        users:[]
     }
     componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.postId).then(res=>this.setState({post:res.data})).catch(err=>console.log(err))
        Axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.props.match.params.postId).then(res=>this.setState({comments:res.data})).catch(err=>console.log(err))
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>this.setState({users:res.data})).catch(err=>console.log(err))
    }
    render() { 
        console.log(this.props.match.params.postId)
        return ( <div>
            <div className="profil-page">
            <img className="profil-theme"src="https://image.freepik.com/vecteurs-libre/modele-banniere-geometrique-abstrait-colore_1035-17693.jpg" alt=""/>
            <img className="profil-photo" src="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/User-512.png" alt=""/>
                  
            {this.state.users.filter(e=>e.id===Number(this.props.match.params.id)).map(el=>
            <h1>{el.name}</h1>)}
        
    </div>
                <div className="post-comments">
                    
                <div >
                    
                    <h1>Post N°{this.props.match.params.postId}</h1>
                    <hr/>
                    <h2>{this.state.post.title}</h2>
                    <p>{this.state.post.body}</p>
                </div>
                <div >
                    <hr/>
                    <h1>Comments</h1>
                    <hr/>
            {this.state.comments.map(e=>
                <div className="comments">                  
                    <h3>{e.name}</h3>
                    <h4>{e.email}</h4>
                    <p>{e.body}</p>
                    <hr/>
                </div>)
                
                }
        </div>
            
        </div>
        </div> );
    }
}
 
export default Post;