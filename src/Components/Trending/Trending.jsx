"use client"
import React, { useEffect } from "react";
import AlbumCarousel from "../AlbumCarousel/AlbumCarousel";
import HomeSlider from "../HomeSlider/HomeSlider";
import SongsList from "../SongsList/SongsList";
import { setTrendingSongs } from "@/Redux-Store/slices/TrendingSlice";
import { useDispatch, useSelector } from "react-redux";
function Trending() {
  const { trendingSongs } = useSelector((state) => state.trending);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTrendingSongs = async () => {
      try {
        const response = await fetch(
          "https://api.jamendo.com/v3.0/users/tracks/?client_id=dda613cd&format=jsonpretty&limit=49&order=rating_desc+updatedate_desc&id=972174"
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(setTrendingSongs(data.results[0].tracks));
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrendingSongs();
  }, [dispatch]);
  return (
    <div className="page-Wrap">
      <HomeSlider />
      <AlbumCarousel />
      <SongsList what={trendingSongs} title={"Discover Underated Tracks"} button={"view-button"} />
    </div>
  );
}

export default Trending;
