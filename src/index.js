import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeAPI from './service/youtubeAPI.js'

const youtubeAPI = new YoutubeAPI(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App 
      youtubeAPI={youtubeAPI}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
