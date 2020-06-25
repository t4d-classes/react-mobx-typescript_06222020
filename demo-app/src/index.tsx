import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { useObserver } from 'mobx-react-lite';

import 'mobx-react-lite/batchingForReactDom';

// interface HistoryEntry {
//   id: number;
//   opName: string;
//   opValue: number;
// }

type HistoryEntry = {
  id: number,
  opName: string,
  opValue: number,
};

class CalcToolStore {

  @observable
  result = 0;

  @observable
  history: HistoryEntry[] = [];

  @action.bound
  add(val: number) {
    this.result += val;
    this.history.push({
      opName: 'Add',
      opValue: val,
      id: Math.max(...this.history.map(c => c.id), 0) + 1,
    });
  }

  @action.bound
  subtract(val: number) {
    this.result -= val;
    this.history.push({
      opName: 'Subtract',
      opValue: val,
      id: Math.max(...this.history.map(c => c.id), 0) + 1,
    });
  }

  @action.bound
  multiply(val: number) {
    this.result *= val;
    this.history.push({
      opName: 'Multiply',
      opValue: val,
      id: Math.max(...this.history.map(c => c.id), 0) + 1,
    });
  }

  @action.bound
  divide(val: number) {
    this.result /= val;
    this.history.push({
      opName: 'Divide',
      opValue: val,
      id: Math.max(...this.history.map(c => c.id), 0) + 1,
    });
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
        <ul>
          {store.history.map(entry =>
            <li key={entry.id}>
              {entry.opName} - {entry.opValue}
            </li>)}
        </ul>
      </form>
    );

  });

};

const calcToolStore = new CalcToolStore();

ReactDOM.render(
  <CalcTool store={calcToolStore} />,
  document.querySelector('#root'),
);