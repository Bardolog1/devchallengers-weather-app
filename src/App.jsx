import React from 'react';
import styled from 'styled-components';
import LeftViewer from './components/LeftViewer';

const AppCont = styled.div`
  text-align: center;
  background: #100E1D;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;



const App = ()=>{
  return (
    <AppCont>
      <LeftViewer/>
    </AppCont>
  );
}

export default App;
