import React from 'react';
import './App.css';
import Axios from 'axios';

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
  }
}

export default App;
