"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Mail,
  Menu,
  Moon,
  Pause,
  Play,
  RotateCcw,
  Rocket,
  Send,
  Sparkles,
  Sun,
  Workflow,
  X,
} from "lucide-react";
import { PortfolioProject, profile, projects, skills, stats } from "@/lib/portfolio-data";

const navItems = ["Overview", "Social", "Projects", "Skills", "Timeline", "Analytics", "Contact"];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 48;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / totalFrames));
      if (frame >= totalFrames) window.clearInterval(timer);
    }, 22);
    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-200">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}

function GlassCard({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-cyan-950/30 backdrop-blur-xl",
        "transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.075] hover:shadow-cyan-500/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

function DemoVideoPreview({ project }: { project: PortfolioProject }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const durationMs = 9000;

  useEffect(() => {
    if (!isPlaying) return;

    const startedAt = Date.now() - (progress / 100) * durationMs;
    const timer = window.setInterval(() => {
      const nextProgress = Math.min(((Date.now() - startedAt) / durationMs) * 100, 100);
      setProgress(nextProgress);
      setActiveScene(Math.min(Math.floor((nextProgress / 100) * project.demoScenes.length), project.demoScenes.length - 1));

      if (nextProgress >= 100) {
        setIsPlaying(false);
        window.clearInterval(timer);
      }
    }, 120);

    return () => window.clearInterval(timer);
  }, [durationMs, isPlaying, progress, project.demoScenes.length]);

  const togglePlayback = () => {
    if (progress >= 100) {
      setProgress(0);
      setActiveScene(0);
    }
    setIsPlaying((value) => !value);
  };

  const restartPlayback = () => {
    setProgress(0);
    setActiveScene(0);
    setIsPlaying(true);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <p className="text-xs font-medium text-cyan-200">
          {isPlaying ? "Playing generated demo" : progress >= 100 ? "Demo complete" : "Ready to play"}
        </p>
      </div>
      <div className="relative aspect-video bg-[radial-gradient(circle_at_24%_18%,rgba(34,211,238,0.28),transparent_28%),linear-gradient(135deg,rgba(15,23,42,1),rgba(49,46,129,0.82),rgba(2,6,23,1))] p-4">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        <motion.div
          className="relative h-full rounded-xl border border-cyan-300/20 bg-white/[0.06] p-4 backdrop-blur"
          initial={{ opacity: 0.7, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-cyan-200">{project.type} Project Demo</p>
              <h5 className="mt-1 text-lg font-semibold text-white">{project.title}</h5>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={togglePlayback}
                className="grid h-12 w-12 place-items-center rounded-full bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/30 transition hover:scale-105"
                aria-label={isPlaying ? "Pause demo video preview" : "Play demo video preview"}
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={restartPlayback}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-cyan-100 transition hover:scale-105 hover:border-cyan-300/40"
                aria-label="Restart demo video preview"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            {project.demoScenes.map((scene, index) => (
              <motion.div
                key={scene}
                className={cx(
                  "rounded-lg border p-2.5 transition",
                  index === activeScene
                    ? "border-cyan-300/50 bg-cyan-300/15 shadow-lg shadow-cyan-300/10"
                    : "border-white/10 bg-slate-950/70",
                )}
                initial={{ x: -12, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="flex items-start gap-2">
                  <span
                    className={cx(
                      "grid h-5 w-5 flex-none place-items-center rounded-full text-xs",
                      index === activeScene ? "bg-cyan-300 text-slate-950" : "bg-cyan-300/15 text-cyan-200",
                    )}
                  >
                    {index + 1}
                  </span>
                  <p className="text-xs leading-5 text-slate-200">{scene}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="absolute bottom-3 right-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-cyan-100">
            {Math.round(progress)}%
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={onClose}
        >
          <motion.div
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-cyan-300/20 bg-slate-950/95 shadow-2xl shadow-cyan-500/20"
            initial={{ y: 28, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 28, scale: 0.96, opacity: 0 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur-xl sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase text-cyan-300">
                  {project.type} Project
                </p>
                <h3 id="project-modal-title" className="text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close project details"
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">
                <GlassCard className="p-6">
                  <h4 className="mb-3 text-lg font-semibold text-white">Full Project Explanation</h4>
                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="mb-4 text-lg font-semibold text-white">Architecture Diagram</h4>
                  <div className="grid gap-3 sm:grid-cols-4">
                    {["Input", "Planner", "Tools", "Response"].map((item, index) => (
                      <div key={item} className="relative rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-center">
                        <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-cyan-300/15 text-cyan-200">
                          {index + 1}
                        </div>
                        <p className="text-sm font-medium text-white">{item}</p>
                        {index < 3 ? (
                          <ChevronRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-300 sm:block" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="mb-4 text-lg font-semibold text-white">Screenshots</h4>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {["Responsive UI", "Feature Flow", "Data Panel"].map((label) => (
                      <div key={label} className="aspect-video rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_35%),linear-gradient(135deg,rgba(88,28,135,0.55),rgba(2,6,23,0.8))] p-4">
                        <div className="h-2 w-16 rounded-full bg-cyan-300/70" />
                        <div className="mt-8 h-2 w-3/4 rounded-full bg-white/20" />
                        <div className="mt-3 h-2 w-1/2 rounded-full bg-white/10" />
                        <p className="mt-7 text-xs font-medium text-slate-200">{label}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>

              <div className="space-y-6">
                <GlassCard className="p-6">
                  <h4 className="mb-4 text-lg font-semibold text-white">Demo Video</h4>
                  <DemoVideoPreview key={project.id} project={project} />
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Use this scene list to record a 60-90 second walkthrough, then replace the placeholder YouTube URL in the project data.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="mb-4 text-lg font-semibold text-white">Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="mb-4 text-lg font-semibold text-white">Links</h4>
                  <div className="grid gap-3">
                    <a className="dashboard-button justify-center" href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Code2 className="h-4 w-4" />
                      GitHub Repository
                    </a>
                    <a className="dashboard-button-secondary justify-center" href={project.vercelUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Vercel Deployment
                    </a>
                  </div>
                </GlassCard>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  const beginnerProjects = useMemo(() => projects.filter((project) => project.type === "Beginner").length, []);
  const intermediateProjects = useMemo(() => projects.filter((project) => project.type === "Intermediate").length, []);
  const advancedProjects = useMemo(() => projects.filter((project) => project.type === "Advanced").length, []);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", lightMode);
  }, [lightMode]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400" style={{ scaleX }} />
      <div className="ai-grid fixed inset-0 pointer-events-none" />
      <div className="particle-field fixed inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </div>

      <aside className="fixed left-5 top-5 z-40 hidden h-[calc(100vh-40px)] w-64 rounded-3xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-2xl lg:block">
        <a href="#overview" className="mb-8 flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-fuchsia-400 text-black">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Projects Portfolio</p>
            <p className="text-xs text-cyan-200">Full Stack Dashboard</p>
          </div>
        </a>
        <nav className="space-y-2" aria-label="Dashboard navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {item}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10 p-4">
          <p className="text-xs uppercase text-fuchsia-200">System</p>
          <p className="mt-2 text-sm text-white">6 projects complete. Portfolio ready for recruiter review.</p>
        </div>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-2xl lg:left-72">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#overview" className="flex items-center gap-2 font-semibold text-white">
            <BrainCircuit className="h-5 w-5 text-cyan-300" />
            {profile.name}
          </a>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLightMode((value) => !value)} className="icon-button" aria-label="Toggle dark and light mode">
              {lightMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button type="button" onClick={() => setMobileNavOpen((value) => !value)} className="icon-button lg:hidden" aria-label="Open mobile navigation">
              {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileNavOpen ? (
            <motion.nav
              className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-slate-950 p-3 lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileNavOpen(false)} className="rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
                  {item}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <div className="relative z-10 lg:pl-72">
        <section id="overview" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <Rocket className="h-4 w-4" />
              Full Stack Developer Projects Portfolio
            </div>
            <h1 className="max-w-5xl text-4xl font-semibold text-white sm:text-6xl lg:text-7xl">
              {profile.name}
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                {profile.role}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="dashboard-button" href={profile.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a className="dashboard-button-secondary" href="#projects">
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-7 flex gap-3">
              {[
                { href: profile.linkedInUrl, label: "LinkedIn", icon: BriefcaseBusiness },
                { href: profile.githubUrl, label: "GitHub", icon: Code2 },
                { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
              ].map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="icon-button" target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="hologram mx-auto max-w-xl rounded-[2rem] border border-cyan-300/20 bg-white/[0.055] p-5 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-cyan-200">Project Console</p>
                    <p className="mt-1 text-lg font-semibold text-white">Portfolio Matrix</p>
                  </div>
                  <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                    Online
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                      <p className="text-xs text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-white">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Deployment Readiness</span>
                    <span className="text-cyan-200">94%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400" initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ duration: 1.1, delay: 0.4 }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="social" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Network" title="Social Links" description="Clickable profile cards with placeholder URLs that can be replaced with your final links." />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "LinkedIn Profile", value: "Connect professionally", href: profile.linkedInUrl, icon: BriefcaseBusiness },
              { label: "GitHub Profile", value: "Review repositories", href: profile.githubUrl, icon: Code2 },
              { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
              { label: "Portfolio Link", value: "Live portfolio site", href: profile.portfolioUrl, icon: ExternalLink },
            ].map((item, index) => (
              <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/10" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                <item.icon className="mb-6 h-6 w-6 text-cyan-300" />
                <p className="font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-slate-400">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Build Log" title="Full Stack Projects Dashboard" description={`${beginnerProjects} beginner, ${intermediateProjects} intermediate, and ${advancedProjects} advanced projects presented as recruiter-ready product cards.`} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} className="group flex min-h-[420px] flex-col rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/10" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-400/20 text-cyan-200">
                    {project.type === "Advanced" ? <Rocket className="h-6 w-6" /> : project.type === "Intermediate" ? <Workflow className="h-6 w-6" /> : <Code2 className="h-6 w-6" />}
                  </div>
                  <span className={cx("rounded-full px-3 py-1 text-xs font-semibold", project.type === "Beginner" && "bg-cyan-300/10 text-cyan-200", project.type === "Intermediate" && "bg-blue-300/10 text-blue-200", project.type === "Advanced" && "bg-fuchsia-300/10 text-fuchsia-200")}>
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-cyan-200">{project.tagline}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.shortDescription}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2">
                  {project.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto grid gap-2 pt-6">
                  <button type="button" onClick={() => setActiveProject(project)} className="dashboard-button justify-center">
                    View Details
                  </button>
                  <div className="grid grid-cols-3 gap-2">
                    <a className="mini-link" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                      <Code2 className="h-4 w-4" />
                    </a>
                    <a className="mini-link" href={project.vercelUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button type="button" className="mini-link" onClick={() => setActiveProject(project)} aria-label={`${project.title} video demo`}>
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Stack" title="AI Skills Matrix" description="Animated capability bars for the core technologies used across the internship tasks." />
          <GlassCard className="grid gap-5 p-5 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-cyan-200">{skill.level}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9 }} />
                </div>
              </div>
            ))}
          </GlassCard>
        </section>

        <section id="timeline" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Progress" title="Project Journey Timeline" description="Six completed full-stack milestones from beginner applications to advanced SaaS and AI-integrated products." />
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-fuchsia-400 sm:left-1/2" />
            {projects.map((project, index) => (
              <motion.div key={project.title} className={cx("relative mb-6 flex sm:w-1/2", index % 2 === 0 ? "sm:pr-8" : "sm:ml-auto sm:pl-8")} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className={cx("absolute left-3 top-6 h-4 w-4 rounded-full border-2 border-cyan-200 bg-slate-950 sm:left-auto", index % 2 === 0 ? "sm:right-[-8px]" : "sm:left-[-8px]")} />
                <GlassCard className="ml-12 w-full p-5 sm:ml-0">
                  <p className="text-xs uppercase text-cyan-200">Project {project.id} completed</p>
                  <h3 className="mt-2 font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{project.tagline}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="analytics" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Metrics" title="Analytics Dashboard UI" description="Startup-style widgets for project progress, GitHub repositories, deployments, and feature coverage." />
          <div className="grid gap-5 lg:grid-cols-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="p-5">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <GlassCard className="p-5">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Project Delivery Performance</h3>
                <Workflow className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="flex h-64 items-end gap-3">
                {[72, 88, 64, 94, 82, 97, 90, 86].map((height, index) => (
                  <motion.div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-fuchsia-400" initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.8 }} />
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-5">
              <div className="mb-5 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold text-white">GitHub Stats Placeholder</h3>
              </div>
              <div className="space-y-4">
                {["Repository Activity", "Contribution Graph", "Code Quality", "Deployment Health"].map((item, index) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{item}</span>
                      <span className="text-cyan-200">{86 + index * 3}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-cyan-300" style={{ width: `${86 + index * 3}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Contact" title="Let's Build Full Stack Products" description="A clean contact surface for recruiters, collaborators, and project reviewers." />
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white">Contact Info</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Replace the placeholder links with your active profiles before deployment.</p>
              <p className="mt-4 text-sm text-slate-300">Email: {profile.email}</p>
              <p className="mt-2 text-sm text-slate-300">Phone: {profile.phone}</p>
              <div className="mt-6 grid gap-3">
                <a className="dashboard-button-secondary justify-center" href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
                <a className="dashboard-button justify-center" href={profile.whatsappUrl} target="_blank" rel="noreferrer">
                  <Send className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <form className="grid gap-4">
                <label className="grid gap-2 text-sm text-slate-300">
                  Name
                  <input className="form-field" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Email
                  <input className="form-field" type="email" placeholder="you@example.com" />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Message
                  <textarea className="form-field min-h-32 resize-y" placeholder="Tell me about the opportunity or project." />
                </label>
                <button className="dashboard-button justify-center" type="submit">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 {profile.name}. All rights reserved.</p>
            <p>Built with Next.js, Tailwind CSS, Framer Motion, and shadcn-style components.</p>
            <div className="flex gap-3">
              <a href={profile.linkedInUrl} aria-label="LinkedIn" className="text-slate-300 hover:text-cyan-200"><BriefcaseBusiness className="h-4 w-4" /></a>
              <a href={profile.githubUrl} aria-label="GitHub" className="text-slate-300 hover:text-cyan-200"><Code2 className="h-4 w-4" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-300 hover:text-cyan-200"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </footer>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  );
}
