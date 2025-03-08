import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue] - doesn't store entire objects, only ind. values
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilterRobots] = useState(robots);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    setFilterRobots(
      robots.filter((robot) => {
        return robot.name.toLocaleLowerCase().includes(searchField);
      })
    );
  }, [robots, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Robo Rolodex</h1>

      <SearchBox
        className="robots-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Robots"
      />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;

////// CLASS COMPONENTS //////

// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { robots: users };
//         })
//       );
//   }

// onSearchChange = (event) => {
// const searchField = event.target.value.toLocaleLowerCase();
// this.setState(() => {
//   return { searchField };
// });
// };

//   render() {
//     const { robots, searchField } = this.state;
//     const { onSearchChange } = this;

// const filteredRobots = robots.filter((robot) => {
//   return robot.name.toLocaleLowerCase().includes(searchField);
// });

//     return (
//       <div className="App">
//         <h1 className="app-title">Robo Rolodex</h1>
//         <SearchBox
//           className="robots-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search robots"
//         />
//         <CardList robots={filteredRobots} />
//       </div>
//     );
//   }
// }

// export default App;
