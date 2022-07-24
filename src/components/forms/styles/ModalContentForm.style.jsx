import styled from 'styled-components';

export const ModalContentForm = styled.form`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
background-color: #383838;
margin: auto;
padding: 20px;
border: 1px solid #ffc709;
border-radius: 30px;
width: 80vw;
& > label > input {
  margin: 0.5em 0;
  text-align: center;
  min-width: 120px;
}
& > div {
  margin: 0.5em 0
} 
`;

export default { ModalContentForm };
