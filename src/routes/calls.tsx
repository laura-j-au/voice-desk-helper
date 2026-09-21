import { createFileRoute } from "@tanstack/react-router";
import { FilterX, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CallTable } from "@/components/app/call-table";
import { PageHeading } from "@/components/app/page-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { calls } from "@/lib/call-data";

export const Route = createFileRoute("/calls")({ head: () => ({ meta: [
  { title: "Calls — AI Front Desk" }, { name: "description", content: "Search and review incoming calls for West Coast Plumbing." },
  { property: "og:title", content: "Calls — AI Front Desk" }, { property: "og:description", content: "Search and review incoming calls." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: CallsPage });

function FilterSelect({ value, onValueChange, placeholder, options }: { value: string; onValueChange: (v:string)=>void; placeholder:string; options:string[] }) { return <Select value={value} onValueChange={onValueChange}><SelectTrigger className="h-10 min-w-40 bg-card"><SelectValue placeholder={placeholder}/></SelectTrigger><SelectContent>{options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select>; }

function CallsPage() {
  const [search,setSearch]=useState(""); const [date,setDate]=useState("All dates"); const [type,setType]=useState("All call types"); const [urgency,setUrgency]=useState("All urgency"); const [status,setStatus]=useState("All statuses");
  const filtered = useMemo(() => calls.filter((c) => (c.caller+c.phone+c.request).toLowerCase().includes(search.toLowerCase()) && (date === "All dates" || c.date === date) && (type === "All call types" || c.type === type) && (urgency === "All urgency" || c.urgency === urgency) && (status === "All statuses" || c.status === status)), [search,date,type,urgency,status]);
  const clear=()=>{setSearch("");setDate("All dates");setType("All call types");setUrgency("All urgency");setStatus("All statuses")};
  return <><PageHeading title="Calls" description="Review every incoming call and identify what needs human follow-up." />
    <Card className="overflow-hidden rounded-lg shadow-sm"><div className="border-b p-4"><div className="flex flex-wrap gap-3"><div className="relative min-w-64 flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search caller, number or request" className="h-10 bg-card pl-9"/></div><FilterSelect value={date} onValueChange={setDate} placeholder="Date" options={["All dates","Today","Yesterday","20 Sep 2026"]}/><FilterSelect value={type} onValueChange={setType} placeholder="Call type" options={["All call types","New service enquiry","Existing job","General question"]}/><FilterSelect value={urgency} onValueChange={setUrgency} placeholder="Urgency" options={["All urgency","High","Medium","Low"]}/><FilterSelect value={status} onValueChange={setStatus} placeholder="Status" options={["All statuses","New","Reviewed","Completed","Incomplete"]}/><Button variant="outline" size="icon" className="h-10 w-10" onClick={clear} title="Clear filters"><FilterX/></Button></div><p className="mt-3 text-xs text-muted-foreground">Showing {filtered.length} of {calls.length} calls</p></div><CallTable rows={filtered}/></Card>
  </>;
}
