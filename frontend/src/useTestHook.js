import React, { useState } from 'react'



const useTestHook = () => {
    const [count, setCount] = useState(0)
    function add() {
        setCount(count + 1)
    }
    function sub() {
        if (count === 0) return setCount(0)
        setCount(count - 1)
    }
    return [count, add, sub]

}

export default useTestHook