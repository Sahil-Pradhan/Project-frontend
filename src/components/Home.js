import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{margin: '20px', padding: '20px', border: '1px solid black'}}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;