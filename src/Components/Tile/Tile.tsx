import React, { FC, useContext } from 'react'
import { CallOut, H, Subtitle } from '../../App/App'
import { AppContext } from '../../App/appReducer'
import './_title.css'

export const Tile: FC = () => {
  const { state } = useContext(AppContext)
  const { Poster, Title, Ratings, Year } = state
  return (
    <div className='tile'>
      <div><img className='image' src={Poster} alt=''/></div>
      <div className='info'>
        <H color='primary'>{Title}</H>
        {Ratings && Ratings.map((r) => {
          const { Source, Value } = r
          return (
            <div>
              <Subtitle>{Value} ({Source})</Subtitle>
            </div>
          )
        })}
        <CallOut color='secondary'>{Year}</CallOut>
      </div>
    </div>
  )
}
