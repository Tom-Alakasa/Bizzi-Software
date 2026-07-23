import { DownloadCard } from "../../components/DownloadCard";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import { Preset } from "../../components/Preset";
import Stats from "../../components/Stats";
import Testimonials from "../../components/Testimonials";

export function Home() {
  return (
    <Preset>
      <Hero activePlatform={"windows"} />
      <Features />
      <Stats />
      <Testimonials />
      <DownloadCard></DownloadCard>
    </Preset>
  );
}
