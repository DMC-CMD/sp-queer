import { Container2, H1, PersonList } from "../../components/CommonComponents";
import { useState } from "react";
import styled from "styled-components";
import { Person } from "./Person";

//List 27
import AnnaGraff from "../../media/zurich/01_Anna_Graff.jpg";
import MaxKranich from "../../media/zurich/02_Max_Kranich.jpg";
import RayBelleDjuric from "../../media/zurich/03_Ray_Belle_Djuric.jpg";
import HannahPfalzgraf from "../../media/zurich/04_Hannah_Pfalzgraf.jpg";
import LucaDahinden from "../../media/zurich/05_Luca_Dahinden.jpg";
import LiamBohner from "../../media/zurich/06_Liam_Bohner.jpg";
import SelinaVilliger from "../../media/zurich/07_Selina_Villiger.jpg";
import JanMüller from "../../media/zurich/08_Jan_Mueller.jpg";
import ClaudiaRohr from "../../media/zurich/09_Claudia_Rohr.jpg";
import MaxTöpfer from "../../media/zurich/10_Max Toepfer.jpg";
import MarcEggenberger from "../../media/zurich/11_Marc_Eggenberger.jpg";
import JoëlleJäger from "../../media/zurich/12_Joelle_Jaeger.jpg";
import FlorinSchütz from "../../media/zurich/13_Florin_Schuetz.jpg";
import JoySchuurmans from "../../media/zurich/14_Joy_Schuurmans_Stekhoven.jpg";
import MarcelHagemann from "../../media/zurich/15_Marcel_Hagemann.jpg";
import BarbaraSpirig from "../../media/zurich/16_Barbara_Spirig.jpg";
import OliverHeimgarnter from "../../media/zurich/17_Oliver_Heimgartner.jpg";
import NoahHuber from "../../media/zurich/18_Noa_Huber.jpg";
import MichiRüegg from "../../media/zurich/19_Michi_Rueegg.jpg";
import AinaWeber from "../../media/zurich/20_Aina_Waeber.jpg";
import DominicTobler from "../../media/zurich/21_Dominic_Tobler.jpg";
import AndreaSimonett from "../../media/zurich/22_Andrea_Simonett.jpg";
import LaureStadler from "../../media/zurich/23_Laure_Stadler.jpg";
import TobiasUrech from "../../media/zurich/24_Tobias_Urech.jpg";
import AlexanderHerren from "../../media/zurich/25_Alexander_Robert_Herren.jpg";
import CarmenJeanguenat from "../../media/zurich/26_Carmen_Jeanguenat.jpg";
import KarlScheuber from "../../media/zurich/27_Karl_Scheuber.jpg";
import LeaEstermann from "../../media/zurich/28_Lea_Estermann.jpg";
import NicolaJarkovich from "../../media/zurich/29_Nicola_Andrea_Jarkovich.jpg";
import AnandaKurth from "../../media/zurich/30_Ananda_Kurth.jpg";
import JeanMarcMentlen from "../../media/zurich/31_Jean-Marc_von_Mentlen.jpg";
import StellaJegher from "../../media/zurich/32_Stella_Jegher.jpg";
import DominikSteinacher from "../../media/zurich/33_Dominik_Steinacher.jpg";
import GiuliaHaller from "../../media/zurich/34_Giulia_Haller.jpg";
import MartinNaef from "../../media/zurich/35_Martin_Naef.jpg";
import candidatesType from "../../../types/candidates";

//List 2
import BrigitteRoeoesli from "../../media/zurich/andere_Listen/Brigitte-Roeoesli.jpeg";
import MarcoDenoth from "../../media/zurich/andere_Listen/Marco-Denoth.jpeg";
import SamuelWenk from "../../media/zurich/andere_Listen/Samuel-Wenk.jpeg";
import NevinHammad from "../../media/zurich/andere_Listen/Nevin-Hammad.jpeg";
import AnnaRosenwasser from "../../media/zurich/andere_Listen/Anna-Rosenwasser.jpeg";

const candidatesList27: candidatesType = [
  {
    name: "Anna Graff",
    role: "Biologin, Sprachwissenschaftlerin, Gemeinderätin",
    city: "Zürich",
    img: AnnaGraff,
  },
  {
    name: "Max Kranich",
    role: "Buchhalter, Co-Präsident SP Queer",
    city: "Zürich",
    img: MaxKranich,
  },
  {
    name: "Ray Belle Djuric",
    role: "Dragqueen, Pädagog*in",
    city: "Uster",
    img: RayBelleDjuric,
  },
  {
    name: "Hannah Pfalzgraf",
    role: "Hebamme i.A., Kantonsrätin",
    city: "Mettmenstetten",
    img: HannahPfalzgraf,
  },
  {
    name: "Luca Dahinden",
    role: "Geschäftsführer NGO, Community Health Worker",
    city: "Zürich",
    img: LucaDahinden,
  },
  {
    name: "Liam Bohner",
    role: "Geschäftsführende Person HAZ-Queer Zürich",
    city: "Zürich",
    img: LiamBohner,
  },
  {
    name: "Selina Villiger",
    role: "Communications Manager, Betriebsökonomin FH",
    city: "Zürich",
    img: SelinaVilliger,
  },
  {
    name: "Jan Müller",
    role: "Leiter Kommunikation Aids-Hilfe Schweiz",
    city: "Zürich",
    img: JanMüller,
  },
  {
    name: "Claudia Rohr",
    role: "Redaktion/Herausgeberin Kulturmagazin, dipl. Gerontologin",
    city: "Zürich",
    img: ClaudiaRohr,
  },
  {
    name: "Max Töpfer",
    role: "Parteisekretär, Gemeinderat",
    city: "Kloten",
    img: MaxTöpfer,
  },
  {
    name: "Marc Eggenberger",
    role: "Politolog*in, Gesundheitskommunikator*in",
    city: "Zürich",
    img: MarcEggenberger,
  },
  {
    name: "Joëlle Jäger",
    role: "Museumsaufsicht, angehende Archäologin",
    city: "Wädenswil",
    img: JoëlleJäger,
  },
  {
    name: "Florin Schütz",
    role: "Historiker, Projektleiter Kampagnen",
    city: "Zürich",
    img: FlorinSchütz,
  },
  {
    name: "Joy Schuurmans Stekhoven",
    role: "Elektroingenieurin ETH",
    city: "Zürich",
    img: JoySchuurmans,
  },
  {
    name: "Marcel Hagemann",
    role: "MA Soziologie und Politikwissenschaft, Bankangestellter",
    city: "Winterthur",
    img: MarcelHagemann,
  },
  {
    name: "Barbara Spririg",
    role: "Kampagnenleiterin",
    city: "Zürich",
    img: BarbaraSpirig,
  },
  {
    name: "Oliver Heimgartner",
    role: "Projektleiter, Co-Präsident SP Stadt Zürich",
    city: "Zürich",
    img: OliverHeimgarnter,
  },
  {
    name: "Noa Huber",
    role: "Gastromitarbeiter*in",
    city: "Zürich",
    img: NoahHuber,
  },
  {
    name: "Michi Rüegg",
    role: "Autor, Dozent, Berater",
    city: "Zürich",
    img: MichiRüegg,
  },
  {
    name: "Aina Weber",
    role: "Leiterin Kommunikation & Fundraising, Soziologin",
    city: "Winterthur",
    img: AinaWeber,
  },
  {
    name: "Dominic Tobler",
    role: "Student Informatik",
    city: "Zollikon",
    img: DominicTobler,
  },
  {
    name: "Andrea Simonett",
    role: "Kaufmännischer Mitarbeiter",
    city: "Chur",
    img: AndreaSimonett,
  },
  {
    name: "Laure Stadler",
    role: "Head Open Government Data Kanton Zürich",
    city: "Zürich",
    img: LaureStadler,
  },
  {
    name: "Tobias Urech",
    role: "Historiker, Dragqueen",
    city: "Zürich",
    img: TobiasUrech,
  },
  {
    name: "Alexander Robert Herren",
    role: "Indogermanist, Doktorand Altalbanisch",
    city: "Zürich",
    img: AlexanderHerren,
  },
  {
    name: "Carmen Jeanguenat",
    role: "Kommunikation und Kampagnen, angehende Politikwissenschaftlerin",
    city: "Zürich",
    img: CarmenJeanguenat,
  },
  {
    name: "Karl Scheuber",
    role: "Musiker, Dirigent",
    city: "Zürich",
    img: KarlScheuber,
  },
  {
    name: "Lea Estermann",
    role: "Relegionswissenschaftlerin BA, Sozialpädagogin i.A.",
    city: "Zürich",
    img: LeaEstermann,
  },
  {
    name: "Nicola Andrea Jarkovich",
    role: "Student Soziale Arbeit",
    city: "Hinwil",
    img: NicolaJarkovich,
  },
  {
    name: "Ananda Kurth",
    role: "Studium Msc Bioinformatik",
    city: "Wetzikon",
    img: AnandaKurth,
  },
  {
    name: "Jean-Marc von Mentlen",
    role: "Msc ETH, Batterieforscher",
    city: "Urdorf",
    img: JeanMarcMentlen,
  },
  {
    name: "Stella Jegher",
    role: "Dipl. Übersetzerin, Menschenrechts- und Umweltaktivistin",
    city: "Zürich",
    img: StellaJegher,
  },
  {
    name: "Dominik Steinacher",
    role: "Jurist",
    city: "Zürich",
    img: DominikSteinacher,
  },
  {
    name: "Giulia Haller",
    role: "Lehrperson, Vorstand HAZ",
    city: "Zürich",
    img: GiuliaHaller,
  },
  {
    name: "Martin Naef",
    role: "Jurist",
    city: "Zurich",
    img: MartinNaef,
  },
];

const candidatesList2: candidatesType = [
  {
    name: "13. Brigitte Röösli",
    role: "Pflegefachfrau, Stadträtin, Kantonsrätin",
    city: "Effretikon",
    img: BrigitteRoeoesli,
  },
  {
    name: "14. Marco Denoth",
    role: "Architekt im Nachhaltigen Bauen, Stadtparlamentarier, Unternehmer",
    city: "Zürich",
    img: MarcoDenoth,
  },
  {
    name: "18. Nevin Nafisa Hammad",
    role: "Religionswissenschaftlerin, Co-Präsidentin SP Frauen ZH",
    city: "Zürich",
    img: NevinHammad,
  },
  {
    name: "20. Anna Rosenwasser",
    role: "Autorin, Journalistin",
    city: "Zürich",
    img: AnnaRosenwasser,
  },

  {
    name: "21. Samuel Wenk",
    role: "Jurist",
    city: "Affoltern",
    img: SamuelWenk,
  },
];
const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const SelectionBox = styled.div`
  display: flex;
  margin-bottom: 36px;
  gap: 24px;
`;

interface Props {
  isActive: boolean;
}
const Selection = styled.div<Props>`
  font-size: 34px;
  padding-bottom: 8px;
  border-bottom: ${(p) =>
    p.isActive ? "2px solid white" : "2px solid rgba(0, 0, 0, 0)"};

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
`;

export const Zurich = () => {
  const [List27Selected, setList27Selected] = useState(true);

  return (
    <div>
      <H1>Zürich</H1>

      <Center>
        <SelectionBox>
          <Selection
            isActive={List27Selected}
            onClick={() => setList27Selected(true)}
          >
            Liste 27
          </Selection>
          <Selection
            isActive={!List27Selected}
            onClick={() => setList27Selected(false)}
          >
            Liste 2
          </Selection>
        </SelectionBox>
      </Center>

      <Container2>
        <PersonList>
          {List27Selected
            ? candidatesList27.map((c, ind) => (
                <Person data={c} number={ind + 1} />
              ))
            : candidatesList2.map((c) => <Person data={c} />)}
        </PersonList>
      </Container2>
    </div>
  );
};
