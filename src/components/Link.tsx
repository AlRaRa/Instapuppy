import * as React from 'react'




const style = {
    color: 'blue',
    fontSize: '12px',
    padding: '15px'
}
export default class Card extends React.Component{

    public render(){

        return(
           <a {...this.props} style={style}/>
        )
    }
}