import { useEffect, useRef, useState } from "react";
import { GripVertical, Trash2 } from "lucide-react";
import { surfaceClassForNoteColor } from "@/constants/notePalette.js";
import { NoteColorPicker } from "./NoteColorPicker.jsx";

export function NoteCard({
  note,
  onDelete,
  onUpdateNoteColor,
  className = "",
  dragDisabled,
}) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const anchorRef = useRef(null);
  const surface = surfaceClassForNoteColor(note.color ?? "default");

  useEffect(() => {
    if (!pickerOpen) return;
    const close = (e) => {
      if (anchorRef.current?.contains(e.target)) return;
      setPickerOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [pickerOpen]);

  return (
    <article
      className={`group relative break-inside-avoid rounded-lg border shadow-sm transition-shadow hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/20 ${surface} ${className}`}
    >
      <div className="flex items-start gap-1 p-3 pb-2">
        {!dragDisabled && (
          <span
            className="mt-0.5 -ml-1 inline-flex shrink-0 rounded p-1 text-gray-600 opacity-70 dark:text-[#e8eaed]"
            aria-hidden
          >
            <GripVertical className="h-4 w-4" strokeWidth={2} />
          </span>
        )}
        <div className="min-w-0 flex-1">
          {note.title ? (
            <h3 className="text-sm font-medium">{note.title}</h3>
          ) : null}
          <p className="mt-1 whitespace-pre-wrap text-sm">{note.content ?? ""}</p>
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-2 px-3 pb-3 transition-opacity max-md:opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <div className="relative" ref={anchorRef}>
          <button
            type="button"
            onClick={() => setPickerOpen((o) => !o)}
            className="rounded px-2 py-1 text-xs font-medium opacity-90 hover:bg-black/5 dark:hover:bg-white/10"
            aria-expanded={pickerOpen}
            aria-haspopup="listbox"
          >
            Color
          </button>
          {pickerOpen ? (
            <NoteColorPicker
              currentId={note.color ?? "default"}
              onPick={(id) => {
                onUpdateNoteColor(note.id, id);
                setPickerOpen(false);
              }}
            />
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => onDelete(note.id)}
          className="rounded-full p-2 opacity-90 hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </article>
  );
}
