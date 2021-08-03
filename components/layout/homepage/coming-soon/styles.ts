import styled from "styled-components";

const Canvas = styled.div`
  grid-column: full-start / full-end;
  width: 100%;
  height: auto;
  position: relative;
`;

const CanvasBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(100px);
`;

const BlobOne = styled.svg`
  position: absolute;
  top: -20%;
  right: 0;
  width: 55rem;
  height: 40rem;
  fill: #ffddca;
`;

const BlobTwo = styled.svg`
  position: absolute;
  left: -10%;
  bottom: 20%;
  width: 60rem;
  height: 60rem;
  fill: #ffcbcb;
`;

const BlobThree = styled.svg`
  position: absolute;
  width: 50rem;
  height: 40rem;
  right: -10%;
  bottom: 0;
  fill: #ffe0a5;
`;

const CanvasFG = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;

  padding: 5rem 20rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-template-areas:
    "lo lo"
    "tx im"
    "ct ct";
  row-gap: 10rem;
  column-gap: 8rem;
  align-items: center;
  justify-items: center;

  ${(props) => props.theme.responsive.small} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    grid-template-areas:
      "lo"
      "tx"
      "im"
      "ct";
  }

  ${(props) => props.theme.responsive.extraSmall} {
    padding: 5rem;
  }
`;

const Logo = styled.img`
  grid-area: lo;
  width: 20rem;
  height: 10rem;
`;

const TextGroup = styled.div`
  grid-area: tx;
  align-self: center;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-family: ${(props) => props.theme.fonts.sinhalaPrimary};
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
`;

const ImageWrapper = styled.div`
  grid-area: im;
  width: 80%;
  height: 40rem;

  box-shadow: ${(props) => props.theme.shadows.close};
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${(props) => props.theme.shadows.spread};
  }

  ${(props) => props.theme.responsive.small} {
    width: 100%;
    height: 50rem;
  }
`;

const CTABox = styled.div`
  grid-area: ct;
  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.8);

  backdrop-filter: blur(100px);
  border-radius: 10px;
  padding: 8rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  align-items: start;
  justify-items: center;
  gap: 8rem;

  ${(props) => props.theme.responsive.small} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  ${(props) => props.theme.responsive.tiny} {
    padding: 5rem 3rem;
  }
`;

const CTAItem = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content) 1fr;
  align-items: start;
  justify-items: center;
  row-gap: 3rem;

  & > *:last-child {
    align-self: end;
  }
`;

const CTAIcon = styled.svg`
  width: 4rem;
  height: 4rem;

  & > * {
    box-shadow: ${(props) => props.theme.shadows.close};
  }
`;

export {
  Canvas,
  CanvasBG,
  BackgroundOverlay,
  BlobOne,
  BlobTwo,
  BlobThree,
  CanvasFG,
  Logo,
  TextGroup,
  ContactGroup,
  SinhalaText,
  ImageWrapper,
  CTABox,
  CTAItem,
  CTAIcon,
};
