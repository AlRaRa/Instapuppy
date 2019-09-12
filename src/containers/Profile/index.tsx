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
        marginBottom:'10px',
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
                <Card><img src="https://placekitten.com/408/287"/> 1</Card>
                <Card><img src="https://placekitten.com/408/287"/> 2</Card>
                <Card><img src="https://placekitten.com/408/287"/> 3</Card>
            </div>
            </div>
           
        )
    }
}