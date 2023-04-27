import React, { useState } from "react";
import axios from "axios";
import Result from "../result/Result";
import "../Style.css";

const Input = () => {
    const [country, setCountry] = useState("");
    const [data, setData] = useState([]);

    const fetchData = (evt) => {
        if (evt.key == "Enter") {
            axios
                .get("http://universities.hipolabs.com/search?country=" + country + "")
                .then((res) => setData(res.data))
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <div className="input-section">
                <h1>University Hunt</h1>
                <input
                    type="text"
                    placeholder="Search By Country Name"
                    value={country}
                    onChange={(e) => {
                        setCountry(e.target.value);
                    }}
                    onKeyPress={fetchData}
                />
            </div>
            <Result pdata={data} />
        </>
    );
};

export default Input;
