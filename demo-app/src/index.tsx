import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { observable, action, isObservableArray, computed } from 'mobx';
import { useObserver } from 'mobx-react-lite';

import 'mobx-react-lite/batchingForReactDom';

// interface HistoryEntry {
//   id: number;
//   opName: string;
//   opValue: number;
// }

const ADD = 'Add';
const SUBTRACT = 'Subtract';
const MULTIPLY = 'Multiply';
const DIVIDE = 'Divide';

type HistoryEntry = {
  id: number,
  opName: string,
  opValue: number,
  opFn: (result: number, opValue: number) => number
};

class CalcToolStore {

  @observable
  history: HistoryEntry[] = [];

  @computed
  get result() {

    let result = 0;

    this.history.forEach(entry => {
      result = entry.opFn(result, entry.opValue);
    });

    return result;
  };

  @computed
  get numOps() {

    // let's use this object as map, not a real object structue with a fixed set of properties
    const numOpsCounts = new Map<string, number>();

    this.history.forEach(entry => {

      if (numOpsCounts.has(entry.opName)) {

        const opValue = numOpsCounts.get(entry.opName);

        if (opValue == null) {
          return;
        }

        numOpsCounts.set(entry.opName, opValue + 1);
      } else {
        numOpsCounts.set(entry.opName, 1);
      }

    });

    return numOpsCounts;
  }

  @action.bound
  doOp(op: { opName: string, opValue: number, opFn: (result: number, opValue: number) => number }) {
    this.history.push({
      ...op,
      id: Math.max(...this.history.map(c => c.id), 0) + 1,
    });
  }

  @action.bound
  clear() {

    if (isObservableArray(this.history)) {
      this.history.clear();
    }
  }

  @action.bound
  removeHistoryEntry(entryId: number) {
    const entryIndex = this.history.findIndex(c => c.id === entryId);
    this.history.splice(entryIndex, 1);
  }
}

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const createAddOp = (val: number) => {
  return { opName: ADD, opValue: val, opFn: add };
};

const createSubtractOp = (val: number) => {
  return { opName: SUBTRACT, opValue: val, opFn: subtract };
};

const createMultiplyOp = (val: number) => {
  return { opName: MULTIPLY, opValue: val, opFn: multiply };
};

const createDivideOp = (val: number) => {
  return { opName: DIVIDE, opValue: val, opFn: divide };
};



interface CalcToolProps {
  store: CalcToolStore;
}

const CalcTool: FC<CalcToolProps> = ({ store }) => {

  const [ numInput, setNumInput ] = useState(0);

  const clear = () => {
    setNumInput(0);
    store.clear();
  };


  return useObserver(() => {

    const numOpsCount = store.numOps;

    return (
      <form>
        <div>Result: {store.result}</div>
        <div>
          Num: <input type="number" value={numInput}
            onChange={(e) => setNumInput(Number(e.target.value))} />
        </div>
        <div>
          <button type="button" onClick={() => store.doOp(createAddOp(numInput))}>
            +
          </button>
          <button type="button" onClick={() => store.doOp(createSubtractOp(numInput))}>
            -
          </button>
          <button type="button" onClick={() => store.doOp(createMultiplyOp(numInput))}>
            *
          </button>
          <button type="button" onClick={() => store.doOp(createDivideOp(numInput))}>
            /
          </button>
          <button type="button"
            onClick={() => store.doOp({ opName: 'EXP', opValue: numInput, opFn: (a: number, b: number) => a ** b})}>
            ^
          </button>
          <button type="button" onClick={clear}>Clear</button>
        </div>
        <ul>
          {store.history.map(entry =>
            <li key={entry.id}>
              {entry.opName} - {entry.opValue}
              <button type="button" onClick={() => store.removeHistoryEntry(entry.id)}>
                X
              </button>
            </li>)}
        </ul>
        <table>
          <caption>Operation Counts</caption>
          <tbody>
            {Array.from(numOpsCount.keys()).map(key => <tr key={key}>
              <th>{key}</th>
              <td>{numOpsCount.get(key)}</td>
            </tr>)}
          </tbody>
        </table>
      </form>
    );

  });

};

const calcToolStore = new CalcToolStore();

ReactDOM.render(
  <CalcTool store={calcToolStore} />,
  document.querySelector('#root'),
);