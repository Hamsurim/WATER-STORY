import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // index.css 경로 확인
import App from './App';
import reportWebVitals from './reportWebVitals'; // reportWebVitals 경로 확인
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
