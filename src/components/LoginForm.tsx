import * as React from 'react'
import Input from './Input';
import Center from './Center';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class LoginForm extends React.Component{
    public render(){

        return(
            <form>
              <Input placeholder='Correo' label='Correo'/>
              <Input placeholder='Contraseña' label='Contraseña'/>
              <Button block={true}>Enviar</Button>
              <Center>
              <Link to='/register'>Ir al registro</Link>
              </Center>
            </form>
            
        )
    }
}