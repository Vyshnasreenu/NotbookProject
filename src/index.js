import {createRoot} from "react-dom/client"
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import App from "./App"
// import { createPopper } from '@popperjs/core';
// import './styles.css';
createRoot(document.getElementById("root")).render(<App/>)