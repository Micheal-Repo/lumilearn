//components
import { Input, Button } from "@/components";

//icon
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <>
      <form>
        <div className="relative max-md:hidden">
          <Input
            type="text"
            placeholder="Search courses..."
            className="pl-10 text-sm"
          />
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
        </div>
      </form>
    </>
  );
}
