import { HoverEffect } from "../components/ui/card-hover-effect";
import { Title } from "../components/Title";

export function Explorecard() {
  return (
    <>
 

    <div className=" mt-72 h-[350px] bg-[#D2DAD9]">
    <Title title={"Explore DAO"} />
    <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Optimism DAO",
    link: "",
    image:"/img/optimism.png"
  },
  {
    title: "Arbitrum DAO",
    link: "",
    image:"/img/arbitrum.png"

  },
  {
    title: "ENS DAO",
  link: "",
  image:"/img/bg.jpg"

  },
  {
    title: "Maker DAO",
    link: "",
    image:"/img/bg.jpg"

  },
  {
    title: "ADD DAO",
    link: "",
    image:"/img/bg.jpg"

  },
 
];
