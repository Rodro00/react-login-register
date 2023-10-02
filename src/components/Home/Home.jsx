import React, { useContext } from 'react';
import { authContext } from '../../provider/AuthProvider';


const Home = () => {
  const authInfo = useContext(authContext)
  console.log(authInfo)
  return (
    <div>
      <h2>this is home{authInfo.name}</h2>
    </div>
  );
};

export default Home;