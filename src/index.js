import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import {Store} from "./Store";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider
      store={Store}
      children={<App/>}
    />,
    document.getElementById('root')
);