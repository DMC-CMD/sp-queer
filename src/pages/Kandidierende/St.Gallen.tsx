import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";

import AndreaScheck from "../../media/stgallen/Andrea-Scheck.jpg";
import JoelMueller from "../../media/stgallen/Joel-Mueller.jpeg";
import MarleneSchuerch from "../../media/stgallen/Marlene-Schuerch.jpeg";

import candidatesType from "../../../types/candidates";

const candidates: candidatesType = [
  {
    name: "Andrea Scheck",
    role: "Technische Redakteurin, Studentin Computerlinguistik, Präsidentin SP Kt. St.Gallen",
    city: "St.Gallen",
    img: AndreaScheck,
  },
  {
    name: "Joel Müller",
    role: "Restaurationsfachmann EFZ, Sozialpädagoge, Erziehungswissenschaftler i.A., Vize-Präsident SP Kt. SG",
    city: "Wattwil",
    img: JoelMueller,
  },
  {
    name: "Marlene Schürch",
    role: "Leiterin IT-Recht und Datenschutz Kt. St.Gallen, Mitglied Stadtparlament St.Gallen",
    city: "St.Gallen",
    img: MarleneSchuerch,
  },
];

export const StGallen = () => {
  return (
    <div>
      <H1>St.Gallen</H1>
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
