import styled from "styled-components";
import { H2, Hr as H } from "./CommonComponents";

const Content = styled.div`
  text-align: right;
`;

const DemandText = styled.p`
  font-size: 32px;
  text-align: left;
  overflow-wrap: break-word;
`;
const HrBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Hr = styled(H)`
  width: 50%;
`;

export const Demand = (props: {
  title: string;
  text: string;
  buttonLink: string;
  last?: boolean;
  first?: boolean;
  isFrench: boolean;
}) => {
  const { title, text, last, isFrench, first } = props;
  const contentId = isFrench ? "demandes" : "forderungen";
  return (
    <Content id={first ? contentId : ""}>
      <H2>{title}</H2>
      <DemandText>{text}</DemandText>

      {!last && (
        <HrBox>
          <Hr />
        </HrBox>
      )}
    </Content>
  );
};
