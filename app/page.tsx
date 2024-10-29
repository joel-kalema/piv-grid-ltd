import Presentation from "@/components/_home/presentation";
import Questions from "@/components/_home/questions";
// import Carousel from "@/components/_home/headerpage";
import Homepage from "@/components/_home/homepage";
import Switch from '@/components/_home/switch';
import Contacts from '@/components/_home/contact'

export default function Home() {
  return (
    <>
    <Homepage />
    <Presentation />
    <Switch />
    <Contacts />
    {/* <Questions /> */}
    </>
  );
}
