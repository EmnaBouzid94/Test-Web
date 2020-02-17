import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';

class Profil extends Component {
    state = { 
        users:[]
     }
     componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>this.setState({users:res.data})).catch(err=>console.log(err))
    }
   
    render() { 
        console.log(this.state.users);
        console.log(this.props.match.params.id);
        console.log(this.props);
    
        return ( <div className="profil-page">
            <img className="profil-theme"src="https://image.freepik.com/vecteurs-libre/modele-banniere-geometrique-abstrait-colore_1035-17693.jpg" alt=""/>
            <img className="profil-photo" src="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/User-512.png" alt=""/>
                      
            {this.state.users.filter(e=>e.id===Number(this.props.match.params.id)).map(el=>
            
            <div key={Math.random()}>
            <h1>{el.name}</h1>
            <h2><strong>Email:</strong> {el.email}</h2>
            <h2><strong>Website:</strong> {el.website}</h2>
            <h2><strong>Company:</strong> {el.company.name}</h2>
            <button className="following-button"><Link className="link" to={"/users/"+el.id+"/posts"}>Following</Link></button>
            </div>)
            }
            
        </div> );
    }
}
 
export default Profil;