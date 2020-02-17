import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';

class Profils extends Component {
    state = { 
        users:[]
     }
     componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>this.setState({users:res.data})).catch(err=>console.log(err))
    }
    componentDidUpdate(PrevProps,PrevState){
        if (PrevState.users.length !== this.state.users.length)
        {
            Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>this.setState({users:res.data})).catch(err=>console.log(err))
        }

    }
    render() { 
        console.log(this.state.users);
        console.log(this.props.match.params.id);
        console.log(this.props);
    
        return ( <div className="profils">
                                 
            {this.state.users.map(el=>
            
            <div key={Math.random()}className="profil">
            <h1>{el.name}</h1>
            <h2>Email: {el.email}</h2>
            <h2>Website: {el.website}</h2>
            <h2>Company: {el.company.name}</h2>
            <button><Link to={"/users/"+el.id}className="link">Profil</Link></button>
            </div>)
            }
            
        </div> );
    }
}
 
export default Profils;