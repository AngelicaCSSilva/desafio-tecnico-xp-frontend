import styled from 'styled-components';

export const StyledLogo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: ${(props) => props.width};
  margin-bottom: 3em;
`;

export default { StyledLogo };
