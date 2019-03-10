import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'; 
import Prism from 'prismjs';
import Moom from 'moon/dist/moon'
import Hogan from'hogan.js'
import 'moon'
import 'bootstrap'
import Chart from 'chart.js';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
