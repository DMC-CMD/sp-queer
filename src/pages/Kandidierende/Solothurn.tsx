import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";
import candidatesType from "../../../types/candidates";

import HardyJaeggi from "../../media/solothurn/Hardy-Jaeggi.jpeg";

const candidates: candidatesType = [
  {
    name: "Hardy Jäggi",
    role: "Selbständig, Gemeindepräsident",
    city: "Recherswil",
    img: HardyJaeggi,
  },
];

export const Solothurn = () => {
  return (
    <div>
      <H1>Solothurn</H1>

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
