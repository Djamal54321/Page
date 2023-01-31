import React from 'react';
import Block from '../Block.jsx';
import './PageOne.css';

let blockData = [{ element: '1' }, { element: '2' }, { element: '3' }, { element: '4' }];

let block = blockData.map((el) => <Block block={el} />);

function Page() {
  return (
    <div className="page">
      <div className="header">
        <input className="input" type="text"></input>
      </div>
      <div className="blocks">
        {block}
        {/* <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div> */}
      </div>
      <div className="contents">
        <div className="content"></div>
      </div>
    </div>
  );
}

export default Page;
