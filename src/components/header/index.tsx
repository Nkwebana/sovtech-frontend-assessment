import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { StyledHeader } from './styledComponents';

interface GoBack {
  handleGoBack: () => void;
}

const Header: React.FC<GoBack> = ({ handleGoBack }) => {
  return (
    <StyledHeader>
      <ArrowBackIcon fontSize="large" onClick={handleGoBack} />
      Sovtech Assessment
    </StyledHeader>
  );
};

export default Header;
