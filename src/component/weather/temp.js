import React, { useEffect, useState } from 'react';
import "./style.css";

const Temp = () => {

    const [searchValue, setSearchValue] = useState("pune");

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a609106e599dc0bd064bcbef1de49f82`;

            let res = await fetch(url);
            let data = await res.json();

            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
            <input type="search"
                placeholder="search..."
                autoFocus
                id="search"
                className="searchTerm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="searchButton" type="button" onClick={getWeatherInfo}>
                Search
              </button>
        </div>
      </div>
      {/* our temp card */}
        <article className="width">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
            </div>
            <div className="weatherInfovsDate">
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>25.5&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">sunny </div>
                        <div className="place">pune, India</div>
                    </div>
                </div>
                <div className="date">
                    { new Date().toLocaleString()} 
                </div>
            </div>
            {/* our 4 column section */}
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                        <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                        19:12 PM <br />
                        Sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                        <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">
                        19:12 PM <br />
                        Humidity
                        </p>
                    </div>
                </div>
                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                        <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                        19:12 PM <br />
                        Pressure
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                        <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                        19:12 PM <br />
                        Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Temp;
