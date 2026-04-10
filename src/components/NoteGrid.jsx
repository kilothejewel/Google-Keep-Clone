import { useMemo } from "react";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { NoteCard } from "./NoteCard.jsx";

function SortableNote({ note, onDelete, dragDisabled }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: note.id, disabled: dragDisabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`mb-4 break-inside-avoid ${
        dragDisabled ? "" : "cursor-grab active:cursor-grabbing touch-none"
      } ${isDragging ? "opacity-90" : ""}`}
      {...(dragDisabled ? {} : attributes)}
      {...(dragDisabled ? {} : listeners)}
    >
      <NoteCard
        note={note}
        onDelete={onDelete}
        dragDisabled={dragDisabled}
        className={
          isDragging
            ? "shadow-lg ring-1 ring-gray-200 dark:ring-[#5f6368]"
            : ""
        }
      />
    </div>
  );
}

export function NoteGrid({ notes, onReorder, onDelete, dragDisabled, viewMode }) {
  const ids = useMemo(() => notes.map((n) => n.id), [notes]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (!over || active.id === over.id) return;
        const oldIndex = ids.indexOf(active.id);
        const newIndex = ids.indexOf(over.id);
        if (oldIndex === -1 || newIndex === -1) return;
        onReorder(arrayMove(notes, oldIndex, newIndex));
      }}
    >
      <SortableContext items={ids} strategy={rectSortingStrategy}>
        <div
          className={
            viewMode === "list"
              ? "columns-1 gap-4"
              : "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
          }
          role="list"
        >
          {notes.map((note) => (
            <SortableNote
              key={note.id}
              note={note}
              onDelete={onDelete}
              dragDisabled={dragDisabled}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
