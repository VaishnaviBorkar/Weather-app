function Weather(props){
   const {Weatherdata}=props; //destructuring the props
    return(
        <div>
            <h1>{Weatherdata.name},{Weatherdata.sys.country}</h1>
            <h2>Weather rendering</h2>
        </div>

    );
}
export default Weather;