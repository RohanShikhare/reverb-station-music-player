import React from "react";

function SlideOne() {
  return (
    <div className="slideBody SlideOne">
      <div className="slideContent">
        <p className="slideTitle">Top Playlists</p>
        <p className="slideDescription">Listen to ASAP Rocky, Kendrick Lamar, and more.</p>
        <p className="slideTagLine">Most Streamed Hip Hop Tracks</p>
        <button className="slidePlay">Play Now</button>
      </div>
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="slideBody SlideTwo">
      <div className="slideContent">
        <p className="slideTitle">New Releases</p>
        <p className="slideDescription">Fresh tracks from your favorite artists.</p>
        <p className="slideTagLine">Stay Updated with the Latest Hits</p>
        <button className="slidePlay">Play Now</button>
      </div>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="slideBody SlideThree">
      <div className="slideContent">
        <p className="slideTitle">Top Albums</p>
        <p className="slideDescription">Discover the best albums across genres.</p>
        <p className="slideTagLine">Critically Acclaimed Collections</p>
        <button className="slidePlay">Play Now</button>
      </div>
    </div>
  );
}

function SlideFour() {
  return (
    <div className="slideBody SlideFour">
      <div className="slideContent">
        <p className="slideTitle">Editor's Picks</p>
        <p className="slideDescription">Handpicked tracks just for you.</p>
        <p className="slideTagLine">Exclusive Recommendations</p>
        <button className="slidePlay">Play Now</button>
      </div>
    </div>
  );
}

export { SlideOne, SlideTwo, SlideThree, SlideFour };
