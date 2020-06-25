import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { useObserver } from 'mobx-react-lite';

import 'mobx-react-lite/batchingForReactDom';

class CalcToolStore {

  @observable
  result = 0;

  @action.bound
  add(val: number) {
    this.result += val;
  }

  @action.bound
  subtract(val: number) {
    this.result -= val;
  }

  @action.bound
  multiply(val: number) {
    this.result *= val;
  }

  @action.bound
  divide(val: number) {
    this.result /= val;
  }

}

interface CalcToolProps {
  store: CalcToolStore;
}

const CalcTool: FC<CalcToolProps> = ({ store }) => {

  const [ numInput, setNumInput ] = useState(0);

  return useObserver(() => {

    return (
      <form>
        <div>Result: {store.result}</div>
        <div>
          Num: <input type="number" value={numInput}
            onChange={(e) => setNumInput(Number(e.target.value))} />
        </div>
        <div>
          <button type="button" onClick={() => store.add(numInput)}>
            +
          </button>
          <button type="button" onClick={() => store.subtract(numInput)}>
            -
          </button>
          <button type="button" onClick={() => store.multiply(numInput)}>
            *
          </button>
          <button type="button" onClick={() => store.divide(numInput)}>
            /
          </button>
        </div>
      </form>
    );

  });

};

const calcToolStore = new CalcToolStore();

ReactDOM.render(
  <CalcTool store={calcToolStore} />,
  document.querySelector('#root'),
);