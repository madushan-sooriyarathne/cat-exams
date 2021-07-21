import Head from "next/head";
import { ReactNode } from "react";
import { Content, Page } from "./styles";

interface Props {
  children: ReactNode;
  title?: string;
}

const Container: React.FC<Props> = ({
  children,
  title = "CATEXAMS.LK | Common Admission Test Preparation Guide & Classes",
}: Props): JSX.Element => {
  return (
    <Page>
      <Head>
        <title>{title}</title>
      </Head>
      {/* NavBar */}
      <Content>{children}</Content>
      {/* Footer */}
    </Page>
  );
};

export default Container;
