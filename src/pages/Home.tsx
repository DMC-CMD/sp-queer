import { Container, H1, Hr as H } from "../components/CommonComponents";
import { Demands } from "../components/Demands";
import { Kandidierende } from "../components/Kandidierende";
import { Mitmachen } from "../components/Mitmachen";
import styled from "styled-components";

const Hr = styled(H)`
  margin: 0;
  margin-top: 60px;
`;
export const Home = (props: { isFrench: boolean }) => {
  const { isFrench } = props;

  return (
    <>
      <div id="home">
        <H1>
          {isFrench
            ? "Queers au Conseil national!"
            : "Queers in den Nationalrat!"}
        </H1>

        <Container>
          <Demands isFrench={isFrench} />
        </Container>
      </div>

      <Container>
        <Hr />
      </Container>

      <div id={isFrench ? "candidat.e.s" : "kandidierende"}>
        <Kandidierende isFrench={isFrench} />
      </div>

      <Container>
        <Hr />
      </Container>

      <div id={isFrench ? "participer" : "mitmachen"}>
        <Mitmachen isFrench={isFrench} />
      </div>
    </>
  );
};
