
export default function Home() {
  return (
    <div
      className="flex min-h-screen px-5 flex-col max-w-3xl mx-auto text-white my-12"
    >
      {/* <Navbar /> */}
      <div>
        <div className="text-[16px]">
          <h1 className="font-bold text-zinc-300 text-2xl py-2 px-4 rounded-xl border border-stone-700 bg-stone-800 inline-block">{'> '}whoami</h1>
          <p className="py-3">Hi, I&apos;m Thejus 👾</p>
          <p className="py-3">
            I&apos;m a software engineer based in Singapore. I am currently a
            computer science undergraduate at the <a className="hover:underline text-rose-500" href="https://www.nus.edu.sg" target="_blank" rel="noopener noreferrer">National University of
            Singapore (NUS)</a>.
          </p>
          <p className="">
            I enjoy building! Connect with me on <a className="hover:underline text-rose-500" href="https://www.linkedin.com/in/thejus03/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a className="hover:underline text-rose-500" href="https://github.com/thejus03" target="_blank" rel="noopener noreferrer">GitHub</a> to see what I&apos;m up to!
          </p>
          <p className="py-3">
            Feel free to contact me via <a className="hover:underline text-rose-500" href="mailto:thejusunni@hotmail.com" target="_blank" rel="noopener noreferrer">email</a> or <a className="hover:underline text-rose-500" href="https://t.me/thejus03" target="_blank" rel="noopener noreferrer">telegram</a>.
          </p>
          <h1 className="font-bold text-zinc-300 text-2xl py-2 px-4 rounded-xl border border-stone-700 bg-stone-800 inline-block mt-10">{'> '}date</h1>
          <p className="py-3">
            I&apos;m <b>currently</b>:
          </p>
          <ul className="list-disc ml-6 pb-3">
            <li>Open for internship opportunities in 2026</li>
            <li>Building side projects or working on open-source software</li>
            <li>Trying to catch up on my Netflix watchlist</li>
          </ul>
          <h1 className="font-bold text-zinc-300 text-2xl py-2 px-4 rounded-xl border border-stone-700 bg-stone-800 inline-block mt-10">{'> '}grep &quot;work&quot; *</h1>
          <p className="py-3">
            Previously, I&apos;ve <b>interned</b> as a:
          </p>
          <ul className="list-disc ml-6 pb-3">
            <li>Software Engineer at <a className="hover:underline text-rose-500" href="https://www.invigilo.ai" target="_blank" rel="noopener noreferrer">Invigilo AI</a></li>
          </ul>
          <h1 className="font-bold text-zinc-300 text-2xl py-2 px-4 rounded-xl border border-stone-700 bg-stone-800 inline-block mt-10">{'> '}grep &quot;projects&quot; *</h1>
          <p className="my-3">
            Few fun <b>projects</b> I&apos;ve worked on:
          </p>
          <ul className="list-disc ml-6 pb-3">
            <li><a href="https://nusmods.com/optimiser" className="hover:underline text-rose-500" target="_blank" rel="noopener noreferrer">Timetable Optimiser for NUSMods</a> - helping over 30,000 students in NUS</li>
            <li><a href="https://tracktern.com" className="hover:underline text-rose-500" target="_blank" rel="noopener noreferrer">TrackTern</a> - platform for tracking internships (used by 600+ users)</li>
            <li><a href="https://github.com/thejus03/portfoliomatic" className="hover:underline text-rose-500" target="_blank" rel="noopener noreferrer">Financial portfolio robo-advisory tool</a> - built for fun</li>
            <li><a href="https://github.com/thejus03/chessai" className="hover:underline text-rose-500" target="_blank" rel="noopener noreferrer">AI Chess engine</a> - thinks 5 moves ahead in less than 10 seconds</li>
            <li><a href="https://github.com/thejus03/Text-Emotion-Neural" className="hover:underline text-rose-500" target="_blank" rel="noopener noreferrer">Text Emotion Recognition</a> - first and only neural network i created</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}
