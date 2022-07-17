import styled from 'styled-components';

export const StyledLogo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: ${(props) => props.width}
`;

export default { StyledLogo };
