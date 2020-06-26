import React from 'react';

import { useParams } from 'react-router-dom';

export const ContactPage = () => {

  const params = useParams<{ id: string }>();

  return (
    <div>
      <h2>Contact</h2>
      <div>
        Id: {params.id}
      </div>
    </div>
  );
};