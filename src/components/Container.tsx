import * as React from 'react'




const style = {
    backgroundColor:'#eee',
    padding:'10px 15px',
    height: '100vh',
    width:'100vw'
}

export default class Container extends React.Component{
    public render(){
        const {children} = this.props

        return(
            <div style={style}>

            {children}
            </div>
        )
    }
}