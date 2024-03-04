import React from 'react';
import { Providers } from "./providers";
import { router } from "@pages/router";
import './styles/index.scss';

const App = () => {
  return <React.StrictMode>
    <Providers router={router}/>
  </React.StrictMode>;
};

export default App;
