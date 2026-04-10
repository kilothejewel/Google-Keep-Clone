import { useCallback, useEffect, useRef, useState } from "react";
import { NoteColorPicker } from "./NoteColorPicker.jsx";

function hasText(title, content) {
  return Boolean(title.trim() || content.trim());
}

export function NoteInput({ onSave }) {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [draftColor, setDraftColor] = useState("default");
  const [pickerOpen, setPickerOpen] = useState(false);
  const rootRef = useRef(null);
  const colorAnchorRef = useRef(null);

  const trySaveAndClose = useCallback(() => {
    if (hasText(title, content)) {
      onSave({
        title: title.trim(),
        content: content.trim(),
        color: draftColor,
      });
    }
    setTitle("");
    setContent("");
    setDraftColor("default");
    setPickerOpen(false);
    setExpanded(false);
  }, [content, draftColor, onSave, title]);

  useEffect(() => {
    if (!expanded) return;

    const onPointerDown = (event) => {
      if (!rootRef.current) return;
      if (rootRef.current.contains(event.target)) return;
      trySaveAndClose();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [expanded, trySaveAndClose]);

  useEffect(() => {
    if (!pickerOpen) return;
    const close = (e) => {
      if (colorAnchorRef.current?.contains(e.target)) return;
      setPickerOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [pickerOpen]);

  return (
    <div className="mx-auto mb-6 max-w-xl px-1">
      <div
        ref={rootRef}
        className={`rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-[#5f6368] dark:bg-[#303134] dark:hover:shadow-md ${
          expanded ? "shadow-md dark:shadow-lg dark:shadow-black/30" : ""
        }`}
      >
        {!expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="flex h-12 w-full items-center rounded-lg px-4 text-left text-sm text-gray-600 hover:bg-gray-100 dark:text-[#9aa0a6] dark:hover:bg-[#3c4043]"
          >
            Take a note…
          </button>
        ) : (
          <div className="relative flex flex-col p-3 pt-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="mb-2 border-0 bg-transparent text-base font-medium text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-[#e8eaed] dark:placeholder-[#9aa0a6]"
              aria-label="Note title"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Take a note…"
              rows={4}
              className="min-h-[100px] resize-none border-0 bg-transparent text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-0 dark:text-[#e8eaed] dark:placeholder-[#9aa0a6]"
              aria-label="Note content"
            />
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="relative" ref={colorAnchorRef}>
                <button
                  type="button"
                  onClick={() => setPickerOpen((o) => !o)}
                  className="rounded px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:text-[#9aa0a6] dark:hover:bg-[#3c4043]"
                  aria-expanded={pickerOpen}
                  aria-haspopup="listbox"
                >
                  Color
                </button>
                {pickerOpen ? (
                  <NoteColorPicker
                    currentId={draftColor}
                    onPick={(id) => {
                      setDraftColor(id);
                      setPickerOpen(false);
                    }}
                  />
                ) : null}
              </div>
              <button
                type="button"
                onClick={trySaveAndClose}
                className="rounded px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
