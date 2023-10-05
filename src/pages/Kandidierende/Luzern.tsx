import { H1, Container2, PersonList } from "../../components/CommonComponents";
import { Person } from "./Person";

import MarcelBudmiger from "../../media/luzern/Marcel-Budmiger.jpeg";
import candidatesType from "../../../types/candidates";

const candidates: candidatesType = [
  {
    name: "Marcel Budmiger",
    role: "Geschäftsleiter Luzerner Gewerkschaftsbund",
    city: "Luzern",
    img: MarcelBudmiger,
  },
];

export const Luzern = () => {
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
