import React, { Component } from 'react';

class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onShowClick =(e)=> {
      this.setState({
          showContactInfo: !this.state.showContactInfo
      })
    }

    render() { 
        const {name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return ( 
            <div className='card card-body mb-3'>
                <h4>{name} <i onClick={this.onShowClick} className='fas fa-sort-down'/></h4>
                {showContactInfo? ( <ul className='list-group'>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'>Phone: {phone}</li>
                </ul>): null}
               
            </div>
         );
    }
}
 
export default Contact;
