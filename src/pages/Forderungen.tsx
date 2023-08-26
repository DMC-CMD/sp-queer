import styled from "styled-components";
import { H1, H2 as Subtitle, Container } from "../components/CommonComponents";

const MediumContainer = styled(Container)`
  max-width: 1000px;
`;
const H2 = styled(Subtitle)`
  text-align: left;
`;
const DemandText = styled.p`
  font-size: 32px;
  text-align: left;
`;

export const Forderungen = () => {
  return (
    <div>
      <H1>Forderungen</H1>
      <MediumContainer>
        <div>
          <H2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</H2>
          <DemandText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            repellat impedit iusto culpa dolorum veritatis eveniet tempora
            reprehenderit, ad vero sint explicabo, sequi, sapiente saepe
            officiis laudantium quisquam veniam facere!
          </DemandText>
        </div>

        <div>
          <H2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</H2>
          <DemandText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            repellat impedit iusto culpa dolorum veritatis eveniet tempora
            reprehenderit, ad vero sint explicabo, sequi, sapiente saepe
            officiis laudantium quisquam veniam facere!
          </DemandText>
        </div>

        <div>
          <H2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</H2>
          <DemandText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            repellat impedit iusto culpa dolorum veritatis eveniet tempora
            reprehenderit, ad vero sint explicabo, sequi, sapiente saepe
            officiis laudantium quisquam veniam facere!
          </DemandText>
        </div>
      </MediumContainer>
    </div>
  );
};
