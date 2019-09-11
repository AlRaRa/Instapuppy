import * as React from 'react'




const style = {
    color: '#555'
}
export default class Tittle extends React.Component{
    public render(){
       

        return(
          <h2 {...this.props} style={style}/>
        )
    }
}