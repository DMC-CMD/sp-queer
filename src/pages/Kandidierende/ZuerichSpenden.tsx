import styled from "styled-components";
import { Container, H1 } from "../../components/CommonComponents";
import { SpendenZuerichWidget } from "../../widgets/SpendenZuerichWidget";
import { useEffect } from "react";

const SpendenContainer = styled.div`
  padding: 18px;
  background-color: white;
  border-radius: 10px;
  margin: 48px 0;
`;

export const ZurichSpenden = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tamaro.raisenow.com/sp-schweiz/latest/widget.js";
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <H1>Spenden für die SP Queer Zürich</H1>
      <Container>
        <SpendenContainer className="rnw-widget-container"></SpendenContainer>
      </Container>

      <SpendenZuerichWidget />
    </>
  );
};
