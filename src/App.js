import React, { Component } from 'react';

import Nav from './navbar';
import ListTitle from './ContactList/listTitle';

import TableHeader from './ContactList/Table/tableHeader';

import contacts from './contacts';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: contacts,
      currentContacts: contacts,
      sortBy: 'First Name',
      pageSize: 10,
      pages: Math.ceil(contacts.length / 10),
      currentPage: 1,
      showSortList: false,
      showPageSize: false,
    }
  }

  setPages = (int) => {
    const newPages = Math.ceil(this.state.contacts.length / int)
    this.setState(prevState => ({pages: newPages}));
  };

  setContactsDisplayed = (page) => {
    const lastContactIndex = parseInt(page, 10) * this.state.pageSize,
          firstContactIndex = parseInt(lastContactIndex, 10) - this.state.pageSize,
          currentContacts = this.state.contacts.slice(firstContactIndex, lastContactIndex);
    this.setState(prevState => ({currentContacts: currentContacts}));
  }

  setPageSize = (int) => {
    this.setState(prevState => ({
      pageSize: int,
      currentPage: 1,
    }));
    this.toggle();
    this.setPages(int);
  }

  toggle = (string) => {
    string === 'sortList' ?
      this.setState(prevState => ({showSortList: !this.state.showSortList}))
      : this.setState(prevState => ({showPageSize: !this.state.showPageSize}))
  }

  nextPage = () => {
    if ((this.state.currentPage + 1) <= this.state.pages) {
      this.setState(prevState => ({
        currentPage: this.state.currentPage + 1,
      }))
     this.setContactsDisplayed(this.state.currentPage);
    }
  }

  prevPage = () => {
    if ((this.state.currentPage - 1) > 0) {
      this.setState(prevState => ({
        currentPage: this.state.currentPage - 1,
      }))
      this.setContactsDisplayed(this.state.currentPage);
    }
  }

  setSort = (string) => {
    let display = '';
    const newContacts = this.state.contacts.sort(function(a, b) {
      if (a[string] < b[string]) return -1;
      if (a[string] > b[string]) return 1;
      return 0;
    })
    if (string === 'firstName') display = 'First Name';
    if (string === 'lastName') display = 'Last Name';
    if (string === 'country') display = 'Country';
    if (string === 'city') display = 'City';
    if (string === 'state') display = 'State';
    this.setState(prevState => ({
      sortBy: display,
      contacts: newContacts,
      showSortList: false,
    }));
    this.setContactsDisplayed(this.state.currentPage);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <ListTitle
          setSort={this.setSort}
          sortBy={this.state.sortBy}
          toggle={this.toggle}
          setPageSize={this.setPageSize}
          pages={this.state.pages}
          page={this.state.currentPage}
          pageSize={this.state.pageSize}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          contacts={this.state.contacts}
          showSortList={this.state.showSortList}
          showPageSize={this.state.showPageSize}
        />
        <TableHeader
          pageSize={this.state.pageSize}
          pages={this.state.pages}
          contacts={this.state.currentContacts}
          sortBy={this.setSort}
        />
      </div>
    );
  }
}

export default App;
