import Hero from "@/app/(user)/(home)/Hero";
import StreamsSection from './SubjectsSection';
import LearningExperience from "./LearningExperience";

export default function page() {
  return (
    <div>
      <Hero />
      <StreamsSection/>
      <LearningExperience/>
    </div>
  )
}
