import { createContext, useContext, useState } from "react";
import { getWeatherfromCity } from "../api";

const WeatherContext = createContext();

export const useWeather = ()=>{
    return useContext(WeatherContext)
}

export const WeatherProvider = ({children}) => {
    const [data, setData] = useState();
    const [searchCity, setSearchCity] = useState();

    const fetchData = async (city) =>{
         const response = await getWeatherfromCity(city)
         setData(response)
    }

    return (
    <WeatherContext.Provider value={{ fetchData, data, searchCity, setSearchCity, setData}}>
        {children}
    </WeatherContext.Provider>
    )
}