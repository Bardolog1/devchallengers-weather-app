import React from 'react';
import styled from 'styled-components';
import LeftViewer  from './components/LeftViewer';
import LocationSearchView from './components/LocationSearchView';

const AppCont = styled.div`
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
  top:0;
  left:0;

`;



const App = ()=>{

  
  return (
    <AppCont>
      <LocationSearchView/>
      <StyledLefViewer/>
    </AppCont>
  );
}

export default App;
