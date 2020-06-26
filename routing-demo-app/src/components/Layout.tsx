import React, { FC } from 'react';

import './Layout.css';

export const Layout: FC<{}> = (props) => {

  return (
    <div className="layout">
      {props.children}
    </div>
  );

};