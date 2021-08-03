import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentType;
  sinhala: boolean;
}

const Heading = styled.div<HeadingProps>`
  font-family: ${(props) =>
    props.sinhala
      ? props.theme.fonts.sinhalaSecondary
      : props.theme.fonts.primary};
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.gradients.secondary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${(props) => props.theme.responsive.medium} {
    font-size: 3rem;
  }
`;

export { Heading };
