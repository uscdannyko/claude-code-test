'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MapPin, Users, Timer, Star, ChevronDown } from 'lucide-react'

type Event = {
  id: number
  name: string
  date: string
  time: string
  location: string
  pace: string
  spots: number
}

const EVENTS: Event[] = [
  {
    id: 1,
    name: 'Dawn Patrol 5K',
    date: 'SAT, MAY 3',
    time: '6:00 AM',
    location: 'Griffith Park, LA',
    pace: '8–12 min/mi',
    spots: 12,
  },
  {
    id: 2,
    name: 'Urban Night Run',
    date: 'FRI, MAY 9',
    time: '8:00 PM',
    location: 'Downtown LA',
    pace: '7–10 min/mi',
    spots: 4,
  },
  {
    id: 3,
    name: 'Trail Sunrise 10K',
    date: 'SUN, MAY 18',
    time: '5:30 AM',
    location: 'Runyon Canyon',
    pace: 'All paces',
    spots: 23,
  },
]

const STATS = [
  { value: '2,400+', label: 'Active Runners' },
  { value: '180', label: 'Events Per Year' },
  { value: '12', label: 'Cities' },
  { value: '847K', label: 'Miles Logged' },
]

const STEPS = [
  { num: '01', title: 'Pick Your Run', desc: 'Browse upcoming events by pace, distance, and location. Find your fit.' },
  { num: '02', title: 'Show Up', desc: 'No registration fee. No gear required. Just lace up and arrive.' },
  { num: '03', title: 'Keep Going', desc: 'Track your runs, earn badges, and grow with your crew.' },
]

const TESTIMONIALS = [
  {
    quote: "I moved to LA not knowing a single person. Three months later I have a crew I run with every week.",
    author: "Maya T.",
    role: "Member since 2023",
  },
  {
    quote: "Finally broke the 8-minute mile with people pushing me. The community is everything.",
    author: "James R.",
    role: "Member since 2022",
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

function FadeIn({
  children,
  className,
  id,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function EventCard({ event }: { event: Event }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE }}
      className="bg-[#09090B] p-8 group cursor-pointer hover:bg-white/[0.03] transition-colors duration-300 space-y-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs tracking-widest uppercase text-[#E85D2C] mb-2">{event.date}</p>
          <h3 className="text-xl font-normal font-heading">{event.name}</h3>
        </div>
        <ArrowRight
          size={16}
          className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200 mt-1 shrink-0"
        />
      </div>
      <div className="space-y-2 text-white/50 text-sm">
        <div className="flex items-center gap-2">
          <Timer size={12} />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={12} />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={12} />
          <span>{event.pace} · {event.spots} spots left</span>
        </div>
      </div>
      <button className="w-full min-h-[44px] border border-white/15 text-xs tracking-widest uppercase hover:bg-white/5 transition-colors duration-200 cursor-pointer">
        Register Free
      </button>
    </motion.div>
  )
}

export function RunClubLanding() {
  return (
    <div className="bg-[#09090B] text-[#FAFAF9] min-h-screen font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 border-b border-white/5 bg-[#09090B]/90 backdrop-blur-sm">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase font-heading">
          PACE
        </span>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-white/50">
          <a href="#events" className="hover:text-white transition-colors duration-200 cursor-pointer">Events</a>
          <a href="#about" className="hover:text-white transition-colors duration-200 cursor-pointer">About</a>
          <a href="#community" className="hover:text-white transition-colors duration-200 cursor-pointer">Community</a>
        </div>
        <button className="min-h-[44px] px-5 text-xs tracking-widest uppercase bg-[#E85D2C] text-white hover:bg-[#d04d1e] transition-colors duration-200 cursor-pointer">
          Join Free
        </button>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col justify-end min-h-screen px-6 md:px-12 pb-20 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-5xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }}
            className="text-xs tracking-[0.3em] uppercase text-[#E85D2C] mb-6"
          >
            Los Angeles Run Club
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } } }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-normal leading-[0.9] tracking-tight mb-8 font-heading"
          >
            Run
            <br />
            Together.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }}
            className="text-base md:text-lg text-white/50 max-w-md mb-10 leading-relaxed"
          >
            Free community runs across LA. Every pace welcome. No membership, no ego — just miles with people who show up.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 bg-[#E85D2C] text-white text-xs tracking-widest uppercase hover:bg-[#d04d1e] transition-colors duration-200 cursor-pointer"
            >
              Find a Run <ArrowRight size={14} />
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center min-h-[48px] px-8 border border-white/20 text-xs tracking-widest uppercase hover:border-white/50 transition-colors duration-200 cursor-pointer"
            >
              View Calendar
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-2 text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-[10px] tracking-widest uppercase writing-mode-vertical">Scroll</span>
          <ChevronDown size={14} />
        </motion.div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-white/10 py-5 overflow-hidden">
        <div className="flex whitespace-nowrap [animation:marquee_20s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[10px] tracking-[0.4em] uppercase text-white/20 px-8">
              Community &middot; Pace &middot; Distance &middot; Community &middot; Pace &middot; Distance &middot; Community &middot; Pace &middot; Distance &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="px-6 md:px-12 py-24 md:py-36 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p
              className="text-[clamp(5rem,14vw,11rem)] font-normal leading-none text-[#E85D2C]/15 select-none font-heading"
            >
              2K+
            </p>
            <p className="text-[clamp(2rem,5vw,4rem)] font-normal leading-tight -mt-4 font-heading">
              runners.<br />one city.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="space-y-6 text-white/60 leading-relaxed">
            <p className="text-lg text-white/90">
              PACE was built on a simple idea: running is better together.
            </p>
            <p>
              We organize free group runs across Los Angeles — dawn patrols through Griffith Park, night runs through DTLA, trail sessions in the canyons. All paces. All levels. All welcome.
            </p>
            <p>No membership fee. No app required. Just show up.</p>
            <a
              href="#events"
              className="inline-flex items-center gap-2 text-[#E85D2C] text-xs tracking-widest uppercase hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              See upcoming runs <ArrowRight size={12} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="px-6 md:px-12 py-16 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-normal font-heading">Upcoming Runs</h2>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              All events <ArrowRight size={12} />
            </a>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 py-24 md:py-36 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-16">How it works</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1} className="space-y-4">
                <p className="text-6xl font-normal text-white/8 font-heading">{step.num}</p>
                <h3 className="text-lg font-medium tracking-wide">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-4xl md:text-5xl font-normal mb-2 font-heading">{stat.value}</p>
              <p className="text-[10px] tracking-widest uppercase text-white/40">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="community" className="px-6 md:px-12 py-24 md:py-36 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-16">Community</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="border border-white/10 p-8 space-y-6 hover:border-white/20 transition-colors duration-300">
                <Star size={14} className="text-[#E85D2C]" />
                <blockquote className="text-lg leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-[10px] text-white/40 tracking-wider uppercase mt-1">{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 py-28 md:py-40 bg-[#E85D2C]">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-normal leading-tight mb-6 text-white font-heading">
            Your next run<br />starts here.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Join thousands of LA runners. Free to join, free to run.
          </p>
          <button className="inline-flex items-center gap-2 min-h-[52px] px-10 bg-white text-[#E85D2C] text-xs font-semibold tracking-widest uppercase hover:bg-white/90 transition-colors duration-200 cursor-pointer mx-auto">
            Join PACE Free <ArrowRight size={14} />
          </button>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-[10px] tracking-widest uppercase">
          <span className="font-heading text-white/60 text-sm tracking-[0.2em]">PACE</span>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Instagram</a>
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Strava</a>
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Contact</a>
          </div>
          <span>© 2026 PACE Run Club</span>
        </div>
      </footer>
    </div>
  )
}
