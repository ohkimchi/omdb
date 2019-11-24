import React, { FC, useContext } from 'react'
import { AppContext } from '../App/appReducer'

export const Tile: FC = () => {
  const { state } = useContext(AppContext)
  const { Poster, Title, Ratings, Year } = state
  return (
    <div>
      <img src={Poster} alt=''/>
      <div>{Title}</div>
      {Ratings.map((r) => {
        const { Source, Value } = r
        return (
          <div>
            <div>{Source}</div>
            <div>{Value}</div>
          </div>
        )
      })}
      <div>{Year}</div>
    </div>
  )
}
