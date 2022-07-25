import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){ 
    super(props);
    this.state = {
      title: '757 film',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Sobre', path: '/sobre' },
        { title: 'Contato', path: '/contato' }
      ],
      home: {
        title: 'Seja bem vindo',
        subtitle: 'Conheça nossos serviços',
        text: 'texto teste'
      },
      sobre: {
        title: 'Sobre nós',
      },
      contato: {
        title: 'Fale com a gente',
      }
    }
  }

  render(){
    return(
      <div>Hello world</div>
    );
  }
}

export default App;
