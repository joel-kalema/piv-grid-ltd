import Presentation from "@/components/_home/presentation";
import Questions from "@/components/_home/questions";
// import Carousel from "@/components/_home/headerpage";
import Homepage from "@/components/_home/homepage";
import SwitchComponent from '@/components/_home/switchComponent';
import Contacts from '@/components/_home/contact';
import MasonryGridGallery from '@/components/_home/gallery';

export default function Home() {
  return (
    <>
    <Homepage />
    <Presentation />
    <SwitchComponent />
    {/* <MasonryGridGallery /> */}
    <Contacts />
    {/* <Questions /> */}
    </>
  );
}
