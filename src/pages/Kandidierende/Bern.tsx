import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";
import candidatesType from "../../../types/candidates";

import TamaraFunicello from "../../media/Bern/Tamara-Funicello.jpeg";
import JanKoebeli from "../../media/Bern/Jan-Koebeli.jpeg";
import ChristianGremaud from "../../media/Bern/Christian-Gremaud.jpeg";
import JakubWalczak from "../../media/Bern/Jakub-Walczak.jpeg";

const candidates: candidatesType = [
  {
    name: "Tamara Funicello",
    role: "Politikerin, Aktivistin, politische Beraterin",
    city: "Bern",
    img: TamaraFunicello,
  },
  {
    name: "Christian Gremaud",
    role: "Kommunizierend",
    city: "Bern",
    img: ChristianGremaud,
  },

  {
    name: "Jakub Walczak",
    role: "Informatik-Lernende*r",
    city: "Erlach",
    img: JakubWalczak,
  },
  {
    name: "Jan Köbeli",
    role: "Professioneller Schiedsrichter und Sportmanager",
    city: "Muri bei Bern",
    img: JanKoebeli,
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
