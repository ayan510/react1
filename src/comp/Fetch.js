import React, { useEffect, useState } from 'react'
import './Fetch.css'
export default function Fetch() {
    const [list, setlist] = useState([])
    useEffect(() => {
        const url = 'https://haysky.com/wp-json/wp/v2/posts?_fields=id,title'
        fetch(url)
            .then(x => x.json())
            .then(data => {
                setlist(data)
            })
    }, [])

    return (


        <div>
            <p id='head'>HAYSKY'S INFORMATIONAL ANALYSIS</p>
            {list.length ?

                list.map((item, index) => {
                    return (<p><b>{item.title.rendered}</b></p>)
                })


                :

                <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png" alt="Loading..." />
            }
        </div >
    )
}

