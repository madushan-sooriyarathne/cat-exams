import styled, { css } from "styled-components";

const Button = styled.a`
  width: 100%;
  height: auto;

  padding: 4rem;

  font-size: 1.5rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  outline: none;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: ${(props) => `2px solid ${props.theme.colors.primary}`};

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export { Button };
