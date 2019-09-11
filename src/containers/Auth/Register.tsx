import * as React from 'react'
import { Link} from 'react-router-dom'


import Card from '../../components/Card';
import Container from '../../components/Container'
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Tittle';
import Center from '../../components/Center';


export default class Login extends React.Component{
    public render(){
        return(
            <Container>
            <Card>
              <Title>Registro</Title>
              <Input placeholder='Correo' Label='Correo'/>
              <Input placeholder='Contraseña' Label='Contraseña'/>
              <Button block={true}>Enviar</Button>
              <Center>
                <Link to='/'>Iniciar sesion</Link>
              </Center>
            </Card>
         </Container>
        )
    }
}