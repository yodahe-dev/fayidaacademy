// app/(user)/(home)/page.tsx
import Hero from "@/app/(user)/(home)/Hero";
import StreamsSection from './SubjectsSection';
import LearningExperience from "./LearningExperience";
import PackagesPage from "./package";
import Blog from "./Blog";
import ChatSupport from "@/components/ChatSupport"; // Corrected import path

export default function page() {
  return (
    <div>
      <Hero />
      <StreamsSection/>
      <Blog />
      <LearningExperience/>
      <PackagesPage />
      <ChatSupport /> {/* Add this component */}
    </div>
  )
}