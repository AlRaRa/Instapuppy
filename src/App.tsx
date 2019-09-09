import * as React from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container'
import Input from './components/Input';
import Button from './components/Button'


class App extends React.Component {
  public render() {
    return (
     <Container>
        <Card>

          <Input placeholder='Correo' Label='Correo'/>
          <Input placeholder='Contraseña' Label='Contraseña'/>
          <Button>Enviar</Button>
        </Card>
     </Container>
       
       
       
     
    );
  }
}

export default App;
