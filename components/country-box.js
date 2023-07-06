import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Link from "next/link";

export default function CountryBox(props) {
  const [countryData, setCountryData] = useState(props?.country);

  const getDT = (timeZone) => {
    const dt = moment().tz(timeZone).format("DD MMM YYYY, HH:mm");

    return dt;
  };

  useEffect(() => {
    setCountryData(props?.country);
  }, [props]);
  return (
    <div className="box">
      <div className="img-box">
        <img src={countryData.flags.svg} className="countryboximage" alt="" />
      </div>
      <div className="country-info">
        <h6>{countryData?.name?.common}</h6>
        {/* {console.log(countryData?.currencies)} */}
        <p>
          <b>Currencies :</b>{" "}
          {countryData?.currencies
            ? Object.values(countryData.currencies)[0].name
            : "-"}
          {console.log(countryData?.currencies, "currencies")}
        </p>

        <p>Current date and time: {getDT(countryData.timezones[0])}</p>
        <button className="showmapbtn">
          <Link
            href={countryData.maps.googleMaps}
            target="_blank"
            className="showfont"
          >
            Show Map
          </Link>
        </button>
        <button className="showmapbtn">
          <Link
            href={`/details/${countryData?.cca3}`}
            target="_blank"
            className="showfont"
          >
            Details
          </Link>
        </button>
      </div>
    </div>
  );
}
