import styled from "styled-components";
import { Container, H1, Link } from "./CommonComponents";

const List = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const CantonBox = styled.div`
  margin: 18px;
`;
const A = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  width: auto;
`;
const P = styled.p`
  font-size: 20px;
`;

const cantons = [
  {
    name: "Aargau",
    target: "/aargau#",
    text: "",
  },
  {
    name: "Basel Stadt",
    target: "/basel-stadt#",
    text: "",
  },
  { name: "Bern", target: "/bern#", text: "" },
  { name: "Genève", target: "/geneve#", text: "" },

  { name: "Luzern", target: "/luzern#", text: "" },
  { name: "Solothurn", target: "/solothurn#", text: "" },
  { name: "St.Gallen", target: "/stgallen#", text: "" },
  { name: "Valais", target: "/valais#", text: "" },
  {
    name: "Zürich",
    target: "/zuerich#",
    text: "Liste 27, weitere Kandidierende",
  },
];

export const Kandidierende = (props: { isFrench: boolean }) => {
  const { isFrench } = props;
  return (
    <div>
      <H1>{isFrench ? "Candidat.e.s" : "Kandidierende"}</H1>
      <Container>
        <List>
          {cantons.map((c, ind) => (
            <CantonBox key={ind}>
              <div>
                <A to={c.target}>{c.name}</A>
              </div>
              {c.text !== "" && <P>{c.text}</P>}
            </CantonBox>
          ))}
        </List>
      </Container>
    </div>
  );
};
