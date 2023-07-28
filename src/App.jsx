import React from 'react';
import styled from 'styled-components';
import LeftViewer from './components/LeftViewer';

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
  return (
    <AppCont>
      <StyledLefViewer/>
    </AppCont>
  );
}

export default App;
