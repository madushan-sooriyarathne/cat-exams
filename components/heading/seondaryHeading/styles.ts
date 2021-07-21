import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentType;
  sinhala: boolean;
}

const Heading = styled.div<HeadingProps>`
  font-family: ${(props) =>
    props.sinhala ? props.theme.fonts.sinhala : props.theme.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.gradients.secondary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { Heading };
