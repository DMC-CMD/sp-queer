import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";

import MiaJenni from "../../media/aargau/Mia_Jenni.jpeg";
import candidatesType from "../../../types/candidates";

const candidates: candidatesType = [
  {
    name: "Mia Jenni",
    list: "Liste 2a, Platz 7",
    role: "MA, Wissenschaft. Mitarbeiterin, Einwohnerrätin",
    city: "Rieden",
    img: MiaJenni,
  },
];

export const Aargau = () => {
  return (
    <div>
      <H1>Aargau</H1>
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
