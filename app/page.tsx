import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import UptimeCounter from "./components/UptimeCounter";
import ThemeToggle from "./components/ThemeToggle";

const logoDevToken = "pk_OCcT39CnSs2GzWpUOOiFXg";

function CompanyLogo({ name, whiteBackground = false }: { name: string; whiteBackground?: boolean }) {
  const format = whiteBackground ? "jpg" : "png";
  const logoUrl = `https://img.logo.dev/name/${encodeURIComponent(name)}?token=${logoDevToken}&size=24&format=${format}&retina=true`;

  return (
    <Image
      className="company-logo"
      src={logoUrl}
      alt={`${name} logo`}
      width={24}
      height={24}
      unoptimized
    />
  );
}

const navItems = [
  { href: "#about", label: "about" },
  { href: "#now", label: "now" },
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
];

export default function Home() {
  return (
    <div className="site-shell min-h-screen text-ink">
      <div className="ambient-grid" aria-hidden="true" />

      <aside className="system-readout hidden xl:block" aria-label="System information">
        <UptimeCounter />
      </aside>

      <header className="terminal-header">
        <a href="#about" className="terminal-identity" aria-label="Back to top">
          <span className="status-dot" aria-hidden="true" />
          <span className="text-subtle">thejus03@portfolio</span>
          <span className="text-faint">:</span>
          <span className="text-soft">~</span>
        </a>

        <nav className="terminal-nav" aria-label="Page sections">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <ThemeToggle />

      <main className="mx-auto max-w-3xl px-5 pb-16 pt-10 sm:pb-24 sm:pt-16">
        <section id="about" className="terminal-section scroll-mt-24">
          <h1 className="command-heading"><span aria-hidden="true">~$</span> whoami</h1>
          <div className="section-copy">
            <p>Hi, I&apos;m Thejus <span className="inline-block transition-transform hover:-rotate-12 hover:scale-110">👾</span></p>
            <p>
              I&apos;m a software engineer based in Singapore. I am currently a
              computer science undergraduate at the <a className="terminal-link" href="https://www.nus.edu.sg" target="_blank" rel="noopener noreferrer">National University of Singapore (NUS)</a>.
            </p>
            <p>
              I enjoy building! Connect with me on <a className="terminal-link" href="https://www.linkedin.com/in/thejus03/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a className="terminal-link" href="https://github.com/thejus03" target="_blank" rel="noopener noreferrer">GitHub</a> to see what I&apos;m up to!
            </p>
            <p>
              Feel free to contact me via <a className="terminal-link" href="mailto:thejusunni@hotmail.com">email</a> or <a className="terminal-link" href="https://t.me/thejus03" target="_blank" rel="noopener noreferrer">telegram</a>.
            </p>
          </div>
        </section>

        <section id="now" className="terminal-section scroll-mt-24">
          <h2 className="command-heading"><span aria-hidden="true">~$</span> date</h2>
          <p className="section-intro">I&apos;m <strong>currently</strong>:</p>
          <ul className="terminal-list terminal-list-note">
            <li>Open for internship opportunities in 2027</li>
            <li>Building side projects or working on open-source software</li>
            <li>Trying to catch up on my Netflix watchlist</li>
          </ul>
        </section>

        <section id="work" className="terminal-section scroll-mt-24">
          <h2 className="command-heading"><span aria-hidden="true">~$</span> grep <span className="text-rose-500">&quot;work&quot;</span> *</h2>
          <p className="section-intro">I&apos;ve <strong>previously</strong> been a <em>(in order of recency)</em>:</p>
          <ul className="terminal-list work-list">
            <li>
              <span>Software Engineering Intern at <a className="terminal-link" href="https://open.gov.sg" target="_blank" rel="noopener noreferrer">Open Government Products</a></span>
              <CompanyLogo name="Open Government Products" />
            </li>
            <li>
              <span>Software Engineering Intern at <a className="terminal-link" href="https://www.bloomberg.com/company/values/tech-at-bloomberg/" target="_blank" rel="noopener noreferrer">Bloomberg</a></span>
              <CompanyLogo name="Bloomberg" whiteBackground />
            </li>
            <li>
              <span>Software Engineering Intern at <a className="terminal-link" href="https://www.invigilo.ai" target="_blank" rel="noopener noreferrer">Invigilo AI</a></span>
              <CompanyLogo name="Invigilo AI" />
            </li>
          </ul>
        </section>

        <section id="projects" className="terminal-section scroll-mt-24">
          <h2 className="command-heading"><span aria-hidden="true">~$</span> grep <span className="text-rose-500">&quot;projects&quot;</span> *</h2>
          <p className="section-intro">A few fun <strong>projects</strong> I&apos;ve worked on:</p>
          <ul className="project-list">
            <li>
              <a href="https://nusmods.com/optimiser" target="_blank" rel="noopener noreferrer">
                <span><strong>NUSMods &lt;&gt; Timetable Optimiser</strong><small>Saves over 40,000 NUS students hours of manual timetable planning every semester</small></span>
                <ArrowUpRight className="project-arrow" size={24} strokeWidth={1} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://tracktern.com" target="_blank" rel="noopener noreferrer">
                <span><strong>TrackTern</strong><small>Platform for tracking internships, used by 800+ users</small></span>
                <ArrowUpRight className="project-arrow" size={24} strokeWidth={1} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/thejus03/portfoliomatic" target="_blank" rel="noopener noreferrer">
                <span><strong>Financial portfolio robo-advisor</strong><small>Optimises stock allocations using Black-Litterman modelling</small></span>
                <ArrowUpRight className="project-arrow" size={24} strokeWidth={1} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/thejus03/chessai" target="_blank" rel="noopener noreferrer">
                <span><strong>AI Chess engine</strong><small>Thinks five moves ahead in less than ten seconds</small></span>
                <ArrowUpRight className="project-arrow" size={24} strokeWidth={1} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/thejus03/Text-Emotion-Neural" target="_blank" rel="noopener noreferrer">
                <span><strong>Text Emotion Recognition</strong><small>My first neural network</small></span>
                <ArrowUpRight className="project-arrow" size={24} strokeWidth={1} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>

        <footer className="terminal-footer">
          <a href="#about" aria-label="Back to top">↑ top</a>
        </footer>
      </main>
    </div>
  );
}
