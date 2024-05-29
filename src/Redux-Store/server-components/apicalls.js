import { useDispatch } from "react-redux";
import { setTrendingSongs } from "../slices/TrendingSlice";

export const fetchTrendingSongs = () => async () => {
  try {
    const response = await fetch(
      "https://api.jamendo.com/v3.0/tracks/?client_id=dda613cd"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trending songs");
    }

    const data = await response.json();

    useDispatch(setTrendingSongs(data));
    console.log(data);
  } catch (error) {
    console.error("Error fetching trending songs:", error);
  }
};
