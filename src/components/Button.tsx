import * as React from 'react'




const style = {
    backgroundColor:'#00D182',
    border: '0PX',
    borderRadius: '4px',
    padding:'10px 15px',
}

export default class Card extends React.Component{

    public render(){

        return(
           <button {...this.props} style={style}/>
        )
    }
}