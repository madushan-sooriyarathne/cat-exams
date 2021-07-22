import styled from "styled-components";

const Canvas = styled.div`
  grid-column: full-start / full-end;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-areas: "te im";
  background-image: ${(props) => props.theme.gradients.background};
  align-items: end;
  justify-items: center;

  ${(props) => props.theme.responsive.next} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    grid-template-areas:
      "te"
      "im";
  }
`;

const TextGroup = styled.div`
  grid-area: te;
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
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-area: im;
`;

export { Canvas, TextGroup, ContactGroup, SinhalaText, ImageWrapper };
