import React, { useState } from 'react'

export default function Calc2() {
    const [x, setx] = useState(2)
    const [y, sety] = useState(2)

    function handlex(e) {
        setx(parseInt(e.target.value ? e.target.value : 0))
    }
    function handley(e) {
        sety(parseInt(e.target.value ? e.target.value : 0))
    }
    return (

        <div>
            <input type="number" value={x} onChange={handlex} />
            <br />
            <input type="number" value={y} onChange={handley} />
            <br />
            Add :{x}+{y} = {x + y}
            <br />
            Sub :{x}-{y} = {x - y}
            <br />

            Mul :{x}X{y} = {x * y}
            <br />

            Div :{x}/{y} = {x / y}
            <br />

            Rem :{x}%{y} = {x % y}
        </div>
    )
}
