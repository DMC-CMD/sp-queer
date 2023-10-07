import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";
import candidatesType from "../../../types/candidates";

import LisaMathys from "../../media/basel-stadt/Lisa-Mathys.jpeg";

const candidates: candidatesType = [
  {
    name: "Lisa Mathys",
    list: "Liste 5, Platz 3",
    role: "Projektleiterin im Bereich Energiewende",
    city: "Basel",
    img: LisaMathys,
  },
];

export const BaselStadt = () => {
  return (
    <div>
      <H1>Basel Stadt</H1>
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
