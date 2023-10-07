import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";

import FlorianSchweri from "../../media/geneve/Florian-Schweri.jpeg";
import candidatesType from "../../../types/candidates";

const candidates: candidatesType = [
  {
    name: "Florian Schweri",
    list: "Liste 8, Position 9",
    role: "Juriste - Conseiller municipal suppléant Ville de Genève",
    city: "Genève",
    img: FlorianSchweri,
  },
];

export const Geneve = () => {
  return (
    <div>
      <H1>Genève</H1>
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
