import { Grid3x3, Menu, Moon, Sun } from "lucide-react";
import logoKeep from "@/assets/google-keep-icon.svg";
import iconSearch from "@/assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import iconRefresh from "@/assets/refresh_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import iconSettings from "@/assets/settings_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

/** Material-style SVGs use #e3e3e3; darken on light backgrounds, native in dark mode */
const toolbarImg =
  "h-5 w-5 shrink-0 object-contain [filter:brightness(0)_saturate(100%)] dark:[filter:none] opacity-80 dark:opacity-100";

export function Navbar({
  searchQuery,
  onSearchChange,
  onMenuClick,
  onRefresh,
  onToggleView,
  onToggleTheme,
  viewMode,
  theme,
}) {
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-[#5f6368] dark:bg-[#202124]">
      <div className="flex h-14 min-w-0 items-center gap-1.5 px-2 sm:gap-3 sm:px-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-full p-2.5 text-gray-700 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043] md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={onMenuClick}
          className="hidden rounded-full p-2.5 text-gray-700 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043] md:inline-flex"
          aria-label="Main menu"
        >
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <div className="flex min-w-0 shrink-0 items-center gap-2">
          <img
            src={logoKeep}
            alt=""
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="hidden font-medium text-gray-600 sm:inline text-[22px] tracking-tight dark:text-[#e8eaed]">
            Keep
          </span>
        </div>

        <div className="mx-auto flex min-w-0 max-w-2xl flex-1 justify-center px-0.5 sm:px-4">
          <div className="relative w-full min-w-0 max-w-xl">
            <img
              src={iconSearch}
              alt=""
              className={`pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 object-contain [filter:brightness(0)_saturate(100%)] dark:[filter:none] opacity-50 dark:opacity-70`}
              aria-hidden
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search"
              className="h-12 w-full rounded-lg border border-transparent bg-gray-100 py-2 pl-11 pr-4 text-sm text-gray-800 shadow-none outline-none transition hover:bg-gray-100 focus:bg-white focus:shadow-[0_1px_1px_rgba(65,69,73,0.3),0_1px_3px_1px_rgba(65,69,73,0.15)] dark:bg-[#303134] dark:text-[#e8eaed] dark:placeholder-[#9aa0a6] dark:hover:bg-[#3c4043] dark:focus:bg-[#303134] dark:focus:shadow-[0_1px_2px_rgba(0,0,0,0.4)] sm:h-11"
              aria-label="Search notes"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full p-2.5 text-gray-700 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Moon className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
          <button
            type="button"
            onClick={onRefresh}
            className="rounded-full p-2.5 text-gray-700 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043]"
            aria-label="Refresh"
          >
            <img src={iconRefresh} alt="" className={toolbarImg} />
          </button>
          <button
            type="button"
            className="hidden rounded-full p-2.5 text-gray-700 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043] sm:inline-flex"
            aria-label="Settings"
          >
            <img src={iconSettings} alt="" className={toolbarImg} />
          </button>
          <button
            type="button"
            onClick={onToggleView}
            className="rounded-full p-2.5 text-gray-700 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043]"
            aria-label={viewMode === "masonry" ? "List view" : "Grid view"}
          >
            <Grid3x3 className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
}
