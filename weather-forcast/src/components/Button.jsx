import '../App.css'


function Button({value, onClick}){
    
    return(
        <button className='btn' onClick={onClick}>{value}</button>
    )
}

export default Button;