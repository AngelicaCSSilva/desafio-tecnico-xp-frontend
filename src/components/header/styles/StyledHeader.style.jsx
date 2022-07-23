import styled from 'styled-components';

export const StyledHeader = styled.header`
display: flex;
align-items: center;
position: fixed;
top: 0;
background-color: #111;
padding-top: 2vh;
width: 100vw;
margin: 0 2vw;
justify-content: space-between;
& :first-child {
  margin-left: 2vw;
} 
& :last-child {
  margin-right: 3vw;
}
`;

export default { StyledHeader };
