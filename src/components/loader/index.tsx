import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { StyledLoader } from './styledComponents';

const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <CircularProgress size={100} />
    </StyledLoader>
  );
};

export default Loader;
