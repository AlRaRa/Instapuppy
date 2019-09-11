import * as React from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container'
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Tittle';
import Link from './components/Link'
import Center from './components/Center';

class App extends React.Component {
  public render() {
    return (
     <Container>
        <Card>
          <Title>Iniciar Sesion</Title>
          <Input placeholder='Correo' Label='Correo'/>
          <Input placeholder='Contraseña' Label='Contraseña'/>
          <Button block={true}>Enviar</Button>
          <Center>
            <Link>Ir al registro</Link>
          </Center>
        </Card>
     </Container>
       
       
       
     
    );
  }
}

export default App;
