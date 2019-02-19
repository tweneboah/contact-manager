import React, { Component } from 'react';
import Contact from './Contact'



class Contacts extends Component {
    state = {
        Contacts: [
            {
            id: 1,
            name: 'Emmanuel',
            email: 'emmanuel@gmail.com',
            phone: '024382744'   
           },
           {
            id: 2,
            name: 'Prince',
            email: 'emmanuel@gmail.com',
            phone: '024382744'   
           },
           {
            id: 3,
            name: 'Atom',
            email: 'emmanuel@gmail.com',
            phone: '024382744'   
           }
      ]
    }

    render() { 
       const {Contacts} = this.state
        return ( 
            <React.Fragment>
               {Contacts.map((contact) => {
                 return  <Contact key={contact.id}
                  contact = {contact}
                  />
               })}
            </React.Fragment>
         );
    }
}
 
export default Contacts;