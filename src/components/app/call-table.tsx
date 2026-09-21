import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { CallRecord } from "@/lib/call-data";
import { StatusBadge, UrgencyBadge } from "./status-badges";

export function CallTable({ rows, compact = false }: { rows: CallRecord[]; compact?: boolean }) {
  if (!rows.length) return <div className="px-6 py-14 text-center"><p className="font-medium">No calls match these filters</p><p className="mt-1 text-sm text-muted-foreground">Try changing or clearing one of the filters.</p></div>;
  return (
    <Table>
      <TableHeader><TableRow className="bg-muted/60 hover:bg-muted/60">
        <TableHead className="pl-5">Caller</TableHead><TableHead>Phone number</TableHead><TableHead>Call type</TableHead><TableHead>Time</TableHead><TableHead>Urgency</TableHead><TableHead>Status</TableHead><TableHead className="pr-5 text-right">Action</TableHead>
      </TableRow></TableHeader>
      <TableBody>{rows.map((call) => <TableRow key={call.id} className="group">
        <TableCell className="min-w-48 pl-5 py-4"><div className="font-medium text-foreground">{call.caller}</div><div className="mt-1 max-w-56 truncate text-xs text-muted-foreground">{call.request}</div></TableCell>
        <TableCell className="whitespace-nowrap text-muted-foreground">{call.phone}</TableCell>
        <TableCell className="min-w-44 text-muted-foreground">{call.type}</TableCell>
        <TableCell className="whitespace-nowrap"><div>{call.time}</div>{!compact ? <div className="text-xs text-muted-foreground">{call.date}</div> : null}</TableCell>
        <TableCell><UrgencyBadge urgency={call.urgency} /></TableCell>
        <TableCell><StatusBadge status={call.id === "daniel-wong" && compact ? "Needs follow-up" : call.status} /></TableCell>
        <TableCell className="pr-5 text-right"><Button variant="ghost" size="icon" asChild title={`View ${call.caller}'s call`}><Link to="/calls/$callId" params={{ callId: call.id }} aria-label={`View call from ${call.caller}`}><ArrowUpRight /></Link></Button></TableCell>
      </TableRow>)}</TableBody>
    </Table>
  );
}
