import { ReactNode } from "react";
import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  sinhala?:boolean;
  alignment?: AlignmentType;
}

const PrimaryHeading: React.FC<Props> = ({
  children,
  sinhala=false,
  alignment = "center",
}: Props): JSX.Element => {
  return <Heading alignment={alignment} sinhala={sinhala}>{children}</Heading>;
};

export default PrimaryHeading;
