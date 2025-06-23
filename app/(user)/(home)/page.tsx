import Hero from "@/app/(user)/(home)/Hero";
import StreamsSection from './SubjectsSection';
import LearningExperience from "./LearningExperience";
import PackagesPage from "./package";

export default function page() {
  return (
    <div>
      <Hero />
      <StreamsSection/>
      <LearningExperience/>
      <PackagesPage />
    </div>
  )
}
