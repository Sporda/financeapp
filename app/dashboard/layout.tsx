import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-1 md:overflow-y-auto">{children}</div>
    </div>
  );
}
