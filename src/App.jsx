// App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftViewer from './components/LeftViewer';
import LocationSearchView from './components/LocationSearchView';

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
      {isSearchOpen && <LocationSearchView toggleSearchView={toggleSearchView} />}
      <LeftViewer toggleSearchView={toggleSearchView} />
    </AppCont>
  );
};

export default App;
