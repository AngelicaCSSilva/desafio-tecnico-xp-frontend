import styled from 'styled-components';

export const StyledOperationButton = styled.button`
border-radius: 8px;
border: 1px solid transparent;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
color: #fff;
background-color: ${(props) => (props.isPrimary ? 'rgba(84, 132, 55, 0.8)' : 'rgba(156, 36, 36, 0.8)')}; 
cursor: pointer;
transition: border-color 0.25s;
&:hover {
  border-color: #ffc709;
  background-color: rgba(255, 199, 9, 0.8);
}
&:disabled {
  background-color: #696969;
  color: #999;
}`;

export default { StyledOperationButton };
