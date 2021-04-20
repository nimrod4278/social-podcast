import React from 'react';
import './Toolbar.css';

const Toolbar = (props) => {
    return (
        <div className="toolbar">
          <div className="logoContainer">
            <div className="logo" />
          </div>
          <div className="searchBox">
            <input type="text" id="serachBox" name="serachBox" value="search box" />
          </div>
        </div>
    );
}

export default Toolbar;