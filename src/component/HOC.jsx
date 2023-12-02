import {React , useState } from 'react'

const HOC = (Wrapped) => {
    function Hoc1()
    {
        let [count,setcount]=useState(0)
        let incre=()=>{
            setcount(count+1)
        }
        return(
            <div>
                <Wrapped data={count} abc={incre} />
            </div>
        )
    }
        return Hoc1
}

export default HOC