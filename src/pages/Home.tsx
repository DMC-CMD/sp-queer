import { Container, H1, Hr as H } from "../components/CommonComponents";
import { Demands } from "../components/Demands";
import { Kandidierende } from "../components/Kandidierende";
import { Mitmachen } from "../components/Mitmachen";
import styled from "styled-components";

const Hr = styled(H)`
  margin: 0;
  margin-top: 60px;
`;
export const Home = () => {
  return (
    <>
      <div id="home">
        <H1>Queers in den Nationalrat!</H1>

        <Container>
          <Demands />
        </Container>
      </div>

      <Container>
        <Hr />
      </Container>

      <div id="kandidierende">
        <Kandidierende />
      </div>

      <Container>
        <Hr />
      </Container>

      <div id="mitmachen">
        <Mitmachen />
      </div>
    </>
  );
};
