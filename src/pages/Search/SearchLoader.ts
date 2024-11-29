import SearchName from "@/api/quries/SearchName";

export async function searchLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("Search term must be provided");
  }
  const res = await SearchName(term);
  console.log(res);
  return {
    searchResult: res,
  };
}
