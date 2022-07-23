import styled from 'styled-components';

export const StyledLogoutButton = styled.button`
border-radius: 8px;
letter-spacing: 5px;
border: 1px solid transparent;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 400;
font-family: inherit;
color: #fff;
background-color: #94803d; 
cursor: pointer;
transition: border-color 0.25s;
&:enabled {
  background-color: #ffc709;
  color: #111;
}`;

export default { StyledLogoutButton };
