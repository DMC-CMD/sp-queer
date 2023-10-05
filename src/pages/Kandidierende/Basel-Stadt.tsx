import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";
import candidatesType from "../../../types/candidates";

import LisaMathys from "../../media/basel-stadt/Lisa-Mathys.jpeg";

const candidates: candidatesType = [
  {
    name: "Lisa Mathys",
    role: "Projektleiterin im Bereich Energiewende",
    city: "Bern",
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
