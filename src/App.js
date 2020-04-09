import React from 'react';
import './App.css';
import Axios from 'axios';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
}

componentDidMount() {
  this.getWeatherData();
}

async getWeatherData() {
  try {
    const response = await Axios.get("");

    this.setState({weather: response.data });
  } catch(error) {
    console.error(error);
  }
}

}

render() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

    </div>
  )
}

export default App;
