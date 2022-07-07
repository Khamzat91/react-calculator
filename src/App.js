import React from "react";
import store from "./components/store";
import './index.scss';


function App() {
  const [out, setOut] = React.useState('');
  const [operationValue, setOperationValue] = React.useState('');

  const tapeNumber = (value) => {
   try {
     if (value === '=') {
       setOut(eval(operationValue + out))
       setOperationValue('')
     } else
       setOut(prev => prev + value)
   }catch (e) {
     console.log('Произошла ошибка')
   }
  }

  const typeOperation = (value) => {
    setOperationValue(prev => prev+out+value)
    setOut('')
  }
  const deleteLastChart = () => {
    setOut(prev => prev.length === 1 ? '0' : prev.substring(0, prev.length - 1))
  }

  const removeAll = () => {
    setOut('')
  }

  const onChangeValue = (e) => {
    setOut(e.target.value)
  }


  return (
    <div className="calculator">
      <input onChange={onChangeValue} value={out} className="calculator__header" placeholder="0"/>
      <div className="calculator__wrapper">
        <div className="calculator__wrapper-one">
          {
            store.buttons.map((obj,index) => <div key={index} onClick={() => tapeNumber(obj.val)}
                                            className="calculator__wrapper-item">{obj.val}</div>)
          }
        </div>
        <div className="calculator__wrapper-two">
          {
            store.operation.map((obj,index) => <div key={index} onClick={() => typeOperation(obj.val)}
                                              className="calculator__wrapper-symbol">{obj.val}</div>)
          }
        </div>
      </div>
      <div className="calculator__footer">
        <div onClick={removeAll} className="calculator__footer-btn left">C</div>
        <div onClick={deleteLastChart} className="calculator__footer-btn">CE</div>
      </div>
    </div>
  );
}

export default App;
