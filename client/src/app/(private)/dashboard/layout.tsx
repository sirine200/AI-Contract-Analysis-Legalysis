import { ProtectedLayout } from "@/components/dashboard/protected-layout";
import DashboardLayout from "@/components/dashboard/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <main className="flex-1 overflow-x-hidden  bg-blue-950 bg-gradient-to-b from-background to-background/80 overflow-y-auto p-6">
          {children}
        </main>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
