import React, { Component } from 'react';

//COMPONENTS

import Contacts from './components/Contacts'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
       <Header branding ='Contact Manager v1'/>
        <div className='container'>
         <Contacts/>
        </div>
       
      
      
      </div>
    );
  }
}

export default App;
