import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navigation() {
  return (
    <>
    <div style={{paddingBottom: '15%'}}>
      <AppBar position='fixed'>
        <Toolbar>
          <Button variant='text' sx={{color: 'white', paddingRight: '90%' }}>Home</Button>
          <IconButton>
            <ShoppingCartIcon sx={{color: 'white'}}></ShoppingCartIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}

export default Navigation;