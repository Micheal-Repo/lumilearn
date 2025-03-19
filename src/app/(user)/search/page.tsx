import { Search } from "lucide-react";
//import { getSearchResults } from '@/lib/search'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const search = (await searchParams).query;

  return (
    <div className="w-screen bg-background">
      <div className="container padding-sp pt-[2rem] pb-10 mz-auto">
        <div className="flex items-center gap-2 mt-[4rem]">
          <Search size={28} />
          <div className="flex flex-col text-left">
            <h2 className="text-2xl font-bold">Search Results</h2>
            <p className="text-muted-foreground">
              found 0 results for {search}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
