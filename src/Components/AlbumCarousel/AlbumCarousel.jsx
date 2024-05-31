"use client";
import React, { useState, useRef, useEffect } from "react";
import card1 from "../../Assets/img/trending1.jpg";
import card2 from "../../Assets/img/trending2.jpg";
import card3 from "../../Assets/img/trending3.jpg";
import card4 from "../../Assets/img/trending4.jpg";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function AlbumCarousel() {
  let cards = [
    {
      img: card1,
      title: "Card 1",
      author: "Linkin Park",
    },
    {
      img: card2,
      title: "Card 2",
      author: "The Weeknd",
    },
    {
      img: card3,
      title: "Card 3",
      author: "One Direction",
    },
    {
      img: card4,
      title: "Card 4",
      author: "John White",
    },
    {
      img: card1,
      title: "Card 5",
      author: "Linkin Park",
    },
    {
      img: card2,
      title: "Card 6",
      author: "The Weeknd",
    },
    {
      img: card3,
      title: "Card 7",
      author: "One Direction",
    },
    {
      img: card4,
      title: "Card 8",
      author: "John White",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);
  const cardCount = cards.length;

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [startIndex]);

  const handlePrev = () => {
    console.log("Prev clicked");
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    console.log("Next clicked");
    if (startIndex < cardCount - 1) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-topbar">
        <p className="slider-title">Albums You've Never Heard Before</p>
        <div className="buttons">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            <FaArrowCircleLeft />
          </button>
          <button onClick={handleNext} disabled={startIndex === cardCount - 5}>
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${startIndex * cardWidth}px)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="card" ref={index === 0 ? cardRef : null}>
            <Image
              height={500}
              width={500}
              src={card.img}
              alt={`Card ${index + 1}`}
            />
            <span className="album-title">{card.title}</span>
            <span className="album-author">{card.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumCarousel;
