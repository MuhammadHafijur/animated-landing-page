import Header from "@components/Header";
import HumanContainer from "@components/HumanContainer";
import LeavesContainer from "@components/LeavesContainer";
import TextContainer from "@components/TextContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TextContainer />
        <HumanContainer />
        <LeavesContainer />
      </main>
    </div>
  );
}
