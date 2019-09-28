import React from 'react';
import axios from 'axios';
import Chart from './components/Chart';


class App extends React.Component{
  constructor(props){
    super(props);
  }
  async data(){
    const response = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/locale/locales', {
        headers: {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key": "9bbc581e13mshb7bddca2da084b9p1c0de8jsn8f7bf79d635b"
        }
    });
    return response;
  }

  componentDidMount(){
    console.log('Hi')
  }

  render(){
    return (
      <Chart />
    );
  }
}

export default App;
