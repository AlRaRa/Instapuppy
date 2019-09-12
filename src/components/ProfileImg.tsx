import * as React from 'react'



const style ={
    img:{
        borderRadius: '100%',
    }
}
export default class ProfileImg extends React.Component{
    public render(){
        return(
            <div style={style.img}>
                
                <img src='https://placekitten.com/100/100' />
            </div>
        )
    }
}