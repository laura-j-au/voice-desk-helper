import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Bot, BriefcaseBusiness, ChevronDown, LayoutDashboard, Menu, PhoneCall, Search, Settings2, User, LogOut, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", to: "/" as const, icon: LayoutDashboard },
  { label: "Calls", to: "/calls" as const, icon: PhoneCall },
  { label: "Business Settings", to: "/business-settings" as const, icon: BriefcaseBusiness },
  { label: "AI Configuration", to: "/ai-configuration" as const, icon: Settings2 },
];

function Brand() {
  return <div className="flex items-center gap-3 px-3"><div className="grid size-9 place-items-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground"><Bot className="size-5" /></div><div><div className="font-display text-[15px] font-semibold text-sidebar-foreground">AI Front Desk</div><div className="mt-0.5 text-[11px] text-sidebar-foreground/55">Conceptual MVP</div></div></div>;
}

function Navigation() {
  return <nav className="mt-8 space-y-1 px-2" aria-label="Main navigation">{navItems.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}><item.icon className="size-4" />{item.label}</Link>)}</nav>;
}

function BusinessIdentity() {
  return <div className="border-t border-sidebar-border p-4"><div className="flex items-center gap-3"><div className="grid size-9 shrink-0 place-items-center rounded-md bg-sidebar-accent text-xs font-bold text-sidebar-accent-foreground">WC</div><div className="min-w-0"><p className="truncate text-sm font-semibold text-sidebar-foreground">West Coast Plumbing</p><p className="truncate text-xs text-sidebar-foreground/55">Perth, Western Australia</p></div></div></div>;
}

function SidebarContent() { return <div className="flex h-full flex-col bg-sidebar py-5"><Brand /><Navigation /><div className="mt-auto"><BusinessIdentity /></div></div>; }

function pageTitle(path: string) {
  if (path.startsWith("/calls/") ) return "Call details";
  if (path === "/calls") return "Calls";
  if (path === "/business-settings") return "Business settings";
  if (path === "/ai-configuration") return "AI configuration";
  return "Dashboard";
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <div className="min-h-screen bg-background">
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-sidebar-border lg:block"><SidebarContent /></aside>
    <div className="lg:pl-64">
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-card/95 px-4 backdrop-blur sm:px-6 lg:px-8">
        <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="mr-2 lg:hidden" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent side="left" className="w-64 border-sidebar-border bg-sidebar p-0"><SheetTitle className="sr-only">Navigation</SheetTitle><SidebarContent /></SheetContent></Sheet>
        <h2 className="hidden text-sm font-semibold text-foreground sm:block">{pageTitle(pathname)}</h2>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="relative hidden w-64 md:block"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Search" placeholder="Search calls" className="h-9 bg-muted/60 pl-9 shadow-none" /></div>
          <Button variant="ghost" size="icon" className="relative" aria-label="Notifications"><Bell /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" /></Button>
          <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="h-10 gap-2 px-2"><span className="grid size-8 place-items-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">LJ</span><span className="hidden text-left text-xs sm:block"><span className="block font-semibold">Laura Jiang</span><span className="block text-muted-foreground">Owner</span></span><ChevronDown className="hidden size-3.5 sm:block" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-52"><DropdownMenuLabel>My account</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem><User />Profile</DropdownMenuItem><DropdownMenuItem><HelpCircle />Help</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem><LogOut />Sign out</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
        </div>
      </header>
      <main className={cn("mx-auto w-full max-w-[1540px] p-4 sm:p-6 lg:p-8")}>{children}</main>
    </div>
  </div>;
}
