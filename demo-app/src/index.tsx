import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { useObserver } from 'mobx-react-lite';

import 'mobx-react-lite/batchingForReactDom';

class CalcToolStore {

  @observable
  result = 0;

  @action.bound
  increment() {
    this.result++;
  }

}

interface CalcToolProps {
  store: CalcToolStore;
}

const CalcTool: FC<CalcToolProps> = ({ store }) => {

  return useObserver(() => {

    return (
      <form>
        <div>Result: {store.result}</div>
        <div>
          <button type="button" onClick={store.increment}>
            Increment
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