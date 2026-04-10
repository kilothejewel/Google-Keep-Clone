import { NoteCard } from "./NoteCard.jsx";

export function NoteGrid({ notes, onDelete, viewMode }) {
  const col =
    viewMode === "list"
      ? "columns-1 gap-4"
      : "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4";

  return (
    <div className={col} role="list">
      {notes.map((note) => (
        <div key={note.id} className="mb-4 break-inside-avoid">
          <NoteCard note={note} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}
