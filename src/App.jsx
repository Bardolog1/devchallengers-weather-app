// App.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftViewer from './components/LeftViewer';


const AppCont = styled.div`
  background: #100E1D;
  min-height: 100vh;
  width: 100%;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`;

const App = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchView = () => {
    
      setIsSearchOpen((prevState) => !prevState);
  
   
  };

  return (
    <AppCont>
      <LeftViewer isSearchOpen={isSearchOpen} toggleSearchView={toggleSearchView} />
    </AppCont>
  );
};

export default App;
