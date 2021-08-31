import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStoreState, State } from 'easy-peasy';

import { StyledHeader } from './styledComponents';

interface GoBack {
  handleGoBack: () => void;
}

const Header: React.FC<GoBack> = ({ handleGoBack }) => {
  const activePage = useStoreState((state: any) => state.activePage);

  return (
    <StyledHeader>
      {activePage === 'details' && (
        <ArrowBackIcon fontSize="large" onClick={handleGoBack} />
      )}

      <div>
        <h1>Sovtech Assessment</h1>
      </div>
    </StyledHeader>
  );
};

export default Header;
