import * as React from 'react'
import Card from '../../components/Card';
import Container from '../../components/Container'
import Title from '../../components/Tittle';
import LoginForm from '../../components/LoginForm'

export default class Login extends React.Component{
    public render(){
        return(
            <Container center={true}>
            <Card>
              <Title>Iniciar Sesion</Title>
              <LoginForm />
            </Card>
         </Container>
        )
    }
}