import { React, Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField: serachFied } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(serachFied.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <p></p>
        <div className="autocomp_wrapper">
          <SearchBox
            placeholder="search for monster"
            handleChange={this.handleChange}
          ></SearchBox>
          <div>
            <p></p>
            <CardList monsters={filteredMonsters}></CardList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
