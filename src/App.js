import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop';
  
class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Toolbar />
        <SideDrawer />
        <Backdrop />
        <main style={{marginTop: '64px'}}>
          <p>This is the page content</p>
        </main>

      </div>

    );
  }
}

export default App;
