import React from 'react';
import './PageOne.css';

function Page() {
  return (
    <div className="page">
      <div className="header">
        <input className="input" type="text"></input>
      </div>
      <div className="blocks">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
      <div className="contents">
        <div className="content"></div>
      </div>
    </div>
  );
}

export default Page;
