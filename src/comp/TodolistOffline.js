import React, { useState } from 'react'

export default function TodolistOffline() {
    let data = []
    if (localStorage.getItem('todo')) {
        data = JSON.parse(localStorage.getItem('todo'))
    }
    const [list, setlist] = useState(data)
    const [inp, setinp] = useState('')
    function additem(e) {
        e.preventDefault()
        const newlist = [...list]
        newlist.push(inp)
        setlist(newlist)
        localStorage.setItem('todo', JSON.stringify(newlist))
        setinp('')
    }
    function Removeall() {
        setlist([])
        localStorage.setItem('todo', JSON.stringify([]))
    }

    return (

        <div>
            <form onSubmit={additem}>
                <input type="text" value={inp} onChange={(e) => { setinp(e.target.value) }} />
                <button>ADD</button>

            </form>
            <button onClick={Removeall}>RemoveALL</button>
            {
                list.map((item, index) => {
                    return (<p>{item}</p>)
                })
            }
        </div>
    )
}
