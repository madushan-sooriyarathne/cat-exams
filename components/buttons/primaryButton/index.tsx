import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "./styles";

interface RouteButtonProps {
  route: string;
  children: ReactNode;
  type: "route";
}

interface LinkButtonProps {
  link: string;
  isTargetBlank: boolean;
  children: ReactNode;
  type: "link";
}

type Props = RouteButtonProps | LinkButtonProps;

const PrimaryButton: React.FC<Props> = (props: Props): JSX.Element => {
  return props.type === "link" ? (
    <Button href={props.link} target={props.isTargetBlank ? "_blank" : "_self"}>
      {props.children}
    </Button>
  ) : (
    <Link href={props.route}>
      <Button>{props.children}</Button>
    </Link>
  );
};

export default PrimaryButton;
