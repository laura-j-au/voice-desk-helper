import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Check, CheckCircle2, Clipboard, Clock3, MapPin, Phone, UserRound } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeading } from "@/components/app/page-heading";
import { StatusBadge, UrgencyBadge } from "@/components/app/status-badges";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CallStatus } from "@/lib/call-data";

export const Route = createFileRoute("/calls/$callId")({ head: () => ({ meta: [
  { title: "Call Details — AI Front Desk" }, { name: "description", content: "Structured incoming call record for human review." },
  { property: "og:title", content: "Call Details — AI Front Desk" }, { property: "og:description", content: "Review a structured AI call summary and transcript." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: CallDetails });

const summary="Emma called because her hot-water system stopped working this morning. She is located in Canning Vale and would prefer someone to contact her today. The AI collected her contact details but did not confirm availability or an appointment.";
const collected=[ ["Name","Emma Taylor"], ["Callback number","0408 552 913"], ["Location","Canning Vale"], ["Reason for calling","Hot-water system not working"], ["Urgency","High"], ["Preferred callback time","Today"], ["Additional notes","System stopped working this morning"] ];
const transcript=[
 ["AI","Hi, you’ve reached West Coast Plumbing. I’m the automated front-desk assistant. How can I help you today?"],
 ["Caller","Hi, our hot-water system stopped working this morning."],
 ["AI","I’m sorry to hear that. I can collect some details so the team can contact you. Could I have your name?"],
 ["Caller","It’s Emma Taylor."],
 ["AI","Thanks, Emma. What’s the best number for the team to call you back on?"],
 ["Caller","0408 552 913. We’re in Canning Vale."],
 ["AI","Thank you. Would you prefer the team to contact you today, or at another time?"],
 ["Caller","Today would be great, if possible."],
 ["AI","Thank you, Emma. I’ve recorded your request and preferred callback time. Someone from West Coast Plumbing will review it and contact you. I haven’t confirmed an appointment."],
] as const;

function CallDetails() {
 const [status,setStatus]=useState<CallStatus>("New");
 const copy=async(text:string,label:string)=>{try{await navigator.clipboard.writeText(text);toast.success(`${label} copied`)}catch{toast.error("Could not copy to clipboard")}};
 const update=(next:CallStatus)=>{setStatus(next);toast.success(`Call marked as ${next.toLowerCase()}`)};
 return <><div className="mb-4"><Button asChild variant="ghost" size="sm" className="-ml-3"><Link to="/calls"><ArrowLeft/>Back to calls</Link></Button></div>
  <PageHeading title="Call from Emma Taylor" description="Today at 9:53 AM · 2 minutes 18 seconds" actions={<><Button variant="outline" onClick={()=>copy("0408 552 913","Phone number")}><Phone/>Copy phone number</Button><Button variant="outline" onClick={()=>copy(summary,"Summary")}><Clipboard/>Copy summary</Button></>} />
  <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg border bg-card px-5 py-4 shadow-sm"><Meta icon={UserRound} label="Caller" value="Emma Taylor"/><Meta icon={Phone} label="Phone" value="0408 552 913"/><Meta icon={Clock3} label="Intent" value="New service enquiry"/><div><p className="mb-1 text-xs text-muted-foreground">Urgency</p><UrgencyBadge urgency="High"/></div><div><p className="mb-1 text-xs text-muted-foreground">Status</p><StatusBadge status={status}/></div></div>
  <div className="mb-6 flex gap-3 rounded-lg border border-status-red-foreground/20 bg-status-red p-4 text-status-red-foreground"><AlertTriangle className="mt-0.5 size-5 shrink-0"/><div><p className="text-sm font-semibold">Human follow-up required</p><p className="mt-0.5 text-sm">AI did not make or confirm an appointment. Human follow-up is required.</p></div></div>
  <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,.65fr)]"><div className="space-y-6"><Card className="rounded-lg shadow-sm"><CardHeader><CardTitle className="text-base">AI call summary</CardTitle></CardHeader><CardContent><p className="text-sm leading-7 text-foreground/85">{summary}</p></CardContent></Card><Card className="rounded-lg shadow-sm"><CardHeader><CardTitle className="text-base">Call transcript</CardTitle></CardHeader><CardContent className="space-y-4">{transcript.map(([speaker,text],i)=><div key={i} className={`flex ${speaker === "Caller" ? "justify-end" : "justify-start"}`}><div className={`max-w-[85%] rounded-lg px-4 py-3 ${speaker === "Caller" ? "bg-secondary text-secondary-foreground" : "border bg-muted/50"}`}><p className="mb-1 text-[11px] font-bold uppercase text-muted-foreground">{speaker}</p><p className="text-sm leading-6">{text}</p></div></div>)}</CardContent></Card></div>
  <div className="space-y-6"><Card className="rounded-lg shadow-sm"><CardHeader><CardTitle className="text-base">Collected information</CardTitle></CardHeader><CardContent className="divide-y">{collected.map(([label,value])=><div key={label} className="grid grid-cols-[130px_1fr] gap-3 py-3 first:pt-0 last:pb-0"><dt className="text-xs text-muted-foreground">{label}</dt><dd className="text-sm font-medium">{value}</dd></div>)}</CardContent></Card><Card className="rounded-lg shadow-sm"><CardHeader><CardTitle className="text-base">Missing or uncertain information</CardTitle></CardHeader><CardContent className="space-y-3">{[["Hot-water system type","Not provided"],["Property access details","Not provided"]].map(([label,value])=><div key={label} className="flex items-center justify-between gap-4 rounded-md bg-muted p-3"><span className="text-sm">{label}</span><span className="text-xs font-medium text-muted-foreground">{value}</span></div>)}</CardContent></Card><Card className="rounded-lg shadow-sm"><CardHeader><CardTitle className="text-base">Human actions</CardTitle></CardHeader><CardContent className="grid gap-2"><Button variant={status==="Reviewed"?"secondary":"outline"} onClick={()=>update("Reviewed")}><Check/>Mark as reviewed</Button><Button onClick={()=>update("Completed")} disabled={status==="Completed"}><CheckCircle2/>{status==="Completed"?"Completed":"Mark as completed"}</Button></CardContent></Card></div></div>
 </>;
}
function Meta({icon:Icon,label,value}:{icon:typeof UserRound;label:string;value:string}) { return <div className="flex min-w-40 items-center gap-3"><span className="grid size-8 place-items-center rounded-md bg-muted text-muted-foreground"><Icon className="size-4"/></span><div><p className="text-xs text-muted-foreground">{label}</p><p className="text-sm font-semibold">{value}</p></div></div> }
