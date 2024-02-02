'use client';  
import React, { useState, useEffect } from "react";
import axios from "axios";

const Navegador = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/todos");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Navegador abc</h1>
      <ul>
        {data.map((item,index) => (
          <p key={index}>{item.id}.- {item.title}</p>
        ))}
      </ul>
    </div>
  );
};

export default Navegador;
