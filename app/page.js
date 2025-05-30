'use client'

import Img from './img.js'
import search from './search.js'
import { useState } from 'react'

const all = [['S', '#fe769b'], ['A', '#ffffa6'], ['B', '#9df79d'], ['C', '#76f8f8'], 
  ['D', '#9998fe'], ['E', '#ffbafd'], ['F', '#989898']]

export default function Page() {
  const [albums, $albums] = useState([])
  const [d, $d] = useState(all.slice(0, 4))
  const [boxItems, $boxItems] = useState([])
  const [image, $image] = useState()
  const [type, $type] = useState('ANIME')

  const onChange = async (q) => {
    const albums = await search(q, type)
    $albums(albums)
  }

  const add = () => {
    $d(all.slice(0, d.length + 1))
  }

  const rem = () => {
    $d(d.slice(0, d.length - 1))
  }

  const onDrop = (i) => {
    const album = image
    var bx = [...boxItems]
    bx = bx.map(im => im ? im.filter(a => a !== album) : [])
    if (!bx[i]) bx[i] = []
    bx[i].push(album)
    $boxItems(bx)
  }

  const dropBack = () => {
    const album = image
    var bx = [...boxItems]
    bx = bx.map(im => im ? im.filter(a => a !== album) : [])
    $boxItems(bx)
  }

  const allowDrop = (e) => e.preventDefault()

  return (
    <div id='app'>
      <div className='boxes'>
        {d.map(([name, color], i) => 
          <div 
            className='box' key={i}
            onDrop={() => onDrop(i)}
            onDragOver={allowDrop}
          >
            <div className='name' style={{backgroundColor: color}}>
              {name}
            </div>
            <div className='items'>
              {(boxItems[i] || []).map(image =>
                <img className='album' src={image}
                  onDragStart={o => {
                    $image(image)
                  }} 
                />
              )}
            </div>
          </div>
        )}
        <div className='buttons'>
          {d.length >= 7 ? <></> : <button className='button' onClick={add}>add</button>}
          {d.length <= 0 ? <></> : <button className='button' onClick={rem}>rem</button>}
        </div>
      </div>

      <div 
        className='search'
        onDrop={() => dropBack()}
        onDragOver={allowDrop}
      >
        <input
          className='bar'
          placeholder='Search'
          onKeyUp={o => o.keyCode === 13 ? onChange(o.target.value) : null}
        />
        <div className='tags'>
          <button className='tag' onClick={() => $type('ANIME')}
            style={type !== 'ANIME' ? {backgroundColor: 'black'} : {}}>anime</button>
          <button className='tag' onClick={() => $type('MANGA')}
            style={type === 'ANIME' ? {backgroundColor: 'black'} : {}}>manga</button>
        </div>
        <div className='items'>
          {albums ? albums.map(album => 
            <div
              key={album}
              className='album'
              onDragStart={o => {
                $image(album.coverImage.extraLarge)
              }}
            >
              <Img url={album.coverImage.extraLarge} />
              <div className='name'>
                {album.title.english || album.title.romaji}
              </div>
            </div>
          ): 'Nothing here :/'}
        </div>
      </div>
    </div>
  )
}
