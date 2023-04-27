import React, { useEffect, useState } from "react";
import "../Style.css";

const Result = ({ pdata }) => {
    const renderData = pdata.map((item) => {
        return (
            <>
                <tr>
                    <td>
                        {item?.country} , {item["state-province"]}
                    </td>
                    <td className="clg-name"> {item?.name} </td>
                    <td>{item?.domains} </td>
                    <td>
                        <a href={item?.web_pages}> Know more </a>
                    </td>
                </tr>
            </>
        );
    });

    return (
        <>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">University Name</th>
                        <th scope="col">WebPage</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>{renderData}</tbody>
            </table>
        </>
    );
};

export default Result;
