import axios from 'axios'
import React, { FC, useContext, useEffect } from 'react'
import { CallOut, H, Subtitle } from '../../App/appReducer'
import { ActionType, AppContext } from '../../App/appReducer'
import './_title.css'

const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=6d5bb630'

export const Tile: FC = () => {
  const { state, dispatch } = useContext(AppContext)
  const { Poster, Title, Ratings, Year, search } = state

  useEffect(() => {
    axios.get(api + '&&t=' + search).then(async (res) => {
      const { data } = res
      dispatch({
        data,
        type: ActionType.SET_DATA
      })
    })
  }, [search])

  return (
    <div className='tile'>
      <div><img className='image' src={Poster} alt=''/></div>
      <div className='info'>
        <H color='primary'>{Title}</H>
        {Ratings && Ratings.map((r, i) => {
          const { Source, Value } = r
          return (
            <div key={`${r}-${i}`}>
              <Subtitle>{Value} ({Source})</Subtitle>
            </div>
          )
        })}
        <CallOut color='secondary'>{Year}</CallOut>
      </div>
    </div>
  )
}
