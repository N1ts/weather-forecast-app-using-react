import '../App.css'
import {useWeather} from '../context/Weather'

function Card(){
const weather = useWeather()
    // console.log(weather)

    return(
        <div className='card'>
            <img src={weather?.data?.current?.condition?.icon} />
            {weather?.data?.current?.condition?.text}
            <h2>{weather?.data?.current?.temp_c}°C</h2>
            <h5>{weather?.data?.location?.country} {weather?.data?.location?.region} {weather?.data?.location?.name}
            </h5>
        </div>
    )
}

export default Card;