import RootRoutes from './routes';
import React from 'react';



import './App.css';
import './resources/css/common.css';
import './resources/css/font-chrome.css';
import './resources/css/layout.css';
import './resources/css/main.css';
import './resources/css/contents.css';

import './resources/js/main/main.js'
import './resources/js/cmmn/seCommon.js'
import './resources/js/cmmn/sePolyfills.js'

function App() {
    // div className="wrap"
  return (
    <>
      <React.StrictMode>
        <RootRoutes />
      </React.StrictMode>
    </>
  );
}

export default App;
