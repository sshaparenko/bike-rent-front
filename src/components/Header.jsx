import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import styled from '@emotion/styled';

const StyledLink = styled(Link)(({theme}) => ({
  color: 'black',
  textDecoration: 'none',
}))

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 0.95, textAlign: 'left'}}>
            <StyledLink href='#'>
              BikeShop
            </StyledLink>
          </Typography>
          <Typography sx={{ flexGrow: 0.1, textAlign: 'center'}}>
            <StyledLink href='#'>
              Rent
            </StyledLink>
          </Typography>
          <Typography sx={{ flexGrow: 0.1, textAlign: 'center', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
            <StyledLink href='#'>
              Shop
            </StyledLink>
          </Typography>
          <Typography sx={{ flexGrow: 0.1, textAlign: 'center'}}>
            <StyledLink href='#'>
              Custom bikes
            </StyledLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;