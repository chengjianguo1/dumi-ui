import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './dialog';

export const show = (config) => {
  const container = document.createElement('div');

  document.body.appendChild(container);

  let instance, myRef;
  ReactDOM.render(
    <Dialog
      {...config}
      ref={(ref) => {
        myRef = ref;
      }}
    />,
    container,
    function () {
      instance = myRef;
    },
  );
  return {
    hide: () => {
        let inc;
        if (instance && instance.getInstance) {
            inc = instance && instance.getInstance();
        } else if (instance) {
            inc = instance;
        }
        inc && inc.onCloseDialog();
    },
  };
};

export default show;
