import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {

  const {isLoading , auth}=usePuterStore();
      const location=useLocation();
      const navigate=useNavigate();
  
      useEffect(()=>{
          if(auth.isAuthenticated)navigate('/auth?next=/');
      },[auth.isAuthenticated])
  
  

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Application and Resume Ratings</h1>
        <h2>Review your Submissions and Check AI-powered Feedback</h2>
      </div>

      {resumes.length>0 && (
      <div className="resumes-section">
        {resumes.map((resume)=>(
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
      )}
    </section>

  </main>
}
