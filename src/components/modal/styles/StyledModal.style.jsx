import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed; 
  z-index: 1; 
  padding-top: 50vh; 
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`;

export default { StyledModal };
