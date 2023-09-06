import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Container = styled.div`
  width: calc() (100% - 24px);
  max-width: 700px;
  margin: auto;
  padding: 0 12px;
`;

export const H1 = styled.h1`
  font-size: 60px;
  margin: 90px 0;
  text-align: center;

  @media (max-width: 600px) {
    margin: 120px 0;
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  text-align: center;
`;

export const Link = styled(HashLink)`
  text-decoration: none;
  padding: 4px 8px;
  color: white;
  transition: all 200ms;
  border-bottom: 2px solid #ef199a;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
`;
export const Hr = styled.hr`
  width: 100%;
  margin: 60px 0 100px 0;
  border: 1px solid white;
`;

export const Button = styled.a`
  border: 2px solid white;
  text-align: left;
  position: relative;
  font-size: 24px;
  text-decoration: none;
  color: white;
  padding: 14px 16px;
  transition: all 300ms;
  z-index: 1;

  &:hover {
    background-color: white;
    color: #ef199a;
    cursor: pointer;
  }
`;

export const Container2 = styled(Container)`
  max-width: 1300px;
`;

export const PersonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
