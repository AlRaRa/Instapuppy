import * as React from 'react'
import ProfileImg from 'src/components/ProfileImg';
import Button from 'src/components/Button';
import Card from '../../components/Card'


const style ={

    container:{
        padding: '15px'
    },
    row:{
        dipslay: 'flex',
        justifyContent:'space-between',
        padding:'15px',
    }
}
export default class Profile extends React.Component{
    public render(){
        return(
            <div style={style.container}> 
                <div style={style.row}>

                <ProfileImg/>
                <Button>Agregar</Button>
                </div>
            
            <div style={style.row}>
                <Card>Img 1</Card>
                <Card>Img 2</Card>
                <Card>Img 3</Card>
            </div>
            </div>
           
        )
    }
}