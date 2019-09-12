import * as React from 'react'
import {Link} from 'react-router-dom'
import {faUser, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const style = {

    navbar:{
    borderBotton: 'solid 1px #aaa',
    padding: '10px 15px'
    },
    Link: {
       color:'#555',
       padding: '10px 15px',
    }
}

export default class Navbar extends React.Component{
    public render(){
        return(
            <div style={style.navbar}>
                <div><Link style={style.Link} to='/app/newsfeed'><FontAwesomeIcon icon={faNewspaper}/>Instapuppy</Link></div>
                <div><Link to='/app/profile' style={style.navbar}><FontAwesomeIcon  icon={faUser}/>PerfiL</Link></div>
            </div>
        )
    }
}