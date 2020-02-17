import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';

class Posts extends Component {
    state = { 
        posts:[],
        users:[]
     }
     componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts?userId='+this.props.match.params.id).then(res=>this.setState({posts:res.data})).catch(err=>console.log(err))
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>this.setState({users:res.data})).catch(err=>console.log(err))
    }
    render() { 
        return ( <div>
        <div className="profil-page">
            <img className="profil-theme"src="https://image.freepik.com/vecteurs-libre/modele-banniere-geometrique-abstrait-colore_1035-17693.jpg" alt=""/>
            <img className="profil-photo" src="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/User-512.png" alt=""/>
                      
            {this.state.users.filter(e=>e.id===Number(this.props.match.params.id)).map(el=>
            
            <h1>{el.name}</h1>
            )
            }
            
        </div>
            <div className="posts">
            {this.state.posts.map(el=>
                <div className="post">
                    <h1>{el.title}</h1>
                    <p>{el.body}</p>
                    <button><Link to={"/users/"+el.userId+"/posts/"+el.id} className="link">Open</Link></button>
                </div>)}
        </div>
        </div> );
    }
}
 
export default Posts;