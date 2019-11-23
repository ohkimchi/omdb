import React, { FC, useContext } from 'react'
import { AppContext } from '../App/appReducer'

export const Tile: FC = () => {
  const { state } = useContext(AppContext)
  const { data } = state
  const { Poster, Title, Ratings, Year } = data
  return (
    <div>
      <img src={Poster} alt=''/>
      <div>{Title}</div>
      <div>{Ratings}</div>
      <div>{Year}</div>
    </div>
  )
}
