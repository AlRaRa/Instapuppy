import * as React from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends React.Component{
    public render(){
        return(
            <div style={style}>
                <Link to='/app/newsfeed'>Instapuppy</Link>
                <Link to='/app/profile'>PerfiL</Link>'
            </div>
        )
    }
}