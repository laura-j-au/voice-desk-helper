import { createFileRoute } from "@tanstack/react-router";
import { Bot, Check, LockKeyhole, MessageSquareText, Plus, Save, ShieldCheck, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeading } from "@/components/app/page-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/ai-configuration")({ head: () => ({ meta: [
 { title: "AI Configuration — AI Front Desk" }, { name: "description", content: "Configure approved call handling, FAQs, and safety rules." },
 { property: "og:title", content: "AI Configuration — AI Front Desk" }, { property: "og:description", content: "Configure safe and approved AI call handling." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AIConfiguration });

type FAQ={id:number;question:string;answer:string};
const initialFaqs:FAQ[]=[
 {id:1,question:"What areas do you service?",answer:"We service Perth, Canning Vale, Fremantle, Cockburn and Melville."},
 {id:2,question:"What are your opening hours?",answer:"We are open Monday to Friday from 7:30 AM to 5:00 PM and Saturday from 8:00 AM to 12:00 PM."},
 {id:3,question:"Can you tell me the price?",answer:"Pricing depends on the work required. I can collect your details and ask the team to contact you."},
];
const fields=[["Caller name",true],["Callback number",true],["Reason for calling",true],["Location or suburb",true],["Urgency",true],["Preferred callback time",false],["Additional notes",false]] as const;
const callTypes=["New service enquiry","Existing customer or existing job","General question"];
const safety=["Never confirm an appointment","Never guarantee availability","Never provide an unapproved price","Never negotiate","Never take payment information","Never provide professional or emergency advice","Clearly say when human follow-up is required"];

function AIConfiguration(){
 const [selected,setSelected]=useState(()=>new Set(fields.map(([n])=>n))); const [faqs,setFaqs]=useState(initialFaqs); const [fallback,setFallback]=useState("I’m not able to confirm that, but I can record your question and ask someone from the team to contact you.");
 const toggle=(name:string,required:boolean)=>{if(required)return;setSelected(s=>{const n=new Set(s);n.has(name)?n.delete(name):n.add(name);return n})};
 const updateFaq=(id:number,key:"question"|"answer",value:string)=>setFaqs(f=>f.map(x=>x.id===id?{...x,[key]:value}:x));
 return <><PageHeading title="AI configuration" description="Control what the assistant collects, answers, and must never do." actions={<PreviewGreeting/>}/>
 <div className="space-y-6"><Section number="1" title="Information to collect" icon={Check} description="Choose the details the AI should request during every applicable call."><div className="grid gap-3 sm:grid-cols-2">{fields.map(([name,required])=><label key={name} className="flex items-center gap-3 rounded-md border p-3"><Checkbox checked={selected.has(name)} disabled={required} onCheckedChange={()=>toggle(name,required)}/><span className="flex-1 text-sm font-medium">{name}</span><span className="text-xs text-muted-foreground">{required?"Required":"Optional"}</span></label>)}</div></Section>
 <Section number="2" title="Supported call types" icon={Bot} description="Calls outside these categories use the fallback behaviour below."><div className="grid gap-3 sm:grid-cols-3">{callTypes.map(type=><div key={type} className="flex items-center gap-3 rounded-md border bg-status-green p-3 text-status-green-foreground"><Check className="size-4"/><span className="text-sm font-semibold">{type}</span></div>)}</div><div className="mt-4 rounded-md bg-muted p-4"><p className="text-xs font-semibold uppercase text-muted-foreground">Fallback behaviour</p><p className="mt-2 text-sm leading-6">For requests outside these call types, collect the caller’s name, phone number and reason for calling, then advise that a team member will follow up.</p></div></Section>
 <Section number="3" title="Approved FAQs" icon={MessageSquareText} description="The AI can only answer these questions using the approved wording."><div className="space-y-4">{faqs.map((faq,i)=><div key={faq.id} className="rounded-lg border bg-muted/30 p-4"><div className="mb-4 flex items-center justify-between"><p className="text-xs font-bold uppercase text-muted-foreground">FAQ {i+1}</p><Button variant="ghost" size="icon" onClick={()=>setFaqs(f=>f.filter(x=>x.id!==faq.id))} aria-label={`Remove FAQ ${i+1}`}><Trash2/></Button></div><div className="space-y-4"><div className="space-y-2"><Label>Question</Label><Input value={faq.question} onChange={e=>updateFaq(faq.id,"question",e.target.value)}/></div><div className="space-y-2"><Label>Approved answer</Label><Textarea rows={3} value={faq.answer} onChange={e=>updateFaq(faq.id,"answer",e.target.value)}/></div></div></div>)}<Button variant="outline" onClick={()=>setFaqs(f=>[...f,{id:Date.now(),question:"",answer:""}])}><Plus/>Add FAQ</Button></div></Section>
 <Section number="4" title="Safety rules" icon={ShieldCheck} description="These essential protections are always enabled and cannot be changed."><div className="grid gap-3 sm:grid-cols-2">{safety.map(rule=><div key={rule} className="flex items-center gap-3 rounded-md border bg-muted/40 p-3"><span className="grid size-6 place-items-center rounded-full bg-status-green text-status-green-foreground"><Check className="size-3.5"/></span><span className="flex-1 text-sm font-medium">{rule}</span><LockKeyhole className="size-3.5 text-muted-foreground"/></div>)}</div></Section>
 <Section number="5" title="Fallback response" icon={MessageSquareText} description="Used when the AI cannot answer from approved information."><Textarea rows={4} value={fallback} onChange={e=>setFallback(e.target.value)}/></Section>
 <div className="flex justify-end border-t pt-6"><Button onClick={()=>toast.success("AI configuration saved")}><Save/>Save Configuration</Button></div></div></>;
}
function Section({number,title,description,icon:Icon,children}:{number:string;title:string;description:string;icon:typeof Check;children:React.ReactNode}) { return <Card className="rounded-lg shadow-sm"><CardHeader className="flex-row gap-4 space-y-0"><span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-4"/></span><div><div className="mb-1 flex items-center gap-2"><span className="text-xs font-bold text-primary">{number.padStart(2,"0")}</span><CardTitle className="text-base">{title}</CardTitle></div><p className="text-sm text-muted-foreground">{description}</p></div></CardHeader><CardContent>{children}</CardContent></Card> }
function PreviewGreeting(){return <Dialog><DialogTrigger asChild><Button variant="outline"><Bot/>Preview Greeting</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Greeting preview</DialogTitle><DialogDescription>This is how the AI will introduce itself on an incoming call.</DialogDescription></DialogHeader><div className="rounded-lg bg-muted p-4 text-sm leading-6">“Hi, you’ve reached West Coast Plumbing. I’m the automated front-desk assistant. How can I help you today?”</div><DialogFooter><DialogTrigger asChild><Button>Done</Button></DialogTrigger></DialogFooter></DialogContent></Dialog>}
