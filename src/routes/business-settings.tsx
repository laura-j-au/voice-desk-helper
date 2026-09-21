import { createFileRoute } from "@tanstack/react-router";
import { Info, Plus, Save, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeading } from "@/components/app/page-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/business-settings")({ head: () => ({ meta: [
  { title: "Business Settings — AI Front Desk" }, { name: "description", content: "Manage approved West Coast Plumbing information used by the AI." },
  { property: "og:title", content: "Business Settings — AI Front Desk" }, { property: "og:description", content: "Manage approved business information." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: BusinessSettings });

type Settings = { business:string; greeting:string; email:string; phone:string; hours:string[]; services:string[]; areas:string[] };
const initial: Settings = { business:"West Coast Plumbing", greeting:"Hi, you’ve reached West Coast Plumbing. I’m the automated front-desk assistant. How can I help you today?", email:"office@westcoastplumbing.example", phone:"08 6123 4567", hours:["Monday–Friday: 7:30 AM–5:00 PM","Saturday: 8:00 AM–12:00 PM","Sunday: Closed"], services:["General plumbing","Hot-water systems","Blocked drains","Leak repairs","Tap and toilet repairs"], areas:["Perth","Canning Vale","Fremantle","Cockburn","Melville"] };

function BusinessSettings() {
 const [form,setForm]=useState<Settings>(initial); const [saved,setSaved]=useState<Settings>(initial);
 const setField=(key:keyof Settings,value:string|string[])=>setForm((f)=>({...f,[key]:value}));
 const updateList=(key:"services"|"areas",i:number,value:string)=>setField(key,form[key].map((v,n)=>n===i?value:v));
 const removeList=(key:"services"|"areas",i:number)=>setField(key,form[key].filter((_,n)=>n!==i));
 return <><PageHeading title="Business settings" description="Manage the approved information the AI can use when answering calls." />
   <div className="mb-6 flex gap-3 rounded-lg border border-status-blue-foreground/15 bg-status-blue p-4 text-status-blue-foreground"><Info className="mt-0.5 size-5 shrink-0"/><p className="text-sm">This information is used by the AI when answering incoming calls. The AI will only answer using approved business information.</p></div>
   <div className="grid gap-6 xl:grid-cols-2"><Card className="rounded-lg shadow-sm"><CardHeader><CardTitle className="text-base">Business details</CardTitle></CardHeader><CardContent className="space-y-5"><Field label="Business name"><Input value={form.business} onChange={(e)=>setField("business",e.target.value)}/></Field><Field label="AI greeting"><Textarea rows={4} value={form.greeting} onChange={(e)=>setField("greeting",e.target.value)}/></Field><div className="grid gap-4 sm:grid-cols-2"><Field label="Notification email"><Input type="email" value={form.email} onChange={(e)=>setField("email",e.target.value)}/></Field><Field label="Business phone"><Input value={form.phone} onChange={(e)=>setField("phone",e.target.value)}/></Field></div><Field label="Opening hours">{form.hours.map((h,i)=><Input key={i} value={h} onChange={(e)=>setField("hours",form.hours.map((v,n)=>n===i?e.target.value:v))} className="mb-2"/>)}</Field></CardContent></Card>
   <div className="space-y-6"><EditableList title="Services" items={form.services} onChange={(i,v)=>updateList("services",i,v)} onRemove={(i)=>removeList("services",i)} onAdd={()=>setField("services",[...form.services,""])} placeholder="Add a service"/><EditableList title="Service areas" items={form.areas} onChange={(i,v)=>updateList("areas",i,v)} onRemove={(i)=>removeList("areas",i)} onAdd={()=>setField("areas",[...form.areas,""])} placeholder="Add a suburb or area"/></div></div>
   <div className="mt-6 flex justify-end gap-3 border-t pt-6"><Button variant="outline" onClick={()=>{setForm(saved);toast("Changes reverted")}}>Cancel</Button><Button onClick={()=>{setSaved(form);toast.success("Business settings saved")}}><Save/>Save Changes</Button></div>
 </>;
}
function Field({label,children}:{label:string;children:React.ReactNode}) { return <div className="space-y-2"><Label>{label}</Label>{children}</div>; }
function EditableList({title,items,onChange,onRemove,onAdd,placeholder}:{title:string;items:string[];onChange:(i:number,v:string)=>void;onRemove:(i:number)=>void;onAdd:()=>void;placeholder:string}) { return <Card className="rounded-lg shadow-sm"><CardHeader className="flex-row items-center justify-between space-y-0"><CardTitle className="text-base">{title}</CardTitle><Button variant="outline" size="sm" onClick={onAdd}><Plus/>Add</Button></CardHeader><CardContent className="space-y-2">{items.map((item,i)=><div key={i} className="flex gap-2"><Input value={item} onChange={(e)=>onChange(i,e.target.value)} placeholder={placeholder}/><Button variant="ghost" size="icon" onClick={()=>onRemove(i)} aria-label={`Remove ${item || title} item`}><Trash2/></Button></div>)}</CardContent></Card>;}
