import styled from "styled-components";
import { H1, H2, Container, Button } from "./CommonComponents";
import { Link } from "react-router-dom";

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Mitmachen = () => {
  return (
    <div>
      <H1>Mitmachen</H1>
      <Container>
        <H2>Zürich</H2>
        <ButtonBox>
          <Button>
            <LinkStyled to="/zuerich/spenden">Spenden</LinkStyled>
          </Button>
          <Button
            href="https://spzuerich.ch/mitmachen/basiskampagne-nationale-wahlen-2023/"
            target="_blank"
          >
            Basiskampagne
          </Button>
        </ButtonBox>

        <H2>National</H2>
        <ButtonBox>
          <Button href="https://www.sp-ps.ch/mitmachen-queer/" target="_blank">
            Mitglied werden
          </Button>
        </ButtonBox>
      </Container>
    </div>
  );
};
