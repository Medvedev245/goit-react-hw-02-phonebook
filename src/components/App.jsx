import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = contact => {
    if (this.state.contacts.find(el => el.name === contact.name)) {
      Notify.failure('Contact already exists');
    } else {
      Notify.success('Contact ADD');
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, { ...contact, id: nanoid(5) }],
        };
      });
    }
  };

  changeName = value => {
    this.setState({
      name: value,
    });
  };

  deleteNumber = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  getVisibleItems = () => {
    const { contacts, name } = this.state;
    console.log(name);
    console.log(contacts);
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
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2 className={styles.contacts}>Contacts</h2>
        <Filter state={this.state} onChangeName={this.changeName} />
        <ContactList state={visibleItems} onDelete={this.deleteNumber} />
      </div>
    );
  }
}
