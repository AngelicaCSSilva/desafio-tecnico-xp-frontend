import styled from 'styled-components';

export const CenteredFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-width: 100vw;
  & > main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > main > h2 {
    align-self:flex-start;
  }
  & > main > :last-child {
    margin-bottom: 10vh;
  }
`;

export default { CenteredFlex };
