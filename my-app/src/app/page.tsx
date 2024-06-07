import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { BorderBeam } from "@/components/magicui/border-beam";
import WavyText from "@/components/magicui/wavy-text"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  PaperPlaneIcon,
  RocketIcon,
  PersonIcon,

} from "@radix-ui/react-icons";
const features = [
  {
    Icon: FileTextIcon,
    name: "Work Experience",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: PersonIcon,
    name: "About me",
    description: "Results-oriented and innovative Software Engineer with over 8 years of extensive experience in both front-end and back-end web application development.",
    href: "/",
    cta: "Learn more",
    background: "",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Education",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: RocketIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Contact",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: '123111444',
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];



const MarqueeDemoVertical = () => {
  return (
    <div>
    <section>
      <WavyText word="Kai Shen"    className="text-4xl font-bold text-black dark:text-white"
/>
    </section>
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    <BorderBeam/>
    </div>
  );
};

export default MarqueeDemoVertical;
