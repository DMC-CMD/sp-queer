import styled from "styled-components";
import { Link } from "./CommonComponents";

const Hr = styled.hr`
  margin-top: 188px;
  border: 1px solid white;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px;
  gap: 12px;
`;
const P = styled.p`
  font-size: 22px;
  margin: 0;
`;
const A = styled(Link)`
  padding: 0;
`;
export const Footer = () => {
  return (
    <div>
      <Hr />
      <Content>
        <P>SP Queer</P>
        <P>
          <A to="mailto:spqueer@spschweiz.ch">spqueer@spschweiz.ch</A>
        </P>
      </Content>
    </div>
  );
};
