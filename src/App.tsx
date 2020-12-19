import React, { Component } from 'react';
import './App.css';

import Monster from './model/monster';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

interface AppProps {
}

interface AppState {
  monsters: Monster[],
  searchField: string
}

class App extends Component<AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
  
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
