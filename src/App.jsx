import { useState } from 'react'
import './App.css'
import { Box, Typography } from '@mui/material';
import BikeListLoadingComponent from './components/BikeListLoading'
import BikeList from './components/BikeList';
import { useEffect } from 'react';

function App() {
  const ListLoading = BikeListLoadingComponent(BikeList);
  const [appState, setAppState] = useState({
    loading: false,
    bikes: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://127.0.0.1:8000/api/bikes/';
    fetch(apiUrl)
      .then((data) => data.json())
      .then((bikes) => {
        setAppState({ loading: false, bikes: bikes});
      });
  }, [setAppState]);

  return (
    <Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', marginTop: '1em' }}>
        Bikes
      </Typography>
      <ListLoading isLoading={appState.loading} posts={appState.bikes} />
    </Box>
  )
}

export default App
