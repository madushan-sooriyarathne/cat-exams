import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentType;
}

const Heading = styled.div<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { Heading };
