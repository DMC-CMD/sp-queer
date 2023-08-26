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
    target: "/aargau",
    text: "Liste XY",
  },
  { name: "Bern", target: "/bern", text: "Liste XY" },
  {
    name: "Zürich",
    target: "/zuerich",
    text: "Liste 27",
  },
];

export const Kandidierende = () => {
  return (
    <div>
      <H1>Kandidierende</H1>
      <Container>
        <List>
          {cantons.map((c) => (
            <CantonBox>
              <div>
                <A to={c.target}>{c.name}</A>
              </div>
              <P>{c.text}</P>
            </CantonBox>
          ))}
        </List>
      </Container>
    </div>
  );
};
