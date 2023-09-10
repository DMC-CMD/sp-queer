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

export const Mitmachen = (props: { isFrench: boolean }) => {
  const { isFrench } = props;
  return (
    <div>
      <H1>{isFrench ? "Participer" : "Mitmachen"}</H1>
      <Container>
        <H2>{isFrench ? "Zurich" : "Zürich"}</H2>
        <ButtonBox>
          <Button href="https://spzuerich.ch/spenden/spqueer/" target="_blank">
            {isFrench ? "Donation" : "Spenden"}
          </Button>
          <Button
            href="https://spzuerich.ch/mitmachen/basiskampagne-nationale-wahlen-2023/"
            target="_blank"
          >
            {isFrench ? "Campagne de base" : "Basiskampagne"}
          </Button>
        </ButtonBox>

        <H2>National</H2>
        <ButtonBox>
          <Button>
            <LinkStyled to={isFrench ? "/donation" : "/spenden"}>
              {isFrench ? "Donation" : "Spenden"}
            </LinkStyled>
          </Button>
          <Button
            href={
              isFrench
                ? "https://www.sp-ps.ch/fr/sengager-queer/"
                : "https://www.sp-ps.ch/mitmachen-queer/"
            }
            target="_blank"
          >
            {isFrench ? "Devenir membre" : "Mitglied werden"}
          </Button>
        </ButtonBox>
      </Container>
    </div>
  );
};
