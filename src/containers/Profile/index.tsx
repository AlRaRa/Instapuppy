import * as React from 'react'
import ProfileImg from 'src/components/ProfileImg';



const style ={
    container:{
        padding: '15px',
    }
}
export default class Profile extends React.Component{
    public render(){
        return(
            <div style={style.container}>

                <ProfileImg/>
            </div>
        )
    }
}