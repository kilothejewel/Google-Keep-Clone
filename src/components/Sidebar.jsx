import iconNotes from "@/assets/lightbulb_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import iconReminders from "@/assets/reminders_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import iconLabels from "@/assets/edit_labels_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import iconArchive from "@/assets/archive_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import iconTrash from "@/assets/trash_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

const items = [
  { id: "notes", label: "Notes", iconSrc: iconNotes, selected: true },
  { id: "reminders", label: "Reminders", iconSrc: iconReminders, selected: false },
  { id: "labels", label: "Labels", iconSrc: iconLabels, selected: false },
  { id: "archive", label: "Archive", iconSrc: iconArchive, selected: false },
  { id: "trash", label: "Trash", iconSrc: iconTrash, selected: false },
];

const sideIcon =
  "h-6 w-6 shrink-0 object-contain [filter:brightness(0)_saturate(100%)] opacity-70";

export function Sidebar({ mobileOpen, onCloseMobile }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/20 transition md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
        onClick={onCloseMobile}
      />
      <aside
        className={`group fixed bottom-0 left-0 top-14 z-40 flex flex-col overflow-hidden border-r border-gray-200 bg-white py-2 transition-[width,transform] duration-200 ease-out md:w-[72px] md:hover:w-56 ${
          mobileOpen
            ? "w-56 translate-x-0"
            : "w-[72px] -translate-x-full md:translate-x-0"
        }`}
        aria-label="Navigation"
      >
        <nav className="flex flex-col gap-0.5 px-2">
          {items.map(({ id, label, iconSrc, selected }) => (
            <button
              key={id}
              type="button"
              onClick={onCloseMobile}
              className={`flex h-12 w-full items-center gap-5 rounded-r-full pl-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 ${
                selected
                  ? "bg-[#feefc3] hover:bg-[#feefc3]"
                  : ""
              }`}
            >
              <img src={iconSrc} alt="" className={sideIcon} aria-hidden />
              <span
                className={`whitespace-nowrap transition-opacity duration-200 ${
                  mobileOpen
                    ? "opacity-100"
                    : "opacity-0 md:opacity-0 md:group-hover:opacity-100"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
