import Image from "next/image";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";
import ScrollProgress from "../components/scroll-progress";
import ThemeToggle from "../components/theme-toggle";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const ImpactCarousel = dynamic(() => import("../components/impact-carousel"), { ssr: true });
const CareerJourney = dynamic(() => import("../components/career-journey"), { ssr: true });

const highlights = [
  {
    company: "WHYPHY",
    value: "MongoDB Migration",
    label: "Lower cost + better scalability",
    detail: "Moved from Realm to MongoDB to improve scalability, performance, and platform cost.",
  },
  {
    company: "TCS",
    value: "ADAS Automation",
    label: "End-to-end test execution",
    detail: "Built Python + ControlDesk automation for faster ADAS validation and reporting.",
  },
  {
    company: "VideoSDK",
    value: "20%",
    label: "Lower stream encoding cost",
    detail: "Built a cloud encoding service with adaptive HLS streams at lower market pricing.",
  },
  {
    company: "VideoSDK",
    value: "3s",
    label: "Low-latency live stream",
    detail: "Delivered multi-destination RTMP restreaming with near real-time delivery.",
  },
  {
    company: "VideoSDK",
    value: "3 Sprints",
    label: "Production autoscaler delivery",
    detail: "Shipped multi-region autoscaling in 3 sprints to handle peak traffic reliably.",
  },
];

const focusAreas = [
  {
    title: "Product Engineering",
    text: "From architecture to release, I build software that balances user value with clean implementation.",
  },
  {
    title: "Backend & Automation",
    text: "I design APIs, workflows, and test automation that reduce manual effort and improve reliability.",
  },
  {
    title: "Performance & Scale",
    text: "I optimize systems for cost, latency, and growth across cloud-native and real-time workloads.",
  },
];

const journey = [
  {
    company: "WHYPHY TECHNOLOGIES",
    role: "Full-Stack Developer",
    period: "May 2024 - Aug 2025",
    summary:
      "Led POS SaaS development, shipped payment integration, and built operations/reporting tools for restaurants and investors.",
    stack: ["Next.js", "Node.js", "MongoDB", "Role-based systems"],
    details: [
      "Led architecture and delivery of a POS SaaS platform to streamline restaurant operations end-to-end.",
      "Migrated core data from Realm to MongoDB, reducing cost while improving performance and scalability.",
      "Integrated Dejavoo payment processing for secure and seamless customer/staff transaction flows.",
      "Built role-based back-office dashboard, visual floor planner, and online ordering workflow for operations efficiency.",
      "Developed a Loan Bridging CRM with admin/investor panels, secure access control, and dynamic case ledger automation.",
      "Implemented a custom reporting engine for unlimited metric-based reports and stronger investor visibility.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "System Engineer",
    period: "May 2022 - Feb 2024",
    summary:
      "Built testing automation for ADAS/HIL workflows and mentored teams to improve SIL/HIL quality and delivery speed.",
    stack: ["Python", "Node.js", "Automation", "HIL/SIL Testing"],
    details: [
      "Worked in the AD2 HIL subdivision of the ADAS team on driver assistance validation workflows.",
      "Built an end-to-end Python test runner integrated with ControlDesk and VB-based result processing.",
      "Developed coordinated Node.js and Python scripts that reduced manual work and improved process sync.",
      "Mentored teammates on SIL/HIL testing practices and optimization using industry-standard tooling.",
      "Cleared internal Bar Raiser exam (TCS Elevate Wings 1) in first attempt with distinction among top qualifiers.",
    ],
  },
  {
    company: "VideoSDK by Zujo Tech Pvt Ltd",
    role: "Software Engineer",
    period: "Jan 2021 - Mar 2022",
    summary:
      "Built real-time video products, including cloud encoding, low-latency restreaming, and infrastructure tooling.",
    stack: ["ffmpeg", "Streaming", "Autoscaling", "Observability"],
    details: [
      "Built a cost-effective cloud encoding service with adaptive HLS streaming and better market competitiveness.",
      "Delivered a low-latency livestream service for concurrent RTMP restreaming to YouTube, Facebook, and LinkedIn.",
      "Developed internal DevEx monitoring tooling to improve incident awareness for on-call engineers.",
      "Worked on a multi-region autoscaler that scaled by active demand to balance availability and utilization.",
      "Shipped production-ready scaling capabilities in 3 sprints for peak traffic reliability.",
    ],
  },
];

const skills = [
  "Node.js",
  "Python",
  "Next.js",
  "React.js",
  "MongoDB",
  "Redis",
  "AWS EC2",
  "AWS S3",
  "Docker",
  "Socket.IO",
  "Nginx",
  "Kibana",
  "ffmpeg",
  "Jest",
  "Playwright",
  "Material UI",
];

const education = [
  {
    school: "Rowan University",
    degree: "Master of Science in Computer Science",
    period: "Aug 2025 - Present",
    location: "Glassboro, NJ",
  },
  {
    school: "Uka Tarsadia University",
    degree: "Bachelor of Information Technology (BTech)",
    period: "2017 - 2021",
    location: "Bardoli, Gujarat",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/88 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#020617]/85">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            Milan Patel
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#impact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">
              Impact
            </a>
            <a href="#journey" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">
              Journey
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/milan48/"
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center rounded-full border border-slate-300/90 bg-white/80 px-3.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800 sm:inline-flex"
            >
              LinkedIn
            </a>
            <a
              href="/Milan-Patel-Resume.pdf"
              download
              className="hidden h-9 items-center rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-3.5 text-xs font-semibold text-white shadow-[0_10px_24px_-14px_rgba(14,165,233,0.9)] transition hover:-translate-y-0.5 hover:from-sky-500 hover:to-cyan-400 dark:bg-none dark:bg-sky-700 dark:shadow-none dark:hover:bg-sky-600 md:inline-flex"
            >
              Download Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
        <ScrollProgress />
      </header>

      <main id="top" className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-12 sm:px-6 lg:gap-16 lg:px-8 lg:py-16">
        <section className="animate-fade-up relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-sky-50/75 to-indigo-50/70 p-6 shadow-sm dark:border-slate-800 dark:bg-none dark:bg-[#020925] lg:p-10">
          <div className="animate-float pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl dark:bg-violet-700/20" />
          <div className="animate-float pointer-events-none absolute -right-20 -top-12 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl [animation-delay:350ms] dark:bg-indigo-700/20" />
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:34px_34px] dark:opacity-25" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_48%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_36%)] dark:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.2),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_40%)]" />

          <div className="relative grid items-start gap-10 lg:grid-cols-[1.35fr_1fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="inline-flex items-center rounded-full border border-sky-300/70 bg-sky-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-800 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200">
                  Full-Stack Developer
                </p>
                <p className="inline-flex items-center rounded-full border border-emerald-300/70 bg-emerald-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200">
                  Open to opportunities
                </p>
              </div>

              <h1
                className={`${displayFont.className} max-w-3xl text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl`}
              >
                Full-stack developer building reliable SaaS and automation products.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                I turn complex product ideas into fast, production-ready software.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:mp890520@gmail.com"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(14,165,233,0.9)] transition hover:-translate-y-0.5 hover:from-sky-500 hover:to-cyan-400 dark:bg-none dark:bg-sky-700 dark:shadow-none dark:hover:bg-sky-600"
                >
                  Start a conversation
                </a>
                <a
                  href="/Milan-Patel-Resume.pdf"
                  download
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white/85 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/milan48/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white/85 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="card-soft rounded-xl border border-slate-200/90 bg-white/92 p-3 dark:border-slate-700 dark:bg-slate-800/65">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">5+ Years</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Industry Experience</p>
                </div>
                <div className="card-soft rounded-xl border border-slate-200/90 bg-white/92 p-3 dark:border-slate-700 dark:bg-slate-800/65">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">SaaS + Realtime</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Systems I Build</p>
                </div>
                <div className="card-soft rounded-xl border border-slate-200/90 bg-white/92 p-3 dark:border-slate-700 dark:bg-slate-800/65">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">US + India</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Global Collaboration</p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[360px] space-y-4">
              <div className="card-soft relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-2 dark:border-slate-700 dark:bg-slate-900/70">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-sky-100/70 to-transparent dark:from-sky-900/30" />
                <Image
                  src="/profile-photo.png"
                  alt="Milan Patel profile photo"
                  width={720}
                  height={900}
                  className="relative h-auto w-full rounded-xl object-cover"
                  priority
                />
              </div>
              <div className="card-soft rounded-2xl border border-slate-200/90 bg-white/95 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Current Focus</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  M.S. in Computer Science at Rowan University while building production-ready software solutions.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-300/80 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    Backend Architecture
                  </span>
                  <span className="rounded-full border border-slate-300/80 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    Automation
                  </span>
                  <span className="rounded-full border border-slate-300/80 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    Full-Stack Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fade-up grid gap-4 md:grid-cols-3 [animation-delay:80ms]">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className="card-soft group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-100/70 opacity-60 blur-2xl transition group-hover:opacity-90 dark:bg-sky-900/30" />
              <div className="absolute left-6 top-0 h-0.5 w-14 -translate-y-px rounded-full bg-sky-500/80 dark:bg-sky-400/80" />
              <div className="relative">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300/80 bg-slate-100 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  0{index + 1}
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="impact" className="scroll-mt-24 animate-fade-up space-y-6 [animation-delay:120ms]">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Selected Impact</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Highlights across streaming infrastructure, data platform modernization, and enterprise automation.
          </p>
          <ImpactCarousel items={highlights} />
        </section>

        <section id="journey" className="scroll-mt-24 animate-fade-up space-y-6 [animation-delay:160ms]">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Career Journey</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Click any card to view detailed achievements from each role.
          </p>
          <CareerJourney items={journey} />
        </section>

        <section className="animate-fade-up grid gap-6 lg:grid-cols-2 [animation-delay:200ms]">
          <article className="card-soft relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-100/80 blur-2xl dark:bg-sky-900/30" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Tech Stack</h2>
                <span className="rounded-full border border-slate-300/80 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Tools I use
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Technologies I use to build reliable full-stack and cloud-enabled systems.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-slate-300/80 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {value}
                </span>
              ))}
            </div>
          </article>

          <article className="card-soft relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-indigo-100/70 blur-2xl dark:bg-indigo-900/20" />
            <h2 className="relative text-2xl font-semibold text-slate-900 dark:text-slate-100">Education</h2>
            <div className="relative mt-6 space-y-4">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="card-soft relative rounded-xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-700/80 dark:bg-slate-900/60"
                >
                  <div className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-sky-500/80 dark:bg-sky-400/80" />
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.school}</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{item.degree}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {item.location} | {item.period}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="contact" className="scroll-mt-24 animate-fade-up relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 [animation-delay:240ms] dark:border-slate-800 dark:bg-slate-900/80">
          <div className="pointer-events-none absolute -right-14 top-0 h-36 w-36 rounded-full bg-sky-100/80 blur-3xl dark:bg-sky-900/30" />
          <div className="relative grid gap-5 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Let&apos;s Build Something Great</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                I am open to software engineering opportunities where I can contribute across backend systems, product
                execution, and frontend delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:mp890520@gmail.com"
                className="inline-flex items-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-800"
              >
                mp890520@gmail.com
              </a>
              <a
                href="tel:+13027198865"
                className="inline-flex items-center rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                +1 (302) 719-8865
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
