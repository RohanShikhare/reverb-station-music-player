"use client"
import React from 'react'
import AlbumCarousel from '../AlbumCarousel/AlbumCarousel'
import SongsList from '../SongsList/SongsList'
import { useSelector } from 'react-redux'

function Favourites() {
    const {FavouriteSongsList} = useSelector((store)=> store.favourite)
  return (
    <div className='page-Wrap'>
    <AlbumCarousel />
      <SongsList what={FavouriteSongsList} title={"Favourite Tracks"}  />
    </div>
  )
}

export default Favourites