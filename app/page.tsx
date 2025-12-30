import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="flex min-h-screen px-5 flex-col max-w-3xl mx-auto"
    >
      <Navbar />
      <div>
        <div className="text-[16px]">
          <h1 className="font-bold text-2xl py-4">whoami</h1>
          <p className="py-3">Hi, I'm Thejus 👾</p>
          <p className="py-3">
            I'm a software engineer based in Singapore. I am currently a
            computer science undergraduate at the <a className="hover:underline font-bold text-indigo-700" href="https://www.nus.edu.sg" target="_blank" rel="noopener noreferrer">National University of
            Singapore (NUS)</a>.
          </p>
          <Separator className="my-3"/>
          <p className="py-3">
            I'm <b>currently</b>:
          </p>
          <ul className="list-disc ml-6 pb-3">
            <li>Open for internship opportunities in 2026</li>
            <li>Building side projects or working on open-source software</li>
            <li>Trying to catch up on my Netflix watchlist</li>
          </ul>
          <Separator className="my-3"/>
          <p className="py-3">
            Previously, I've <b>interned</b> as a:
          </p>
          <ul className="list-disc ml-6 pb-3">
            <li>Software Engineer at <a className="hover:underline font-bold text-indigo-700" href="https://www.invigilo.ai" target="_blank" rel="noopener noreferrer">Invigilo AI</a></li>
          </ul>
          <p className="my-3">
            Few fun projects I've worked on:
          </p>
          <ul className="list-disc ml-6 pb-3">
            <li><a href="https://nusmods.com/optimiser" className="hover:underline font-bold text-indigo-700" target="_blank" rel="noopener noreferrer">Timetable Optimiser for NUSMods</a> - helping over 30,000 students in NUS</li>
            <li><a href="https://tracktern.com" className="hover:underline font-bold text-indigo-700" target="_blank" rel="noopener noreferrer">TrackTern</a> - platform for tracking internships (used by 600+ users)</li>
            <li><a href="https://github.com/thejus03/portfoliomatic" className="hover:underline font-bold text-indigo-700" target="_blank" rel="noopener noreferrer">Financial portfolio robo-advisory tool</a> - built for fun</li>
            <li><a href="https://github.com/thejus03/chessai" className="hover:underline font-bold text-indigo-700" target="_blank" rel="noopener noreferrer">AI Chess engine</a> - thinks 5 moves ahead in less than 10 seconds</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}
