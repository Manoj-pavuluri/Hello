import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';



export default function Hello12() {
  const [state, setState] = React.useState('');

  const toggleDrawer = (side,open) => event => {
    setState({[side]: open });
  };

  const sideList = side => (
    <div
      style={{width: "250px"}}
      onClick={toggleDrawer(side, false)}
    >
    </div>
  );
  return (
    <div>   
      <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}