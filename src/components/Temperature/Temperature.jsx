import React, { useState } from 'react';
import axios from 'axios';
import cloud from './cloud-icon.png'
import sun from './sun-icon.png'
import rain from './rain-icon.png'
import { Link } from 'react-router-dom';
export default function WeatherPage() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState('metric');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    const fetchWeatherData = () => {
        setLoading(true);

        const apiKey = '11dbe58e61dab46ac3d473c9aab0b202';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

        axios
            .get(apiUrl)
            .then((response) => response.data)
            .then((data) => {
                const dailyWeatherData = filterDailyWeatherData(data);
                setWeatherData(dailyWeatherData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            });
    };

    const filterDailyWeatherData = (data) => {
        const dailyData = [];
        const dates = {};

        data.list.forEach((item) => {
            const date = item.dt_txt.split(' ')[0];
            if (!dates[date]) {
                dates[date] = true;
                dailyData.push(item);
            }
        });

        return { ...data, list: dailyData };
    };



    function getWeatherIcon(weatherDescription) {
        if (weatherDescription.includes('clear')) {
            return sun;
        } else if (weatherDescription.includes('cloud')) {
            return cloud;
        } else if (weatherDescription.includes('rain')) {
            return rain;
        }
        return '';
    }
    const getDayName = (dateString) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return days[dayIndex];
    };

    const toggleUnit = () => {
        setUnit(unit === 'metric' ? 'imperial' : 'metric');
        if (weatherData) {
            const updatedWeatherData = { ...weatherData };
            if (unit === 'metric') {
                updatedWeatherData.list.forEach((item) => {
                    item.main.temp = (item.main.temp * 9) / 5 + 32;
                });
            } else {
                updatedWeatherData.list.forEach((item) => {
                    item.main.temp = ((item.main.temp - 32) * 5) / 9;
                });
            }
            setWeatherData(updatedWeatherData);
        }
    };

    return (
        <div className='temp-div h-100 w-100 m-auto pb-5'>
            <h2 className='py-5'>Weather Information</h2>

            <Link to='home' className='text-white back'>Back</Link>

            <form onSubmit={handleSubmit} className='d-flex w-50 m-auto mt-5 py-5 '>

                <input placeholder="Enter city name" type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} class="input-city mt-3 " required="">

                </input>


                <button className='btn-ser-city'>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper text-white">
                            <svg fill="#000000" height="24" width="24" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 17c-.13.004-.253.058-.344.15L.64 26.652c-.896.893-.776 2.134-.105 2.81.67.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.326-.328-.47-.826.102-1.397l9.517-9.503c.326-.318.084-.857-.363-.857zm8.45-14.93c-1.604.213-3.146.91-4.39 2.063-.49.453.21 1.17.68.734 2.18-2.02 5.392-2.445 8.022-1.06.58.332 1.053-.603.465-.885-1.5-.79-3.17-1.064-4.776-.852zM20 0c-5.517 0-10 4.483-10 10s4.483 10 10 10 10-4.483 10-10S25.517 0 20 0zm0 1c4.976 0 9 4.024 9 9s-4.024 9-9 9-9-4.024-9-9 4.024-9 9-9z" /></svg>

                        </div>
                    </div>
                    <span>search</span>

                </button>
                {/* <button onClick={toggleUnit} className='unit-btn'>Toggle Unit</button> */}
           
            </form>

            {loading ? (
                <p>Loading weather data...</p>
            ) : (
                weatherData && (
                    <div className='weather-page'>
                        <div className="row ">
                            <div className="col-lg-12 ms-5 mb-5 text-white">

                                <h3 className='cityname '>{weatherData.city.name}, {weatherData.city.country}</h3>
                          
                                <div class="btn-container">

<label class="switch btn-color-mode-switch" >
    <input defaultValue={1} id="color_mode" name="color_mode" type="checkbox" />

    <label class="btn-color-mode-switch-inner" data-off="C" data-on="F" for="color_mode" onClick={toggleUnit}></label>
</label>

</div>
                            </div>

                            {/* <div className="col-lg-12 the-day ms-5 py-5 mb-5 text-white">
                                {weatherData.list.map((item) => {
                                    const currentDate = new Date().toISOString().split('T')[0];
                                    const itemDate = item.dt_txt.split(' ')[0];

                                    if (itemDate === currentDate) {
                                        return (
                                            <div className="col-md-3 ms-3 all-info-temp text-white current-day">
                                                <div className="row son-weather" key={item.dt}>
                                                    <div className="col-md-7 infotemp">
                                                        <p className="pday">{getDayName(item.dt_txt)}</p>
                                                        <p className="pdate"> {item.dt_txt.split(' ')[0]}</p>
                                                        <i className="fa-solid fa-temperature-low py-2 pb-4 pe-3"></i>{" "}
                                                        {item.main.temp.toFixed(1)}°{unit === "metric" ? "C" : "F"}
                                                        <p className="ppressure">
                                                            <svg
                                                                className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8"
                                                                set="current-conditions"
                                                                name="pressure"
                                                                theme="dark"
                                                                data-testid="Icon"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <title>Pressure</title>
                                                                <path d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.669.742-1.66-.295-1.66h-2.382V2.907c0-.83-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207v1.772l-.664.005z"></path>
                                                            </svg>{" "}
                                                            {item.main.pressure} hPa
                                                        </p>
                                                        <p className="pclouds">
                                                            <i className="fa-solid fa-cloud pe-3"></i> {item.clouds.all}%
                                                        </p>
                                                        <p className="pwind">
                                                            <i className="fa-solid fa-wind  me-3"></i> {item.wind.speed} m/s
                                                        </p>
                                                    </div>
                                                    <div className="col-md-5 ptemp">
                                                        <p>{item.weather[0].description}</p>
                                                        {getWeatherIcon(item.weather[0].description) && (
                                                            <img
                                                                className="imgtemp"
                                                                src={getWeatherIcon(item.weather[0].description)}
                                                                style={{
                                                                    marginLeft: "10px",
                                                                    verticalAlign: "middle",
                                                                    width: "100px",
                                                                    color: "black",
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}

                            </div> */}

                            {weatherData.list.map((item) => (
                                <div className="col-md-3 me-5 m-auto all-info-temp text-white ">
                                    <div className='row son-weather' key={item.dt}>

                                        <div className="col-md-7 infotemp">
                                            <p className='pday'>{getDayName(item.dt_txt)}</p>

                                            <p className='pdate'> {item.dt_txt.split(' ')[0]}</p>


                                            <i class="fa-solid fa-temperature-low py-2 pb-4 pe-3"></i> {item.main.temp.toFixed(1)}°{unit === 'metric' ? 'C' : 'F'}

                                            <p className='ppressure'>
                                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="pressure" theme="dark" data-testid="Icon" viewBox="0 0 24 24"><title>Pressure</title>
                                                    <path d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"></path></svg> {item.main.pressure} hPa</p>
                                            <p className='pclouds'><i class="fa-solid fa-cloud pe-3"></i> {item.clouds.all}%</p>
                                            <p className='pwind'><i class="fa-solid fa-wind  me-3"></i> {item.wind.speed} m/s</p>

                                        </div>
                                        <div className='col-md-5 ptemp'>
                                            <p>{(item.weather[0].description)}</p>
                                            {getWeatherIcon(item.weather[0].description) && (
                                                <img className='imgtemp'
                                                    src={getWeatherIcon(item.weather[0].description)}

                                                    style={{ marginLeft: '10px', verticalAlign: 'middle', width: '100px', color: 'black' }}
                                                />
                                            )}
                                        </div>



                                    </div>
                                </div>))}





                            {/* {weatherData.list
                                .filter((item) => item.dt_txt.split(' ')[0] !== new Date().toISOString().split('T')[0])
                                .map((item) => (
                                    <div className="col-md-3 me-5 m-auto all-info-temp text-white ">
                                        <div className="row son-weather" key={item.dt}>
                                            <div className="col-md-7 infotemp">
                                                <p className="pday">{getDayName(item.dt_txt)}</p>
                                                <p className="pdate"> {item.dt_txt.split(' ')[0]}</p>
                                                <i className="fa-solid fa-temperature-low py-2 pb-4 pe-3"></i>{" "}
                                                {item.main.temp.toFixed(1)}°{unit === "metric" ? "C" : "F"}
                                                <p className="ppressure">
                                                    <svg
                                                        className="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8"
                                                        set="current-conditions"
                                                        name="pressure"
                                                        theme="dark"
                                                        data-testid="Icon"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <title>Pressure</title>
                                                        <path d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"></path>
                                                    </svg>{" "}
                                                    {item.main.pressure} hPa
                                                </p>
                                                <p className="pclouds">
                                                    <i className="fa-solid fa-cloud pe-3"></i> {item.clouds.all}%
                                                </p>
                                                <p className="pwind">
                                                    <i className="fa-solid fa-wind  me-3"></i> {item.wind.speed} m/s
                                                </p>
                                            </div>
                                            <div className="col-md-5 ptemp">
                                                <p>{item.weather[0].description}</p>
                                                {getWeatherIcon(item.weather[0].description) && (
                                                    <img
                                                        className="imgtemp"
                                                        src={getWeatherIcon(item.weather[0].description)}
                                                        style={{
                                                            marginLeft: "10px",
                                                            verticalAlign: "middle",
                                                            width: "100px",
                                                            color: "black",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))} */}

                        </div>
                    </div>
                )
            )}


        </div>
    );
}
