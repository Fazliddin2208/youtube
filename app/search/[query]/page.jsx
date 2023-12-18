import SearchResults from "@/components/Content/Videos/SearchResults";
import axios from "axios";

async function getSearchedVideos(context) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log(context);

  const result = await axios
    .get(`${apiUrl}/search?q=${query}&maxResults=50&key=${apiKey}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
}

export default async function VideoSearch() {
  const results = await getSearchedVideos();
  return (
    <div>
      Vide Search
      <SearchResults results={results.items} />
    </div>
  );
}
