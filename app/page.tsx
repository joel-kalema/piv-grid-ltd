import Presentation from "@/components/_home/presentation";
import Homepage from "@/components/_home/homepage";
import SwitchComponent from '@/components/_home/switchComponent';
import Contacts from '@/components/_home/contact';

export default function Home() {
  return (
    <>
    <Homepage />
    <Presentation />
    <SwitchComponent />
    <Contacts />
    </>
  );
}
