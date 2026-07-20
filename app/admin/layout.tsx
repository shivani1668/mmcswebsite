import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: <LayoutDashboard className="h-5 w-5" /> },
  { name: "Pages Content", href: "/admin/pages", icon: <FileText className="h-5 w-5" /> },
  { name: "Gallery", href: "/admin/gallery", icon: <ImageIcon className="h-5 w-5" /> },
  { name: "Admission Forms", href: "/admin/admissions", icon: <Users className="h-5 w-5" /> },
  { name: "Contact Messages", href: "/admin/messages", icon: <MessageSquare className="h-5 w-5" /> },
  { name: "Settings", href: "/admin/settings", icon: <Settings className="h-5 w-5" /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-primary font-bold">M</div>
          <span className="font-bold tracking-tight">MMCS ADMIN</span>
        </div>

        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400 group-hover:text-secondary transition-colors">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/10 p-3">
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-h-screen">
        <header className="h-16 bg-white border-b sticky top-0 z-20 flex items-center justify-between px-8">
          <h2 className="font-semibold text-primary">Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-primary">Admin User</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Administrator</p>
            </div>
            <div className="w-10 h-10 bg-accent rounded-full border border-primary/10 flex items-center justify-center font-bold text-primary">A</div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
