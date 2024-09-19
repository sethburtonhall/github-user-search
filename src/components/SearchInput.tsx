import { useRef, useEffect } from "react";

import { Input } from "@/components/ui/input";

function useSearchShortcut(searchInputRef: React.RefObject<HTMLInputElement>) {
  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [searchInputRef]);
}

export function SearchInput() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  useSearchShortcut(searchInputRef);

  return (
    <Input
      type="search"
      name="query"
      placeholder="⌘+K"
      hx-get="/partials/users/results"
      hx-trigger="keyup changed delay:300ms"
      hx-target="#users-list"
      hx-swap="innerHTML transition:true"
      className="max-w-sm md:ml-auto"
      ref={searchInputRef}
    />
  );
}
