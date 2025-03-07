import {useWeather} from '../context/Weather'

function Input(){

    const weather = useWeather()
    const handleChange = (e)=>{
        console.log(e.target.value)
        weather.setSearchCity(e.target.value)
        
    }

    return(
        <div className='input-field'>
            <input value={weather.searchCity} onChange={handleChange} placeholder='Search'/>
        </div>
        
    )
}

export default Input;