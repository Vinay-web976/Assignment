import React, { useEffect, useState } from "react";
import axios from "axios";

const Resource = ({ match }) => {
  const [boxdata, setBoxdata] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const { data: response } = await axios.get(
          `https://reqres.in/api/unknown/${match.params.id}`
        );
        setBoxdata(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  console.log(boxdata);

  return (
    <div className="big-box" style={{ backgroundColor: `${boxdata.color}` }}>
      <p>{boxdata.name}</p>
      <p>{boxdata.year}</p>
      <span>Panton Value</span>
      <p>{boxdata.pantone_value}</p>
    </div>
  );
};

export default Resource;
