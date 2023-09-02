import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes  from './routes'
import Globalstyle from './containers/styles/globalStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />,
    <Globalstyle/>
  </React.StrictMode>
);

