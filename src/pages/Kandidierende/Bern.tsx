import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";
import candidatesType from "../../../types/candidates";

import TamaraFunicello from "../../media/Bern/Tamara-Funicello.jpeg";
import JanKoebeli from "../../media/Bern/Jan-Koebeli.jpeg";
import ChristianGremaud from "../../media/Bern/Christian-Gremaud.jpeg";
import JakubWalczak from "../../media/Bern/Jakub-Walczak.jpeg";
import SofiaFisch from "../../media/Bern/Sofia-Fisch.jpeg";

const candidates: candidatesType = [
  {
    name: "Tamara Funicello",
    list: "Liste 4, Platz 3",
    role: "Politikerin, Aktivistin, politische Beraterin",
    city: "Bern",
    img: TamaraFunicello,
  },
  {
    name: "Christian Gremaud",
    list: "Liste 3, Platz 18",
    role: "Kommunizierend",
    city: "Bern",
    img: ChristianGremaud,
  },

  {
    name: "Jakub Walczak",
    list: "Liste 3, Platz 2",
    role: "Informatik-Lernende*r",
    city: "Erlach",
    img: JakubWalczak,
  },
  {
    name: "Jan Köbeli",
    list: "Liste 3, Platz 14",
    role: "Professioneller Schiedsrichter und Sportmanager",
    city: "Muri bei Bern",
    img: JanKoebeli,
  },
  {
    name: "Sofia Fisch",
    list: "Liste 4, Platz 5",
    role: "Advocacy bei Sexuelle Gesundheit Schweiz",
    city: "Muri bei Bern",
    img: SofiaFisch,
  },
];

export const Bern = () => {
  return (
    <div>
      <H1>Bern</H1>

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
