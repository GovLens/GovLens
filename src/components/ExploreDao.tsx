import { HoverEffect } from "../components/ui/card-hover-effect";
import { Title } from "../components/Title";

export function Explorecard() {
  return (
    <>
 

 <div className="mt-72 pt-8 h-[370px] bg-[#D2DAD9]" id="explore-dao">
  <Title title={"Explore DAOs"} />
  <div className="text-center">
  <span className="bg-[#F57D29] text-white border border-gray-300 p-2 px-4 mt-7 rounded-full inline-block">
    Currently, we have added Optimism DAO. Soon we will be adding more. Stay tuned! 🚀
  </span>
</div>



  <HoverEffect items={projects} />
</div>

    </>
  );
}
export const projects = [
  {
    title: "Optimism DAO",
    link: "/optimism-dao",
    image:"/img/optimism.png"
  },
  {
    title: "Arbitrum DAO",
    link: "",
    image:"/img/arbitrum.jpg"

  },
  {
    title: "ENS DAO",
  link: "",
  image:"/img/ENSDao.png"

  },
  {
    title: "Safe DAO",
    link: "",
    image:"/img/safedao.jpg"

  },
  {
    title: "ADD DAO",
    link: "",
    image:"/img/plus.png"

  },
 
];
