import React from "react";
import AlbumCarousel from "./AlbumCarousel/AlbumCarousel";
import HomeSlider from "./HomeSlider/HomeSlider";
import TrendingSongs from "./TrendingSongs/TrendingSongs";

function Trending() {
  return (
    <div className="Trending-Wrap">
      <HomeSlider />
      <AlbumCarousel />
      <TrendingSongs />
    </div>
  );
}

export default Trending;
