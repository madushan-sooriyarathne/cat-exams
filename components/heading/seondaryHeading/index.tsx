import { ReactNode } from "react";
import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  alignment?: AlignmentType;
  sinhala?: boolean;
}

const SecondaryHeading: React.FC<Props> = ({
  children,
  alignment = "center",
  sinhala = false,
}: Props): JSX.Element => {
  return (
    <Heading alignment={alignment} sinhala={sinhala}>
      {children}
    </Heading>
  );
};

export default SecondaryHeading;
