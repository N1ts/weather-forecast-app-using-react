const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=689af482289d4e38bf2171654250603'

export const getWeatherfromCity = async (city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json()
}