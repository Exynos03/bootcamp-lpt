import React, { useEffect } from 'react'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { useState } from 'react'

const appSettings = {
    databaseURL: "https://landing-page-c8e30-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const dates = ref(database, "Date")

export default function Slot() {
    const [data, setData] = useState([])
    const[count, setCount] = useState(false)
    const[time, setTime] = useState([])
    const [selection, setSelection] = useState({});
    const[replace, setReplace] = useState([])


    useEffect(() => {
        onValue(dates, function(snapshot){
            if(snapshot.exists()){
                const sortedData = Object.entries(snapshot.val()).sort((a, b) => {
                    const dateA = new Date(a[1].Date);
                    const dateB = new Date(b[1].Date);
                    return dateA - dateB;
                })

                setData(sortedData)
            }
        })
    }, [])

    function handleShow(index, id){
        data.filter((item) => {
            if(item[0] === id){
                setTime(item[1].Slots)
                setCount(true)
            }
        })
        // if(value === '1'){
            setReplace(prev => ({
                ...prev,
                [index]: 'Update'
            }))
        // }
        console.log(index)
    }

    function handleValueChange(index, value){
        setSelection(prev => ({
            ...prev,
            [index]: value
        }))


    }

  return (
    <div className='slot-table'>
        <table className='slot-1'>
            <caption>
                Slot Dashboard
            </caption>

            <thead>
                <tr className='table-headings'>
                    <th>S No</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className='info-table'>
                        <td>{index+1}</td>
                        <td>{item[1].Date}</td>
                        <td>
                            <button onClick={() => handleShow(index, item[0])}>{!replace ? replace : 'Get Slots'}</button>
                        </td>                
                    </tr>
                ))}
            </tbody>
        </table>

        {time && count>=1 && 
        <table className='slot-2'>
            <thead>
                <tr>
                    <th>Slot</th>
                    <th>Value</th>
                </tr>
            </thead>

            <tbody>
                {time.map((item,index) => (
                    <tr key={index}>
                        {item.value === '0' && <td>{item.label}</td>}

                        {item.value === '0' &&
                        <td>
                            <select value={selection[index] || '0'} onChange={(e) => handleValueChange(index, e.target.value)}>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                            </select>
                        </td>}
                    </tr>
                ))}
            </tbody>

        </table>}

    </div>
  )
}
