import axios from 'axios'
import { debounce } from 'lodash'
import React, { FC, useState } from 'react'
import SearchField from 'react-search-field'

const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=6d5bb630'

const Input: FC = () => {
  const [search, setSearch] = useState('')

  async function searching() {
    axios.get(api + '&&t=' + search).then(async (res) => {
      console.log(res)
    })
  }

  const handleOnChange = debounce(async (text: string) => {
    setSearch(text)
    await searching()
  }, 1000)

  return (
    <div>
    <div>{search}</div>
    <SearchField
      placeholder='movie name...'
      onChange={handleOnChange}
    />
    </div>
  )

}

export default Input
