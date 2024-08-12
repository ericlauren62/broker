import Hero from "../ui/home/Hero";
import WhoWeAre from "../ui/home/WhoWeAre";
import SaveEasily from "../ui/home/SaveEasily";
import AutomatedInvesting from "../ui/home/AutomatedInvesting";
import InvestmentOptions from "../ui/home/InvestmentOptions";
import Blockchain from "../ui/home/Blockchain";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <SaveEasily />
      <AutomatedInvesting />
      <InvestmentOptions />
      <Blockchain />
    </main>
  );
}
