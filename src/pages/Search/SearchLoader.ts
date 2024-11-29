import SearchName from "@/api/quries/SearchName";
import type { Average } from "@/api/types/Average";

export interface SearchLoaderResult {
  searchResult: Average[];
}

export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("Search term must be provided");
  }
  const result = await SearchName(term);
  // console.log(res);
  return {
    searchResult: result,
  };
}
