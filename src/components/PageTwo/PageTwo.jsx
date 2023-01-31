import React from 'react';
import './PageTwo.css';
import Block from './Block.jsx';

let blockData = [
  { element: '1' },
  { element: '2' },
  { element: '3' },
  { element: '4' },
  { element: '5' },
  { element: '6' },
  { element: '7' },
  { element: '8' },
];

let block = blockData.map((el) => <Block block={el} />);

function Page() {
  return (
    <div className="page">
      <button className="two"></button>
      <div className="header">
        <input className="input" type="text"></input>
      </div>
      <div className="blocks">{block}</div>
    </div>
  );
}

export default Page;
