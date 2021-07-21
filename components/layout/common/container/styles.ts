import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    "co"
    "fo";
  gap: 0;
`;

const Content = styled.div`
  grid-area: co;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [content-end] minmax(5rem, 1fr) [full-end];
  grid-auto-rows: min-content;
  row-gap: 15rem;
`;

export { Page, Content };
