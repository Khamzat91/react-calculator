import React from "react";
import './index.scss';

function App() {
  return (
    <div className="calculator">
      <div className="calculator__header">
132
      </div>
      <div className="calculator__wrapper">
        <div className="calculator__wrapper-one">
          <div className="calculator__wrapper-item">7</div>
          <div className="calculator__wrapper-item">4</div>
          <div className="calculator__wrapper-item">1</div>
          <div className="calculator__wrapper-item">.</div>
        </div>
        <div className="calculator__wrapper-two">
          <div className="calculator__wrapper-item">8</div>
          <div className="calculator__wrapper-item">5</div>
          <div className="calculator__wrapper-item">2</div>
          <div className="calculator__wrapper-item">0</div>
        </div>
        <div className="calculator__wrapper-free">
          <div className="calculator__wrapper-item">9</div>
          <div className="calculator__wrapper-item">6</div>
          <div className="calculator__wrapper-item">3</div>
          <div className="calculator__wrapper-item">=</div>
        </div>
        <div className="calculator__wrapper-four">
          <div className="calculator__wrapper-item">/</div>
          <div className="calculator__wrapper-item">*</div>
          <div className="calculator__wrapper-item">+</div>
          <div className="calculator__wrapper-item">-</div>
        </div>
      </div>
      <div className="calculator__footer">
        Clear
      </div>
    </div>
  );
}

export default App;
