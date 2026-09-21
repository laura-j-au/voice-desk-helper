import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, CheckCircle2, ClipboardCheck, PhoneCall, Settings2, UserRoundPlus } from "lucide-react";
import { CallTable } from "@/components/app/call-table";
import { PageHeading } from "@/components/app/page-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calls } from "@/lib/call-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dashboard — AI Front Desk" },
    { name: "description", content: "Incoming call overview for West Coast Plumbing." },
    { property: "og:title", content: "AI Front Desk Dashboard" },
    { property: "og:description", content: "Review incoming enquiries and human follow-up tasks." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Dashboard,
});

const summaries = [
  { label: "Calls today", value: "12", note: "+2 from yesterday", icon: PhoneCall },
  { label: "New enquiries", value: "7", note: "58% of calls", icon: UserRoundPlus },
  { label: "Needs follow-up", value: "4", note: "Action required", icon: ClipboardCheck },
  { label: "Completed", value: "5", note: "Reviewed today", icon: CheckCircle2 },
];

function Dashboard() {
  return <><PageHeading title="Good afternoon, Laura" description="Here’s what your front desk has handled today." actions={<Button asChild variant="outline"><Link to="/calls">View all calls <ArrowRight /></Link></Button>} />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Today's summary">{summaries.map(({ label, value, note, icon: Icon }) => <Card key={label} className="rounded-lg shadow-sm"><CardContent className="p-5"><div className="flex items-start justify-between"><div><p className="text-sm font-medium text-muted-foreground">{label}</p><p className="mt-3 font-display text-3xl font-semibold">{value}</p><p className="mt-1 text-xs text-muted-foreground">{note}</p></div><span className="grid size-10 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5" /></span></div></CardContent></Card>)}</section>
    <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
      <Card className="overflow-hidden rounded-lg shadow-sm"><CardHeader className="flex-row items-center justify-between space-y-0 px-5 py-4"><div><CardTitle className="text-base">Recent calls</CardTitle><p className="mt-1 text-xs text-muted-foreground">Latest conversations handled by the AI</p></div><Button variant="ghost" size="sm" asChild><Link to="/calls">View all <ArrowRight /></Link></Button></CardHeader><CallTable rows={calls.slice(0,4)} compact /></Card>
      <Card className="h-fit rounded-lg shadow-sm"><CardHeader className="pb-3"><CardTitle className="flex items-center gap-2 text-base"><Bot className="size-5 text-primary" />AI Front Desk status</CardTitle></CardHeader><CardContent className="space-y-4">{["Phone line|Active", "AI assistant|Online", "Business configuration|Complete", "Notification email|Connected"].map((row) => { const [label,status] = row.split("|"); return <div key={label} className="flex items-center justify-between gap-3"><span className="text-sm text-muted-foreground">{label}</span><span className="flex items-center gap-1.5 text-xs font-semibold"><span className="size-2 rounded-full bg-status-green-foreground" />{status}</span></div>; })}<div className="border-t pt-4"><p className="text-xs leading-relaxed text-muted-foreground">All systems are ready to answer incoming calls and collect approved information.</p></div></CardContent></Card>
    </section>
    <section className="mt-6 rounded-lg border bg-card px-5 py-5 shadow-sm"><div className="mb-4 flex items-center gap-2"><Settings2 className="size-4 text-primary"/><h2 className="text-sm font-semibold">How AI Front Desk works</h2></div><div className="grid gap-3 md:grid-cols-5">{["Configure approved info", "Customer calls", "AI answers & collects", "Structured summary", "Human follows up"].map((step, i) => <div key={step} className="flex items-center gap-3 md:min-w-0"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-primary">{i+1}</span><span className="text-xs font-medium">{step}</span>{i < 4 ? <ArrowRight className="ml-auto hidden size-3.5 shrink-0 text-muted-foreground md:block" /> : null}</div>)}</div></section>
  </>;
}
