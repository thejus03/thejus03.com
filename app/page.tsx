import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div
      className="flex min-h-screen px-5 flex-col max-w-3xl mx-auto"
    >
      <Navbar />
      <div>
        <div className="text-[14px]">
          <h1 className="font-bold text-2xl py-4">whoami</h1>
          <p className="mb-4">Hi, I'm Thejus 👾</p>
          <p>
            I'm a software engineer based in Singapore. I am currently a
            computer science undergraduate at the <a className="hover:underline font-bold text-indigo-700" href="https://www.nus.edu.sg" target="_blank" rel="noopener noreferrer">National University of
            Singapore (NUS)</a>.
          </p>
          <Separator className="my-4"/>
          <p className="pb-4">
            I'm <b>currently</b>:
          </p>
          <ul className="list-disc ml-6">
            <li>Open for internship opportunities in 2026</li>
            <li>Building side projects or working on open-source software</li>
            <li>Trying to catch up on my Netflix watchlist</li>
          </ul>
          <p className="py-4">
            Previously, I've <b>interned</b> as a:
          </p>
          <ul className="list-disc ml-6">
            <li>Software Engineer at <a className="hover:underline font-bold text-indigo-700" href="https://www.invigilo.ai" target="_blank" rel="noopener noreferrer">Invigilo AI</a></li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}
