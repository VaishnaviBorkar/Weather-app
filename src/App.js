import './App.css';
import axios from 'axios'
import { useState} from 'react';
import City from'./components/search-city/City';
import Weather from './components/weather-info/Weather'
function App() {
  //states
   const [CityName,setCity]=useState('')
   const [Weatherdata,setWeatherdata]=useState('')
  // useEffect(()=>{
      const search = async ()=>{
        // e.preventDefault()
     await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=6024a60ec2ef472438d5a2f3519cac9e`)
      .then(res=>{
      console.log(res);
      setWeatherdata(res.data)
      })
      .catch(error=>{
        alert("Please Enter Valid City Name")
      console.log(error);
      })  
    }
    // })
  return (
    
    <div className="App">
      {/* <h1>`naame of city :{CityName}'</h1> */}
      <City setCity={setCity} search={search}/>
      {Weatherdata?(
      <Weather Weatherdata={Weatherdata} />
      ):(<h2>Search Your City Weather</h2>)
      }
    </div>
  );
}

export default App;
