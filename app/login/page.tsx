import React, { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-accent/20 px-4">
      <Suspense fallback={<div className="flex items-center gap-2"><Loader2 className="animate-spin" /> Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
