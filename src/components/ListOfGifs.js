import React, { useEffect, useState } from 'react'
import getGifsApi from '../services/getGifsApi'
import Gif from './Gif'

export default function ListOfGifs({ keyword }) {
    // const { keyword } = params;
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifsApi({ keyword }).then(gif => {
            setGifs(gif)
            console.log(gif);
        })
    }, [keyword])

    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    url={url}
                    title={title}
                    id={id}
                />
            )
        }
    </div>
}