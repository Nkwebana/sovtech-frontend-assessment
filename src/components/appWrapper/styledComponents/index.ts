import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledAppWrapper = styled.div`
  ${breakpoint('tablet')`
    margin: auto;
    width: 600px;
  `};
`;

export { StyledAppWrapper };
