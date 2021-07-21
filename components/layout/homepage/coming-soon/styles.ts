import styled from "styled-components";

const Canvas = styled.div`
  grid-column: full-start / full-end;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  background-image: ${(props) => props.theme.gradients.background};
  align-items: end;
  justify-items: center;
`;

const TextGroup = styled.div`
  align-self: center;

  width: 100%;
  height: auto;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const SinhalaText = styled.p`
  font-family: ${(props) => props.theme.fonts.sinhala};
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
`;

const Image = styled.div`
  width: 100%;
  height: 70%;
`;

export { Canvas, TextGroup, Image, ContactGroup, SinhalaText };
