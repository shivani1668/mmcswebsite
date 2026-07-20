import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Image as ImageIcon, FileText, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's what's happening with the school website today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardStatCard
          title="New Applications"
          value="12"
          trend="+3 this week"
          icon={<Users className="text-blue-600" />}
          bgColor="bg-blue-50"
        />
        <DashboardStatCard
          title="Inquiries"
          value="45"
          trend="+5 today"
          icon={<MessageSquare className="text-green-600" />}
          bgColor="bg-green-50"
        />
        <DashboardStatCard
          title="Gallery Items"
          value="128"
          trend="+12 this month"
          icon={<ImageIcon className="text-purple-600" />}
          bgColor="bg-purple-50"
        />
        <DashboardStatCard
          title="Page Views"
          value="2.4k"
          trend="+15%"
          icon={<TrendingUp className="text-orange-600" />}
          bgColor="bg-orange-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Submissions */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Admission Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center font-bold text-primary">JD</div>
                    <div>
                      <p className="font-bold text-sm text-primary">John Doe {i}</p>
                      <p className="text-xs text-slate-400">Applied for Class 5th • 2 hours ago</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Pending</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <QuickActionButton label="Add News/Announcement" />
            <QuickActionButton label="Upload Gallery Photos" />
            <QuickActionButton label="Edit Principal's Message" />
            <QuickActionButton label="Update Fee Structure" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DashboardStatCard({ title, value, trend, icon, bgColor }: { title: string; value: string; trend: string; icon: React.ReactNode; bgColor: string }) {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl ${bgColor}`}>
            {React.cloneElement(icon as React.ReactElement<any>, { className: "h-6 w-6" })}
          </div>
          <span className="text-xs font-medium text-slate-400">{trend}</span>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-primary">{value}</h3>
          <p className="text-sm text-slate-500 font-medium">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function QuickActionButton({ label }: { label: string }) {
  return (
    <button className="w-full text-left p-4 rounded-xl border border-slate-100 hover:bg-primary hover:text-white transition-all duration-300 font-medium text-sm text-primary flex items-center justify-between group">
      {label}
      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
