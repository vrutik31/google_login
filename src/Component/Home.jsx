import { useLocation } from 'react-router-dom';
import React from 'react';

function Home() {
  const location = useLocation();
  const name = location.state?.name; // 👈 yaha se le lo

  return (
    <div>
      <h1>hello, {name}</h1>
    </div>
  );
}

export default Home;
