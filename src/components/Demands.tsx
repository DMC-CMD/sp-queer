import { Demand } from "./Demand";
import styled from "styled-components";

const Content = styled.div`
  text-align: right;
  margin-bottom: 80px;
`;

const IntroText = styled.p`
  font-size: 32px;
  text-align: left;
`;
const introDE =
  "Als SP queer haben wir im Juni die Community mit einem öffentlichen Voting gefragt, mit welchen drei Wahlkampfthemen wir in die Nationalratswahlen steigen sollten. Die Community hat entschieden. Wir setzen folgende drei Themen als Wahlkampfthemen und als politische Perspektiven für die nächste Legislatur:";
const introFR = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const demands: Array<{
  titleFr: string;
  titleDe: string;
  textFr: string;
  textDe: string;
}> = [
  {
    titleFr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    titleDe: "Diskriminierungsschutz auf trans Personen ausweiten",
    textFr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
    textDe:
      "Im Februar 2020 konnten wir als queere Community einen Abstimmungserfolg feiern, dass homophobe Aussagen neu via dem Diskriminierungsschutzgesetz strafrechtlich verfolgt werden. Leider wurden im Parlament trans Menschen derselbe Schutz verwehrt. Die momentane Hetze gegen trans Personen zeigt glasklar, dass es eine Ausweitung des Diskrminierungsschutzes auf das Geschlecht braucht!",
  },
  {
    titleFr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    titleDe:
      "Staatliche Subventionen für Schutz- und Hilfseinrichtungen für Queers",
    textFr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
    textDe:
      "Wir Queers werden nach Gewalt- und Hasserfahrungen vom Staat alleine gelassen. Wir haben uns deshalb selbst organisiert und Anlaufstellen gegründet. Diese können sich jedoch oft nur über Spendengelder finanzieren und haben nicht selten finanzielle Probleme, obwohl sie essenziell für die physische und psychische Gesundheit von queeren Personen sind. Daher fordern wir, dass Schutz- und Hilfseinrichtungen von Queers und für Queers finanziell konstant staatlich unterstützt werden.",
  },
  {
    titleFr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    titleDe:
      "Ausbildung über queere Sexualität und Identitäten im Gesundheitsbereich",
    textFr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
    textDe:
      "Wir alle kennen die Schauergeschichten, welche uns und unseren Freund*innen in Gesundheitseinrichtungen passiert sind, weil das Personal nicht genug über queere Sexualitäten und Identitäten wusste und daher mit Vorurteilen und Unverständnis handelte. Wir sollten keine Angst haben müssen, nicht ernst genommen zu werden, wenn wir medizinische Probleme haben. Die Ausbildung über queere Sexualitäten und Identitäten im Gesundheitsbereich muss ausgebaut werden und Pflicht werden!",
  },
];

export const Demands = (props: { isFrench: boolean }) => {
  const { isFrench } = props;
  return (
    <section>
      <Content>
        <IntroText>{isFrench ? introFR : introDE}</IntroText>
      </Content>
      <Demand
        first
        title={isFrench ? demands[0].titleFr : demands[0].titleDe}
        text={isFrench ? demands[0].textFr : demands[0].textDe}
        buttonLink={isFrench ? "/demandes" : "/forderungen"}
        isFrench={isFrench}
      />

      <Demand
        title={isFrench ? demands[1].titleFr : demands[1].titleDe}
        text={isFrench ? demands[1].textFr : demands[1].textDe}
        buttonLink={isFrench ? "/demandes" : "/forderungen"}
        isFrench={isFrench}
      />

      <Demand
        title={isFrench ? demands[2].titleFr : demands[2].titleDe}
        text={isFrench ? demands[2].textFr : demands[2].textDe}
        buttonLink={isFrench ? "/demandes" : "/forderungen"}
        isFrench={isFrench}
        last
      />
    </section>
  );
};
