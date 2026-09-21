import { cn } from "@/lib/utils";
import type { CallStatus, Urgency } from "@/lib/call-data";

export function StatusBadge({ status }: { status: CallStatus | "Needs follow-up" }) {
  const styles = {
    New: "bg-status-blue text-status-blue-foreground",
    Reviewed: "bg-status-amber text-status-amber-foreground",
    "Needs follow-up": "bg-status-amber text-status-amber-foreground",
    Completed: "bg-status-green text-status-green-foreground",
    Incomplete: "bg-status-neutral text-status-neutral-foreground",
  }[status];
  return <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold", styles)}>{status}</span>;
}

export function UrgencyBadge({ urgency }: { urgency: Urgency }) {
  const styles = {
    High: "bg-status-red text-status-red-foreground",
    Medium: "bg-status-amber text-status-amber-foreground",
    Low: "bg-status-neutral text-status-neutral-foreground",
  }[urgency];
  return <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold", styles)}>{urgency}</span>;
}
