"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  ChevronRight,
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Plus,
  X,
  Check,
  Upload,
  Zap,
  BarChart2,
  MessageSquare,
  ChevronLeft,
} from "lucide-react";

// ── Mock Data ──────────────────────────────────────────────────────────────────

const JOBS = [
  {
    id: "job-1",
    title: "Senior Backend Engineer",
    company: "Demo Corp",
    department: "Engineering",
    posted: "3 days ago",
    stages: {
      Applied: 847,
      "AI Screened": 124,
      "Voice Call": 38,
      Shortlisted: 12,
    },
  },
  {
    id: "job-2",
    title: "Customer Success Manager",
    company: "Demo Corp",
    department: "Customer Success",
    posted: "1 week ago",
    stages: {
      Applied: 312,
      "AI Screened": 89,
      "Voice Call": 21,
      Shortlisted: 7,
    },
  },
  {
    id: "job-3",
    title: "Product Designer",
    company: "Demo Corp",
    department: "Design",
    posted: "5 days ago",
    stages: {
      Applied: 203,
      "AI Screened": 61,
      "Voice Call": 14,
      Shortlisted: 5,
    },
  },
];

type Candidate = {
  id: string;
  name: string;
  score: number;
  stage: string;
  role: string;
  location: string;
  initials: string;
  coral: boolean;
};

const CANDIDATES: Candidate[] = [
  { id: "c1",  name: "Priya Sharma",    score: 91, stage: "CV Screened",       role: "Backend Engineer", location: "Bangalore",  initials: "PS", coral: false },
  { id: "c2",  name: "Ravi Mehta",      score: 78, stage: "CV Screened",       role: "Backend Engineer", location: "Mumbai",     initials: "RM", coral: true  },
  { id: "c3",  name: "Anika Patel",     score: 85, stage: "CV Screened",       role: "Backend Engineer", location: "Hyderabad",  initials: "AP", coral: false },
  { id: "c4",  name: "James Lee",       score: 88, stage: "AI Video Interview", role: "Backend Engineer", location: "Singapore",  initials: "JL", coral: true  },
  { id: "c5",  name: "Fatima Al-Amin",  score: 93, stage: "AI Voice Call",     role: "Backend Engineer", location: "Dubai",      initials: "FA", coral: false },
  { id: "c6",  name: "Chen Wei",        score: 76, stage: "AI Voice Call",     role: "Backend Engineer", location: "Shanghai",   initials: "CW", coral: true  },
  { id: "c7",  name: "Maya Johnson",    score: 82, stage: "AI Video Interview", role: "Backend Engineer", location: "London",     initials: "MJ", coral: false },
  { id: "c8",  name: "Omar Hassan",     score: 87, stage: "Skill Assessment",  role: "Backend Engineer", location: "Cairo",      initials: "OH", coral: true  },
  { id: "c9",  name: "Anya Ivanova",    score: 90, stage: "Skill Assessment",  role: "Backend Engineer", location: "Berlin",     initials: "AI", coral: false },
  { id: "c10", name: "Lucas Oliveira",  score: 95, stage: "Shortlisted",       role: "Backend Engineer", location: "São Paulo",  initials: "LO", coral: false },
];

const PIPELINE_STAGES = [
  "CV Screened",
  "AI Voice Call",
  "Skill Assessment",
  "AI Video Interview",
  "Shortlisted",
];

const TRANSCRIPT = [
  {
    speaker: "Aria",
    text: "Tell me about a recent technical challenge where you had to make a significant architecture decision.",
  },
  {
    speaker: "Lucas",
    text: "At my previous role, we were hitting serious latency issues at scale — our monolithic API was struggling with 50k concurrent users. I led the migration to a microservices architecture using Kubernetes. The hardest part wasn't the technical implementation, it was getting buy-in from the team who were worried about operational complexity. I built a proof-of-concept that cut p99 latency from 2.1 seconds to 180ms, which made the business case clear.",
  },
  {
    speaker: "Aria",
    text: "How did you handle the team members who remained skeptical even after the POC?",
  },
  {
    speaker: "Lucas",
    text: "I ran weekly knowledge-sharing sessions during the transition. I made sure the team owned parts of the new system rather than just being handed something. Two of the biggest skeptics ended up becoming the strongest advocates once they saw how much easier it was to deploy independently.",
  },
  {
    speaker: "Aria",
    text: "What would you have done differently in hindsight?",
  },
  {
    speaker: "Lucas",
    text: "I would have invested more time upfront defining service boundaries. We had to refactor two services three months in because we drew the boundaries around technical concerns rather than business domains. Domain-driven design thinking would have saved us significant rework.",
  },
];

const SCORE_BREAKDOWN = [
  { label: "Technical depth",  score: 97 },
  { label: "Communication",    score: 94 },
  { label: "Leadership",       score: 91 },
  { label: "Problem-solving",  score: 95 },
  { label: "Culture fit",      score: 92 },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

function scoreBadgeClass(score: number) {
  if (score >= 90) return "bg-green-50 text-green-700";
  if (score >= 80) return "bg-amber-50 text-amber-700";
  return "bg-gray-100 text-gray-600";
}

function avatarGradient(coral: boolean) {
  return coral
    ? "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)"
    : "linear-gradient(135deg, #6B3FA0 0%, #2D1B69 100%)";
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function DemoBanner() {
  return (
    <div className="sticky top-0 z-40 bg-amber-50 border-b border-amber-200 py-2.5 px-4 text-center">
      <span className="text-amber-800 text-xs font-medium">
        🔍 You&apos;re viewing a live product demo — all data is sample data.{" "}
        <Link href="/signup" className="text-amber-700 underline font-semibold">
          Create your real account →
        </Link>
      </span>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50 flex-1">
      <p className="text-muted text-sm mb-1">{label}</p>
      <p className="text-purple-900 font-bold text-2xl">{value}</p>
    </div>
  );
}

function HomeView({
  onViewPipeline,
}: {
  onViewPipeline: (jobId: string) => void;
}) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-1">Dashboard</h1>
        <p className="text-muted">Welcome back, Demo Recruiter</p>
      </div>

      {/* Stats row */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <StatCard label="Active Roles"       value="3" />
        <StatCard label="Total Candidates"   value="1,362" />
        <StatCard label="Avg AI Score"       value="88.2" />
      </div>

      {/* Job cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {JOBS.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-purple-900 font-bold text-lg leading-tight">
                  {job.title}
                </h2>
                <p className="text-muted text-sm mt-0.5">{job.company}</p>
              </div>
              <span className="text-xs font-medium bg-purple-50 text-purple-700 rounded-full px-3 py-1 whitespace-nowrap">
                {job.department}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-muted text-xs">
              <Users size={13} />
              <span>
                {Object.values(job.stages).reduce((a, b) => a + b, 0).toLocaleString()} candidates
              </span>
              <span className="mx-1">·</span>
              <Clock size={13} />
              <span>{job.posted}</span>
            </div>

            {/* Stage pills */}
            <div className="flex flex-wrap gap-1.5">
              {Object.entries(job.stages).map(([stage, count]) => (
                <span
                  key={stage}
                  className="text-xs bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5 font-medium"
                >
                  {stage}: {count}
                </span>
              ))}
            </div>

            <button
              onClick={() => onViewPipeline(job.id)}
              className="mt-auto flex items-center gap-1.5 text-sm font-semibold gradient-text hover:opacity-80 transition-opacity"
            >
              View Pipeline <ChevronRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CandidateCard({
  candidate,
  onSelect,
}: {
  candidate: Candidate;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm border border-purple-50 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ background: avatarGradient(candidate.coral) }}
        >
          {candidate.initials}
        </div>
        <div className="min-w-0">
          <p className="text-purple-900 font-semibold text-sm leading-tight truncate">
            {candidate.name}
          </p>
          <p className="text-muted text-xs flex items-center gap-1">
            <MapPin size={10} />{candidate.location}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-bold rounded-full px-2 py-0.5 ${
            scoreBadgeClass(candidate.score)
          }`}
        >
          {candidate.score}
        </span>
        <button
          onClick={() => onSelect(candidate.id)}
          className="text-xs gradient-text font-semibold flex items-center gap-0.5 hover:opacity-75 transition-opacity"
        >
          View details <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}

function PipelineView({
  jobId,
  onBack,
  onSelectCandidate,
  onAddCandidate,
}: {
  jobId: string;
  onBack: () => void;
  onSelectCandidate: (id: string) => void;
  onAddCandidate: () => void;
}) {
  const job = JOBS.find((j) => j.id === jobId) ?? JOBS[0];

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-muted text-sm mb-6 hover:text-purple-900 transition-colors"
      >
        <ArrowLeft size={15} /> All Jobs
      </button>

      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-purple-900">{job.title}</h1>
          <p className="text-muted mt-0.5">{job.department}</p>
        </div>
        <button
          onClick={onAddCandidate}
          className="gradient-bg text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity"
        >
          <Plus size={16} /> Add Candidate
        </button>
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {PIPELINE_STAGES.map((stage) => {
          const stageCandidates = CANDIDATES.filter((c) => c.stage === stage);
          return (
            <div
              key={stage}
              className="min-w-[220px] bg-gray-50 rounded-2xl p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-purple-900 font-semibold text-sm">
                  {stage}
                </span>
                <span className="text-xs bg-purple-100 text-purple-700 font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {stageCandidates.length}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {stageCandidates.map((c) => (
                  <CandidateCard
                    key={c.id}
                    candidate={c}
                    onSelect={onSelectCandidate}
                  />
                ))}
                {stageCandidates.length === 0 && (
                  <p className="text-muted text-xs text-center py-4">
                    No candidates
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CandidateView({
  candidateId,
  onBack,
  showToast,
}: {
  candidateId: string;
  onBack: () => void;
  showToast: (msg: string) => void;
}) {
  const candidate = CANDIDATES.find((c) => c.id === candidateId) ?? CANDIDATES[9];
  const isLucas = candidate.id === "c10";

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-muted text-sm mb-6 hover:text-purple-900 transition-colors"
      >
        <ArrowLeft size={15} /> Pipeline
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: profile + scores */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Profile card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50">
            <div className="flex flex-col items-center text-center gap-3">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl"
                style={{ background: avatarGradient(candidate.coral) }}
              >
                {candidate.initials}
              </div>
              <div>
                <h1 className="text-purple-900 font-bold text-xl">
                  {candidate.name}
                </h1>
                <p className="text-muted text-sm">{candidate.role}</p>
                <p className="text-muted text-sm flex items-center justify-center gap-1 mt-1">
                  <MapPin size={13} />{candidate.location}
                </p>
              </div>
              <span
                className={`text-sm font-bold rounded-full px-4 py-1.5 ${
                  scoreBadgeClass(candidate.score)
                }`}
              >
                AI Score: {candidate.score}
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 rounded-full px-3 py-1 font-medium">
                {candidate.stage}
              </span>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50">
            <h2 className="text-purple-900 font-bold mb-4 flex items-center gap-2">
              <BarChart2 size={16} /> Score Breakdown
            </h2>
            <div className="flex flex-col gap-3">
              {(isLucas ? SCORE_BREAKDOWN : SCORE_BREAKDOWN.map((s) => ({ ...s, score: Math.max(60, s.score - Math.floor(Math.random() * 20)) }))).map(
                (item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">{item.label}</span>
                      <span className="text-purple-900 font-semibold">
                        {item.score}/100
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-bg"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() =>
                showToast("Feature available in full version")
              }
              className="gradient-bg text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-opacity"
            >
              <Zap size={15} /> Advance to Next Stage
            </button>
            <button
              onClick={() =>
                showToast("Feature available in full version")
              }
              className="bg-white text-red-500 border border-red-200 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
            >
              <X size={15} /> Reject
            </button>
          </div>
        </div>

        {/* Right column: transcript */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50">
            <h2 className="text-purple-900 font-bold mb-6 flex items-center gap-2">
              <MessageSquare size={16} /> AI Interview Transcript
            </h2>

            {isLucas ? (
              <div className="flex flex-col gap-5">
                {TRANSCRIPT.map((line, i) => (
                  <div key={i}>
                    {line.speaker === "Aria" ? (
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{
                              background:
                                "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)",
                            }}
                          >
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold gradient-text mb-1">
                            Aria
                          </p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3 ml-8">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1"
                          style={{
                            background: avatarGradient(candidate.coral),
                          }}
                        >
                          <span className="text-white text-xs font-bold">
                            {candidate.initials[0]}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-purple-900 mb-1">
                            {candidate.name}
                          </p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted">
                <MessageSquare size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-medium">Transcript available after AI Voice Call stage</p>
                <p className="text-xs mt-1">This candidate has not completed a voice interview yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AddCandidateModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-purple-900 font-bold text-lg">Add Candidate</h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-purple-900 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jane Smith"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. jane@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition"
            />
          </div>

          {/* Upload zone */}
          <div className="border-2 border-dashed border-purple-200 rounded-xl p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
            <Upload size={28} className="mx-auto mb-2 text-purple-300" />
            <p className="text-sm font-medium text-purple-900">
              Drag &amp; drop CV here or click to browse
            </p>
            <p className="text-xs text-muted mt-1">PDF, DOCX up to 10MB</p>
          </div>

          <button
            onClick={onSubmit}
            className="gradient-bg text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-opacity"
          >
            <Upload size={15} /> Upload &amp; Start Screening
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [view, setView] = useState<"home" | "pipeline" | "candidate">("home");
  const [selectedJob, setSelectedJob] = useState<string>("job-1");
  const [addModal, setAddModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string>("c10");
  const [toast, setToast] = useState<string | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function handleViewPipeline(jobId: string) {
    setSelectedJob(jobId);
    setView("pipeline");
  }

  function handleSelectCandidate(id: string) {
    setSelectedCandidate(id);
    setView("candidate");
  }

  function handleModalSubmit() {
    setAddModal(false);
    showToast("Candidate added — Aria will begin screening shortly");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DemoBanner />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === "home" && (
          <HomeView onViewPipeline={handleViewPipeline} />
        )}
        {view === "pipeline" && (
          <PipelineView
            jobId={selectedJob}
            onBack={() => setView("home")}
            onSelectCandidate={handleSelectCandidate}
            onAddCandidate={() => setAddModal(true)}
          />
        )}
        {view === "candidate" && (
          <CandidateView
            candidateId={selectedCandidate}
            onBack={() => setView("pipeline")}
            showToast={showToast}
          />
        )}
      </div>

      {/* Add Candidate Modal */}
      {addModal && (
        <AddCandidateModal
          onClose={() => setAddModal(false)}
          onSubmit={handleModalSubmit}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 bg-purple-900 text-white px-4 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2">
          <Check size={16} className="text-green-400" />
          {toast}
        </div>
      )}
    </div>
  );
}
