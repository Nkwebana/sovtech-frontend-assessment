import React from 'react';

import { StyledAppWrapper } from './styledComponents';

const AppWrapper: React.FC<React.ReactNode> = ({ children }) => {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
};

export default AppWrapper;
