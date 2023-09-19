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
const introFR =
  "En tant que PS queer, nous avons demandé en juin à la communauté, par le biais d’un vote public, quels thèmes de campagne nous devrions mettre en avant lors des élections au Conseil national. La communauté a donc choisi les trois axes suivants comme thèmes de campagne et comme perspectives politiques pour la prochaine législature :";
const demands: Array<{
  titleFr: string;
  titleDe: string;
  textFr: string;
  textDe: string;
}> = [
  {
    titleFr:
      "Étendre la protection contre les discriminations envers les personnes trans",
    titleDe: "Diskriminierungsschutz auf trans Personen ausweiten",
    textFr:
      "En février 2020, nous avons pu célébrer, en tant que communauté queer, l’acceptation par une votation de la loi qui prévoit que les déclarations homophobes seront désormais poursuivies pénalement dans le cadre de la loi sur la protection contre la discrimination. Malheureusement, le Parlement a refusé la même protection pour les personnes trans. La croissance de la haine contre les personnes trans montre clairement qu’il faut étendre la protection contre les discriminations de genre !",
    textDe:
      "Im Februar 2020 konnten wir als queere Community einen Abstimmungserfolg feiern, dass homophobe Aussagen neu via dem Diskriminierungsschutzgesetz strafrechtlich verfolgt werden. Leider wurden im Parlament trans Menschen derselbe Schutz verwehrt. Die momentane Hetze gegen trans Personen zeigt glasklar, dass es eine Ausweitung des Diskrminierungsschutzes auf das Geschlecht braucht!",
  },
  {
    titleFr:
      "Subventions de l’État pour les institutions de protection et d’aide aux personnes queers",
    titleDe:
      "Staatliche Subventionen für Schutz- und Hilfseinrichtungen für Queers",
    textFr:
      "Nous, les personnes queers, sommes laissé-es pour compte par l’État. Il ne nous accompagne pas lorsque nous sommes victimes de violence et de haine. C’est pourquoi nous nous sommes organisé-es nous-mêmes et avons créé des centres d’accueil. Mais ceux-ci ne peuvent souvent être financés que par des dons et ont constamment des problèmes financiers, alors même qu’ils sont essentiels pour la santé physique et psychique des personnes queer. C’est pourquoi nous demandons que les structures de protection et d’aide aux personnes queers bénéficient d’un soutien financier constant de la part de l’État.",
    textDe:
      "Wir Queers werden nach Gewalt- und Hasserfahrungen vom Staat alleine gelassen. Wir haben uns deshalb selbst organisiert und Anlaufstellen gegründet. Diese können sich jedoch oft nur über Spendengelder finanzieren und haben nicht selten finanzielle Probleme, obwohl sie essenziell für die physische und psychische Gesundheit von queeren Personen sind. Daher fordern wir, dass Schutz- und Hilfseinrichtungen von Queers und für Queers finanziell konstant staatlich unterstützt werden.",
  },
  {
    titleFr:
      "Formation sur les sexualités et les identités queer dans le domaine de la santé.",
    titleDe:
      "Ausbildung über queere Sexualität und Identitäten im Gesundheitsbereich",
    textFr:
      "Nous connaissons toutes et tous les horreurs qui nous sont arrivées, à nous et à nos ami-es, dans des établissements de santé parce que le personnel n’en savait pas assez sur les sexualités et les identités queer et faisait montre de préjugés et d’incompréhension. Nous ne devrions pas craindre de ne pas être pris-es au sérieux lorsque nous avons des problèmes médicaux. La formation sur les sexualités et les identités queer dans le domaine de la santé doit être développée et devenir obligatoire !",
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
