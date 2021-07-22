import PrimaryHeading from "@components/heading/primaryHeading";
import SecondaryHeading from "@components/heading/seondaryHeading";
import ImageComponent from "@components/imageComponent";
import {
  Canvas,
  TextGroup,
  ContactGroup,
  SinhalaText,
  ImageWrapper,
} from "./styles";

const ComingSoon: React.FC = (): JSX.Element => {
  return (
    <Canvas>
      <TextGroup>
        <PrimaryHeading>New website is under development</PrimaryHeading>
        <SecondaryHeading sinhala>
          නව වෙබ් අඩවිය සංවර්ධනය වෙමින් පවතී
        </SecondaryHeading>
        <ContactGroup>
          <SinhalaText>
            පරිපාලන සේවා, ක්‍රම සම්පාදන සේවා, අධ්‍යාපන පරිපාලන සේවා, ගණකාධිකරණ
            සේවා, විද්‍යාත්මක සේවා විවෘත තරග විභාගයන් සදහා වු පොදු ප්‍රවේශ
            විභාගය සදහා නව පන්ති ආරම්භය
          </SinhalaText>
        </ContactGroup>
        <ContactGroup>
          <SinhalaText>වැඩිදුර තොරතුරැ සඳහා අමතන්න.</SinhalaText>
          <SecondaryHeading sinhala>ඕෂධ සර් - 071 6 720 720</SecondaryHeading>
        </ContactGroup>
      </TextGroup>
      <ImageWrapper>
        <ImageComponent
          image={{
            src: "/assets/img/coming-soon.png",
            alt: "CATEXAMS.LK | Sri Lanka's leading common admission test tutor ",
            blurUrl: "data:image/svg+xml;base64,LCHeX+KQ3=+ruhnMvnS*TcV@n3oz",
          }}
          sizes={{ width: "100%", height: "80%" }}
          pos={{ x: "bottom", y: "center" }}
        />
      </ImageWrapper>
    </Canvas>
  );
};

export default ComingSoon;
