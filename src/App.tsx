import * as React from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container'
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Tittle';
import Link from './components/Link'

class App extends React.Component {
  public render() {
    return (
     <Container>
        <Card>
          <Title>Iniciar Sesion</Title>
          <Input placeholder='Correo' Label='Correo'/>
          <Input placeholder='Contraseña' Label='Contraseña'/>
          <Button block={true}>Enviar</Button>
          <Link>Ir al Registro</Link>
        </Card>
     </Container>
       
       
       
     
    );
  }
}

export default App;
