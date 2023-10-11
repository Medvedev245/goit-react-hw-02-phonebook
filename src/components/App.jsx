import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: {
      name: '',
      number: '',
    },
  };

  addContacts = name => {
    name.id = nanoid(5);
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, name],
      };
    });
  };

  changeName = newName => {
    this.setState({
      name: newName,
    });
  };

  deleteNumber = element => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== element),
    }));
  };

  getVisibleItems = () => {
    const contacts = this.state.contacts;
    const name = this.state.name;
    if (!name) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  render() {
    const visibleItems = this.getVisibleItems();
    return (
      <div className="w-[300px] p-[20px]">
        <h1 className="mb-[20px]">Phonebook</h1>
        <ContactForm state={this.state} addContacts={this.addContacts} />
        <h2 className="mb-[20px] font-bold">Contacts</h2>
        <Filter state={this.state} onChangeName={this.changeName} />
        <ContactList state={visibleItems} onDelete={this.deleteNumber} />
      </div>
    );
  }
}
