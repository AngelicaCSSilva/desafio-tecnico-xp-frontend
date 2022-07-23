import styled from 'styled-components';

export const StyledIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default { StyledIcon };
