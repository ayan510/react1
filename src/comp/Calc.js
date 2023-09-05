import React, { useState } from 'react'

export default function Calc() {
    const [x, setx] = useState(30)
    const [y, sety] = useState(5)

    function handlex(e) {
        setx(parseInt(e.target.value))
    }
    function handley(e) {
        sety(parseInt(e.target.value))
    }
    return (
        <div>
            X: <input type="number" value={x} onChange={handlex} />
            <br />
            Y: <input type="number" value={y} onChange={handley} />

            <br />Add: {x} + {y} = {x + y}
            <br />Sub: {x} - {y} = {x - y}
            <br />Mul: {x} x {y} = {x * y}
            <br />Div: {x} / {y} = {x / y}
            <br />Rem: {x} % {y} = {x % y}
        </div>
    )
}











import React, { useState } from 'react'

export default function TodoOffline() {
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
    function removeall() {
        setlist([])
    }

    return (
        <div>
            <form onSubmit={additem}>
                <input type="text" value={inp} onChange={(e) => { setinp(e.target.value) }} />
                <button>ADD</button>
            </form>

            <button onClick={removeall}>Remove All</button>
            <hr />

            {
                list.map((item, index) => {
                    return (<p>{index + 1} - {item}</p>)
                })
            }

        </div>
    )
}
