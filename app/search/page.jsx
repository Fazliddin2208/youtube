import SearchResults from "@/components/Content/Videos/SearchResults";
import axios from "axios";

async function getSearchedVideos(query) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const result = await axios
    .get(`${apiUrl}/search?q=${query}&maxResults=50&key=${apiKey}`)
    .then((res) => {
      return res?.data?.items;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
}

export default async function Search(context) {
  const results = await getSearchedVideos(context?.searchParams?.q);
  return (
    <div>
      <SearchResults results={results} />
    </div>
  );
}
