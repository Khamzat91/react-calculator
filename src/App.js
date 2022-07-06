import React from "react";
import './index.scss';

const calc = [[7, 4, 1, '.'], [8, 5, 2, 0], [9, 6, 3, '=']]

function App() {

  return (
    <div className="calculator">
      <input className="calculator__header"/>
      <div className="calculator__wrapper">
        {calc.map((i) =>
          <div className="calculator__wrapper-one">
            {
              i.map((obj) => <div className="calculator__wrapper-item">{obj}</div>)
            }
          </div>)
        }
        <div className="calculator__wrapper-two">
          <div className="calculator__wrapper-symbol">/</div>
          <div className="calculator__wrapper-symbol">*</div>
          <div className="calculator__wrapper-symbol">+</div>
          <div className="calculator__wrapper-symbol">-</div>
        </div>
      </div>
      <div className="calculator__footer">
        Clear
      </div>
    </div>
  );
}

export default App;
