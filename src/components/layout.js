import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Loder from './loder';

function Layout(props) {
  return <div>
    {props.loading && <Loder/>}
      <Header/>
      <div className="content">
        {/* to show homepage info */}
          {props.children}
      </div>
      {/* <Footer/> */}
  </div>;
}

export default Layout;
