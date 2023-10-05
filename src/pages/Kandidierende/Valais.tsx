import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";
import candidatesType from "../../../types/candidates";

import UrsulaImhof from "../../media/valais/Ursula-Imhof.jpeg";

const candidates: candidatesType = [
  {
    name: "Ursula Imhof",
    role: "médecin",
    city: "Sierre",
    img: UrsulaImhof,
  },
];

export const Valais = () => {
  return (
    <div>
      <H1>Valais</H1>

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
