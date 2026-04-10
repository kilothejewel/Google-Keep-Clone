import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar.jsx";
import { Sidebar } from "@/components/Sidebar.jsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState("masonry");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="min-h-full bg-white font-sans text-gray-900">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onMenuClick={() => setSidebarOpen((v) => !v)}
        onRefresh={() => window.location.reload()}
        onToggleView={() =>
          setViewMode((m) => (m === "masonry" ? "list" : "masonry"))
        }
        viewMode={viewMode}
      />
      <Sidebar
        mobileOpen={sidebarOpen}
        onCloseMobile={() => setSidebarOpen(false)}
      />
      <main className="min-h-[calc(100%-3.5rem)] bg-white pt-4 pb-16 md:pl-[72px]">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6" />
      </main>
    </div>
  );
}
