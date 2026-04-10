import { NOTE_PALETTE } from "@/constants/notePalette.js";

export function NoteColorPicker({ currentId, onPick }) {
  return (
    <div
      className="absolute left-0 top-full z-30 mt-1 flex max-w-[220px] flex-wrap gap-2 rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-[#5f6368] dark:bg-[#303134]"
      role="listbox"
      aria-label="Note color"
    >
      {NOTE_PALETTE.map((p) => (
        <button
          key={p.id}
          type="button"
          title={p.label}
          onClick={() => onPick(p.id)}
          className={`h-8 w-8 shrink-0 rounded-full border-2 border-transparent shadow-sm transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 ${p.swatchClass} ${
            p.id === currentId ? "ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-[#303134]" : ""
          }`}
        />
      ))}
    </div>
  );
}
