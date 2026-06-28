"use client"
import { useState, useRef } from "react";
import {
  LayoutDashboard,
  Bot,
  Megaphone,
  Phone,
  Download,
  Users,
  Settings,
  Plus,
  X,
  Upload,
  Search,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";

/* ----------------------------------------------------------------------- */
/* Mock data                                                                */
/* ----------------------------------------------------------------------- */

const initialAgents = [
  { id: "agt_1", name: "Charlie", status: "Active", campaigns: 0, callsMade: 0, created: "6/16/2026" },
];

const FIELD_TYPES = ["Text", "Number", "Boolean", "Date"];

/* ----------------------------------------------------------------------- */
/* Reusable bits                                                           */
/* ----------------------------------------------------------------------- */

function SectionCard({ step, title, description, children }: {
  step?: number | string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-6">
      <h2 className="text-base font-semibold text-white">
        {step ? `${step}. ` : ""}
        {title}
      </h2>
      {description ? <p className="mt-1 text-sm text-white/50">{description}</p> : null}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active, onClick }: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
        active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white/90"
      }`}
    >
      <Icon size={17} className={active ? "text-white" : "text-white/50"} />
      {label}
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-emerald-500/10 text-emerald-400",
    Paused: "bg-amber-500/10 text-amber-400",
    Draft: "bg-white/10 text-white/50",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

/* ----------------------------------------------------------------------- */
/* Sidebar                                                                  */
/* ----------------------------------------------------------------------- */

function Sidebar({ active, onNavigate }: { active: string; onNavigate: (key: string) => void }) {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "agents",    label: "Agents",    icon: Bot },
    { key: "campaigns", label: "Campaigns", icon: Megaphone },
    { key: "calls",     label: "Calls",     icon: Phone },
    { key: "exports",   label: "Exports",   icon: Download },
    { key: "members",   label: "Members",   icon: Users },
    { key: "settings",  label: "Settings",  icon: Settings },
  ];

  return (
    <aside className="flex h-full w-60 flex-shrink-0 flex-col justify-between border-r border-white/10 bg-[#0b0b0b] px-4 py-5">
      <div>
        <div className="mb-6 flex items-center gap-2 px-1">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-violet-500 to-purple-700" />
          <span className="text-sm font-medium text-white/80">Enterprise</span>
        </div>

        <p className="mb-2 px-3 text-[11px] font-medium tracking-wider text-white/30">MENU</p>
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <NavItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              active={active === item.key}
              onClick={() => onNavigate(item.key)}
            />
          ))}
        </nav>
      </div>

      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white/70">
        N
      </button>
    </aside>
  );
}

/* ----------------------------------------------------------------------- */
/* Agents page                                                             */
/* ----------------------------------------------------------------------- */

function AgentsPage({ agents, onCreateAgent }: {
  agents: typeof initialAgents;
  onCreateAgent: () => void;
}) {
  const [query, setQuery] = useState("");
  const filtered = agents.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Agents</h1>
          <p className="mt-1 text-sm text-white/50">Manage AI callers and their instructions.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search agents..."
              className="w-56 rounded-lg border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
            />
          </div>
          <button
            onClick={onCreateAgent}
            className="flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            <Plus size={15} />
            Create Agent
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
              <th className="px-5 py-3 font-medium">Agent Name</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Campaigns</th>
              <th className="px-5 py-3 font-medium">Calls Made</th>
              <th className="px-5 py-3 font-medium">Created</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-white/40">
                  No agents found.
                </td>
              </tr>
            ) : (
              filtered.map((agent) => (
                <tr key={agent.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                  <td className="px-5 py-3.5 font-medium text-white">{agent.name}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={agent.status} /></td>
                  <td className="px-5 py-3.5 text-white/60">{agent.campaigns}</td>
                  <td className="px-5 py-3.5 text-white/60">{agent.callsMade}</td>
                  <td className="px-5 py-3.5 text-white/60">{agent.created}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="rounded-md p-1.5 text-white/40 hover:bg-white/10 hover:text-white">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Campaign page bits                                                       */
/* ----------------------------------------------------------------------- */

function AgentSelect({ agents, value, onChange }: {
  agents: typeof initialAgents;
  value: string;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = agents.find((a) => a.id === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white/90 focus:border-white/20 focus:outline-none"
      >
        <span className={selected ? "text-white" : "text-white/30"}>
          {selected ? selected.name : "Select an Agent"}
        </span>
        <ChevronDown size={15} className="text-white/40" />
      </button>

      {open && (
        <div className="absolute z-10 mt-1.5 w-full overflow-hidden rounded-lg border border-white/10 bg-[#1a1a1a] shadow-xl shadow-black/40">
          {agents.length === 0 ? (
            <div className="px-3.5 py-3 text-sm text-white/40">No agents yet — create one first.</div>
          ) : (
            agents.map((agent) => (
              <button
                key={agent.id}
                type="button"
                onClick={() => { onChange(agent.id); setOpen(false); }}
                className="block w-full px-3.5 py-2.5 text-left text-sm text-white/90 hover:bg-white/10"
              >
                {agent.name}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

function DataFieldRow({ field, onChange, onRemove }: {
  field: { id: string; name: string; description: string; type: string };
  onChange: (f: typeof field) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <input
        value={field.name}
        onChange={(e) => onChange({ ...field, name: e.target.value })}
        placeholder="Field name"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none sm:w-[180px] sm:flex-shrink-0"
      />
      <input
        value={field.description}
        onChange={(e) => onChange({ ...field, description: e.target.value })}
        placeholder="Description for the AI"
        className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
      />
      <div className="relative w-full flex-shrink-0 sm:w-[120px]">
        <select
          value={field.type}
          onChange={(e) => onChange({ ...field, type: e.target.value })}
          className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white focus:border-white/20 focus:outline-none"
        >
          {FIELD_TYPES.map((t) => (
            <option key={t} value={t} className="bg-[#1a1a1a]">{t}</option>
          ))}
        </select>
        <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40" />
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="flex-shrink-0 self-end rounded-md p-2 text-white/40 hover:bg-white/10 hover:text-white sm:self-auto"
      >
        <X size={16} />
      </button>
    </div>
  );
}

function LeadUpload({ file, onFile }: { file: File | null; onFile: (f: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (files && files[0]) onFile(files[0]);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
      onClick={() => inputRef.current?.click()}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-14 text-center transition-colors ${
        dragOver ? "border-violet-400/50 bg-violet-500/5" : "border-white/10 hover:border-white/20"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".csv,.xlsx"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
        <Upload size={18} className="text-white/60" />
      </div>

      {file ? (
        <>
          <p className="text-sm font-medium text-white">{file.name}</p>
          <p className="mt-1 text-xs text-white/40">{(file.size / 1024).toFixed(1)} KB &middot; click to replace</p>
        </>
      ) : (
        <>
          <p className="text-sm font-medium text-white">Click to upload lead list</p>
          <p className="mt-1 text-xs text-white/40">CSV or XLSX (max. 50MB)</p>
        </>
      )}

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
        className="mt-5 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
      >
        Select File
      </button>
    </div>
  );
}

function CampaignsPage({ agents }: { agents: typeof initialAgents }) {
  const [campaignName, setCampaignName] = useState("");
  const [agentId, setAgentId] = useState("");
  const [objective, setObjective] = useState("");
  const [fields, setFields] = useState([
    { id: "f_1", name: "Budget", description: "The prospect's estimated budget for the project.", type: "Text" },
  ]);
  const [leadFile, setLeadFile] = useState<File | null>(null);

  const addField = () =>
    setFields((prev) => [...prev, { id: `f_${Date.now()}`, name: "", description: "", type: "Text" }]);
  const updateField = (id: string, next: typeof fields[0]) =>
    setFields((prev) => prev.map((f) => (f.id === id ? next : f)));
  const removeField = (id: string) =>
    setFields((prev) => prev.filter((f) => f.id !== id));

  return (
    <div className="mx-auto max-w-3xl p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">New Campaign</h1>
        <p className="mt-1 text-sm text-white/50">Set up a calling campaign for your AI agent.</p>
      </div>

      <div className="flex flex-col gap-6">
        <SectionCard step={1} title="Basic Information" description="Name your campaign and select the AI agent to run it.">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm text-white/70">Campaign Name</label>
              <input
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="e.g. Q3 Webinar Follow-ups"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-white/70">Agent Selection</label>
              <AgentSelect agents={agents} value={agentId} onChange={setAgentId} />
            </div>
          </div>
        </SectionCard>

        <SectionCard step={2} title="Campaign Objective" description="Describe what the AI should accomplish during these calls.">
          <textarea
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            rows={4}
            placeholder="E.g. Qualify the lead by asking for their budget and timeline. If they are interested, schedule a follow-up call..."
            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
          />
        </SectionCard>

        <SectionCard
          step={3}
          title="Information to Collect"
          description="Define the specific data points the AI should extract from the conversation (e.g. Budget, Timeline)."
        >
          <div className="flex flex-col gap-3">
            {fields.map((field) => (
              <DataFieldRow
                key={field.id}
                field={field}
                onChange={(next) => updateField(field.id, next)}
                onRemove={() => removeField(field.id)}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={addField}
            className="mt-4 flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
          >
            <Plus size={14} />
            Add Data Field
          </button>
        </SectionCard>

        <SectionCard step={4} title="Lead Upload" description="Upload your CSV or XLSX file containing the leads.">
          <LeadUpload file={leadFile} onFile={setLeadFile} />
        </SectionCard>

        <div className="flex justify-end gap-3 pb-4">
          <button className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white/70 hover:bg-white/5">
            Cancel
          </button>
          <button className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-white/90">
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );
}

function PlaceholderPage({ label }: { label: string }) {
  return (
    <div className="flex h-full items-center justify-center p-8">
      <p className="text-sm text-white/30">{label} — not built yet.</p>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Root                                                                     */
/* ----------------------------------------------------------------------- */

export default function CampaignDashboard() {
  const [active, setActive] = useState("campaigns");
  const [agents, setAgents] = useState(initialAgents);

  const handleCreateAgent = () => {
    const name = `Agent ${agents.length + 1}`;
    setAgents((prev) => [
      ...prev,
      {
        id: `agt_${Date.now()}`,
        name,
        status: "Draft",
        campaigns: 0,
        callsMade: 0,
        created: new Date().toLocaleDateString("en-US"),
      },
    ]);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans text-white">
      {/* Sidebar — solid dark, no grid */}
      <Sidebar active={active} onNavigate={setActive} />

      {/* Main area — slate-950 + grid background */}
      <main className="relative flex-1 overflow-hidden">
        {/* Slate-950 base */}
        <div className="absolute inset-0 bg-slate-950" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Scrollable content sits above grid */}
        <div className="relative z-10 h-full overflow-y-auto">
          {active === "agents" ? (
            <AgentsPage agents={agents} onCreateAgent={handleCreateAgent} />
          ) : active === "campaigns" ? (
            <CampaignsPage agents={agents} />
          ) : (
            <PlaceholderPage label={active[0].toUpperCase() + active.slice(1)} />
          )}
        </div>
      </main>
    </div>
  );
}