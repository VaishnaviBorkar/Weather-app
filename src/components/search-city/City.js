import './city.css'
function City(props){
   
    return(

        <div className="card"> 
            <h2>City Component </h2>
            <input type="text" placeholder="Enter City Name" className="input" 
             onChange={(e)=>props.setCity(e.target.value)}/>
            <input type="submit" value="Search"className="btn" onClick={props.search} />
            
        </div>
     
    );
}
export default City;