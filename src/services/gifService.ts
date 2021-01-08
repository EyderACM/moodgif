import axios from "axios";

interface getGif {
  query: String;
}

const gifService = () => {
  const getGifs = async ({ query }: getGif) => {
    const { data } = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: process.env.NEXT_PUBLIC_GIPHY_PUBLIC_KEY,
        q: query,
        limit: 50,
        offset: 0,
        rating: "r",
        lang: "en",
      },
    });

    return data;
  };

  return { getGifs };
};

export default gifService();
