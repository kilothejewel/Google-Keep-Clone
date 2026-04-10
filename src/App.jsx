import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage.js";
import { Navbar } from "@/components/Navbar.jsx";
import { Sidebar } from "@/components/Sidebar.jsx";
import { NoteInput } from "@/components/NoteInput.jsx";
import { NoteGrid } from "@/components/NoteGrid.jsx";

const STORAGE_KEY = "keep-clone-notes-v1";
const THEME_KEY = "keep-clone-theme";

function createNote({ title, content, color = "default" }) {
  const now = Date.now();
  return {
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `note-${now}-${Math.random().toString(36).slice(2, 9)}`,
    title,
    content,
    color,
    isPinned: false,
    lastModified: now,
  };
}

function noteText(value) {
  return String(value ?? "").toLowerCase();
}

export default function App() {
  const [notes, setNotes] = useLocalStorage(STORAGE_KEY, []);
  const [theme, setTheme] = useLocalStorage(THEME_KEY, "light");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState("masonry");

  const list = Array.isArray(notes) ? notes : [];
  const themeMode = theme === "dark" ? "dark" : "light";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
  }, [themeMode]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const filteredNotes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;
    return list.filter((n) => {
      if (!n || typeof n !== "object") return false;
      return (
        noteText(n.title).includes(q) || noteText(n.content).includes(q)
      );
    });
  }, [list, searchQuery]);

  const dragDisabled = searchQuery.trim().length > 0;

  const handleSaveNote = useCallback(
    (payload) => {
      setNotes((prev) => [
        createNote(payload),
        ...(Array.isArray(prev) ? prev : []),
      ]);
    },
    [setNotes]
  );

  const handleDelete = useCallback(
    (id) => {
      setNotes((prev) =>
        (Array.isArray(prev) ? prev : []).filter((n) => n.id !== id)
      );
    },
    [setNotes]
  );

  const handleUpdateNoteColor = useCallback(
    (id, color) => {
      setNotes((prev) =>
        (Array.isArray(prev) ? prev : []).map((n) =>
          n.id === id ? { ...n, color, lastModified: Date.now() } : n
        )
      );
    },
    [setNotes]
  );

  return (
    <div className="min-h-full bg-white font-sans text-gray-900 dark:bg-[#202124] dark:text-[#e8eaed]">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onMenuClick={() => setSidebarOpen((v) => !v)}
        onRefresh={() => window.location.reload()}
        onToggleView={() =>
          setViewMode((m) => (m === "masonry" ? "list" : "masonry"))
        }
        viewMode={viewMode}
        theme={themeMode}
        onToggleTheme={() => setTheme(themeMode === "dark" ? "light" : "dark")}
      />

      <Sidebar
        mobileOpen={sidebarOpen}
        onCloseMobile={() => setSidebarOpen(false)}
      />

      <main className="min-h-[calc(100%-3.5rem)] bg-white pt-4 pb-16 dark:bg-[#202124] md:pl-[72px]">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
          <NoteInput onSave={handleSaveNote} />
          {filteredNotes.length === 0 ? (
            <p className="text-center text-sm text-gray-500 dark:text-[#9aa0a6]">
              {searchQuery.trim()
                ? "No matching notes."
                : "Notes you add appear here."}
            </p>
          ) : (
            <NoteGrid
              notes={filteredNotes}
              onReorder={setNotes}
              onDelete={handleDelete}
              onUpdateNoteColor={handleUpdateNoteColor}
              dragDisabled={dragDisabled}
              viewMode={viewMode}
            />
          )}
        </div>
      </main>
    </div>
  );
}
