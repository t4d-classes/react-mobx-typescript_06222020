import React from 'react';

import { useHistory } from 'react-router-dom';

export const AboutPage = () => {

  const history = useHistory();
  
  return (
    <div>
      <h2>About</h2>
      <button type="button" onClick={() => history.push('/')}>Go Home!</button>
    </div>
  );
};