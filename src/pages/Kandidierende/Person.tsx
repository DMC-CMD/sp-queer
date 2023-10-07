import styled from "styled-components";

const Box = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;
const Name = styled.h2`
  font-size: 28px;
  width: 100%;
  max-width: 400px;
  margin: 18px 0;
`;
const List = styled.p`
  font-size: 20px;
  margin: 8px 0 18px;
`;
const Role = styled.p`
  width: 100%;
  max-width: 400px;
  font-size: 25px;
  margin: 12px 0;
`;

const City = styled.p`
  width: 100%;
  max-width: 400px;
  font-size: 25px;
  font-style: italic;
  margin: 12px 0 20px 0;
`;

type candidate = {
  name: string;
  list?: string;
  role: string;
  city: string;
  img: string;
};

export const Person = (props: { data: candidate; number?: number }) => {
  let { data, number } = props;

  return (
    <Box>
      <Image src={data.img} />
      {data.list && <List>{data.list}</List>}
      <Name>{number ? `${number}. ${data.name}` : data.name}</Name>

      <Role>{data.role}</Role>
      <City>{data.city}</City>
    </Box>
  );
};
