import styled from 'styled-components';

export const CenteredTable = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  &: > table {
    flex-grow: 1;
  }
`;

export default { CenteredTable };
