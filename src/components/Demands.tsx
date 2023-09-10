import { Demand } from "./Demand";

const demands: Array<{
  titleFr: string;
  titleDe: string;
  textFr: string;
  textDe: string;
}> = [
  {
    titleFr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    titleDe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    textFr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
    textDe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
  },
  {
    titleFr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    titleDe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    textFr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
    textDe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
  },
  {
    titleFr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    titleDe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    textFr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
    textDe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione perferendis eaque animi eum necessitatibus atque nostrum repellat sunt, placeat natus maiores molestiae quia odit harum, quasi illo sit? Labore!",
  },
];

export const Demands = (props: { isFrench: boolean }) => {
  const { isFrench } = props;
  return (
    <section>
      <Demand
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
