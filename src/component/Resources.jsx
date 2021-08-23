import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "./Box";
import "../Resources.css";
const Resources = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data: response } = await axios.get(
          "https://reqres.in/api/unknown"
        );
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="main-div row">
      {data.map((ele) => (
        <Box
          name={ele.name}
          year={ele.year}
          bgcolor={ele.color}
          id={ele.id}
          key={ele.id}
        />
      ))}
    </div>
  );
};

export default Resources;
