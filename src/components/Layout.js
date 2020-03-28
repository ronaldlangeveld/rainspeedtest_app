import React, {useEffect, useState} from 'react';
import {DataContext, DataContextProvider} from '../context/DataContext';
import PropTypes from 'prop-types'
import 'bulma/css/bulma.min.css'

const Layout = ({children}) => {
  
  return (

    <main>
       {children}
   </main>

  );
}

export default Layout;


