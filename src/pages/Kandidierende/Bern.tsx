import {
  H1,
  H2,
  Container2,
  PersonList,
} from "../../components/CommonComponents";
import { Person } from "./Person";
import candidatesType from "../../../types/candidates";

import AnnaGraff from "../../media/zurich/01_Anna_Graff.jpg";

const candidates: candidatesType = [
  {
    name: "Anna Graff",
    role: "Biologin, Sprachwissenschaftlerin, Gemeinderätin",
    city: "Zürich",
    img: AnnaGraff,
  },
  {
    name: "Anna Graff",
    role: "Biologin, Sprachwissenschaftlerin, Gemeinderätin",
    city: "Zürich",
    img: AnnaGraff,
  },
  {
    name: "Anna Graff",
    role: "Biologin, Sprachwissenschaftlerin, Gemeinderätin",
    city: "Zürich",
    img: AnnaGraff,
  },
  {
    name: "Anna Graff",
    role: "Biologin, Sprachwissenschaftlerin, Gemeinderätin",
    city: "Zürich",
    img: AnnaGraff,
  },
  {
    name: "Anna Graff",
    role: "Biologin, Sprachwissenschaftlerin, Gemeinderätin",
    city: "Zürich",
    img: AnnaGraff,
  },
  {
    name: "Anna Graff",
    role: "Biologin, Sprachwissenschaftlerin, Gemeinderätin",
    city: "Zürich",
    img: AnnaGraff,
  },
];

export const Bern = () => {
  return (
    <div>
      <H1>Bern</H1>
      <H2>Liste XY</H2>
      <Container2>
        <PersonList>
          {candidates.map((c) => (
            <Person data={c} />
          ))}
        </PersonList>
      </Container2>
    </div>
  );
};
