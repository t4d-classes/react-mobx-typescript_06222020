import React, { FC } from 'react';

export interface ToolHeaderProps {
  headerText?: string;
}

export const ToolHeader: FC<ToolHeaderProps> = (props) => {

  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );

};

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};