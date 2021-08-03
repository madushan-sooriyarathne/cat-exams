import PrimaryButton from "@components/buttons/primaryButton";
import PrimaryHeading from "@components/heading/primaryHeading";
import SecondaryHeading from "@components/heading/seondaryHeading";
import ImageComponent from "@components/imageComponent";
import {
  Canvas,
  TextGroup,
  ImageWrapper,
  CanvasBG,
  BlobOne,
  BlobTwo,
  BlobThree,
  BackgroundOverlay,
  CanvasFG,
  Logo,
  CTABox,
  CTAItem,
  CTAIcon,
  SinhalaText,
  ContactText,
} from "./styles";

const ComingSoon: React.FC = (): JSX.Element => {
  return (
    <Canvas>
      <CanvasBG>
        <BackgroundOverlay />
        <BlobOne viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path d="M416.5,306Q362,362,306,425Q250,488,175.5,443.5Q101,399,65,324.5Q29,250,58.5,169Q88,88,169,53Q250,18,327,57Q404,96,437.5,173Q471,250,416.5,306Z"></path>
        </BlobOne>
        <BlobTwo viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path d="M435.5,303.5Q416,357,384,415Q352,473,287.5,456Q223,439,161.5,431.5Q100,424,74.5,366.5Q49,309,46.5,249.5Q44,190,71,132.5Q98,75,158.5,55Q219,35,281.5,39Q344,43,384,90.5Q424,138,439.5,194Q455,250,435.5,303.5Z"></path>
        </BlobTwo>
        <BlobThree viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path d="M411,313Q376,376,313,432.5Q250,489,176,443.5Q102,398,64.5,324Q27,250,69.5,181Q112,112,181,61Q250,10,330.5,49.5Q411,89,428.5,169.5Q446,250,411,313Z"></path>
        </BlobThree>
      </CanvasBG>
      <CanvasFG>
        <Logo src="/assets/logo/logo-dark.svg"></Logo>
        <TextGroup>
          <PrimaryHeading sinhala alignment="left">
            පොදු ප්‍රවේශ විභාගය ඇතුළු රජයේ සියලුම තරග විභාග සදහා නිවැරිදිම සහ
            විශ්වාසනීයම මඟ පෙන්වීම
          </PrimaryHeading>
          <SecondaryHeading sinhala alignment="left">
            ඕෂධ අල්විස්
          </SecondaryHeading>
          <SinhalaText>
            රජයේ උසස් තරඟ විභාගයක් සමත්ව උපකාරක පන්ති මෙහෙයවන එකම දේශක
          </SinhalaText>
          <ContactText>071 672 0720</ContactText>
        </TextGroup>
        <ImageWrapper>
          <ImageComponent
            image={{
              src: "/assets/img/group.jpg",
              alt: "CATEXAMS.LK | Sri Lanka's leading common admission test tutor ",
              blurUrl: "data:image/svg+xml;base64,LCHeX+KQ3=+ruhnMvnS*TcV@n3oz",
            }}
          />
        </ImageWrapper>
        <CTABox>
          <CTAItem>
            <CTAIcon>
              <use xlinkHref="/assets/svg/sprites.svg#telegram" />
            </CTAIcon>
            <SecondaryHeading>Join our Telegram Group</SecondaryHeading>
            <PrimaryButton
              isTargetBlank={true}
              link="https://l.facebook.com/l.php?u=https%3A%2F%2Ft.me%2Fjoinchat%2FnYtuGvC9W8FjODQ1%3Ffbclid%3DIwAR3dgoQLJuJOEsm5VDX5xlLaGvQL5d3WmjcXWGvJx3ZWKm_HUauZrPzDRGc&h=AT277P_icpExRFiedE2j1QPgAnSxIfCSwZcJ6j4vRcTNiw9ymES5K7rMkGMZIwrGEUrJr3L6ShFtvhMc06UEaK-eHlldRXPFmbjLJ06LlbxQr2lj49W7oy0YlXFO&__tn__=-UK-R&c[0]=AT190bW4TxSKQEwtonId1_5QWGIYaxc9tLf3QGHtAmJc-yz8ZOq-Fqiq0hAGtEjRfAgS1WQQwnDHnTmdTvyiyFyOvj0xAcOd0hpR4RH3mGebNDDZBgFOSYXGxgp1EAVQoClfU69b7ugLOwqyvZhPUkfCa-1_3XgJQYqyBuXBP7K0fA"
              type="link"
            >
              Join
            </PrimaryButton>
          </CTAItem>
          <CTAItem>
            <CTAIcon>
              <use xlinkHref="/assets/svg/sprites.svg#whatsapp" />
            </CTAIcon>
            <SecondaryHeading>Contact us on whatsApp</SecondaryHeading>
            <PrimaryButton
              isTargetBlank={true}
              link="https://wa.me/qr/OJJS7PFEWZZUA1"
              type="link"
            >
              Contact us
            </PrimaryButton>
          </CTAItem>
          <CTAItem>
            <CTAIcon>
              <use xlinkHref="/assets/svg/sprites.svg#facebook" />
            </CTAIcon>
            <SecondaryHeading>Follow our Facebook Page</SecondaryHeading>
            <PrimaryButton
              isTargetBlank={true}
              link="https://www.facebook.com/OshadhaSir"
              type="link"
            >
              Follow
            </PrimaryButton>
          </CTAItem>
        </CTABox>
      </CanvasFG>
    </Canvas>
  );
};

export default ComingSoon;
