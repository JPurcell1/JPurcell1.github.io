import React, {Component} from "react"; 
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";


class App extends Component {
  
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
    
  render() {
    const { robots, searchfield } = this.state

    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })


    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return(
        <div className="tc"> 
          <React.StrictMode>
            <h1>RoboFriends</h1>
            <SearchBar searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </React.StrictMode>
        </div>
      ) 
    }
  }
}

export default App;