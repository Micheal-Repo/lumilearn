"use client";
import Form from "next/form";
import {useRouter} from "next/navigation"

//components
import { Input, Button } from "@/components";

//states
import { useMobileSearch } from "@/states";

//icon
import { Search } from "lucide-react";
import { MdClose } from "react-icons/md";

export function SearchInput() {
  return (
    <>
      <Form action="/search" className="relative max-md:hidden">
        <Input
          name="query"
          type="text"
          placeholder="Search courses..."
          className="pl-10 text-sm"
        />

        <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
      </Form>
    </>
  );
}

export function SearchInputMobile() {
  const { isSearch, setIsSearch } = useMobileSearch((state) => state);
 
  const router = useRouter()
 
 function handleClose(){
   setIsSearch(false)
   router.back()
 }


  return (
    <>
      <Button
        onClick={() => setIsSearch(true)}
        variant="outline"
        size="icon"
        className="md:hidden"
      >
        <Search className="text-muted-foreground" />
      </Button>
      {isSearch && (
        <div className="absolute inset-0 z-20 flex justify-between items-center gap-8 bg-background px-6">
         <Form action="/search" className="flex-1 relative">
            <Input
              name="query"
              type="text"
              placeholder="Search courses..."
              className="text-sm w-full py-3"
            />
            <button type="submit" className="absolute top-1/2 right-3 -translate-y-1/2 text-green-400 border-none no-underline">
              search
            </button>
          </Form>

          <MdClose
            onClick={handleClose}
            size={26}
            className="text-muted-foreground hover:text-foreground transition-all duration-300"
          />
        </div>
      )}
    </>
  );
}
