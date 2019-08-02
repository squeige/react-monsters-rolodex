import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super(); /* Always include a super for a constructor. 
    This calls the constructor method on the APP Class giving us access to the this.state*/

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch(
      'https://jsonplaceholder.typicode.com/users'
    ) /* Fetch funtions that returns a Promise that we are using with the jsonplaceholder api*/
      .then(response => response.json())
      .then(users =>
        this.setState({ monsters: users })
      ); /* Here we are pulling information from an API thats providing a JSON list of users.*/
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    ); /*Curly Braces in JSX tells us that this is javascript. 
    Classname assigns an html class and is used instead when working with JSX. 
    Also notice here we are passing the Cardlist a prop using the this.state.monsters*/
  }
}
export default App;
