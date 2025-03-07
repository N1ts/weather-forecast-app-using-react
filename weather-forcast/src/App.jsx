import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import './App.css'
import { useWeather } from './context/Weather';


function App() {
  const weatherdata = useWeather()
  console.log(weatherdata)

  
  return (
    <div className='app'>
      <h1>Weather forecast</h1>
      <Input />
      <Button value="Search" onClick = {()=>weatherdata.fetchData(weatherdata.searchCity)}/>
      <Card />
      <Button value="Refresh"/>
      
    </div>
  )
}

export default App;
