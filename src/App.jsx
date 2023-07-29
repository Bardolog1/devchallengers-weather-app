import React from 'react';
import styled from 'styled-components';
import LeftViewer  from './components/LeftViewer';
import useFetch  from './hooks/UseFetch';

const AppCont = styled.div`
  text-align: center;
  background: #100E1D;
  min-height: 100vh;
  width: 100%;
  
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`;

const StyledLefViewer = styled(LeftViewer)`
  width: 100%;
  min-height: 100vh;

`;



const App = ()=>{

  const { data }= useFetch('https://countriesnow.space/api/v0.1/countries/population/cities');
  return (
    <AppCont>
      <StyledLefViewer/>
      <div className="container">
      <ul>
        {data?data.map((item) => (
          <li key={item.city}>{item.city}</li>)):null}
      </ul>
    </div>
    </AppCont>
  );
}

export default App;
