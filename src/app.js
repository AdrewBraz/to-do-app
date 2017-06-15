const css = require('./style.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

const app = document.getElementById('root');

ReactDOM.render(
    <Layout />,
    app 
)

