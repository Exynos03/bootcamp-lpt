import React, { useEffect } from 'react'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { useState } from 'react'

const appSettings = {
    databaseURL: "https://landing-page-c8e30-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const dates = ref(database, "Date")

let newId = ''
export default function Slot() {
    const [data, setData] = useState([])
    const [saved, setSaved] = useState([])
    const[count, setCount] = useState(0)
    const[time, setTime] = useState([])
    const [selection, setSelection] = useState([])

    const [changedData , setChangedData] = useState([])

    useEffect(() => {
        onValue(dates, function(snapshot){
            if(snapshot.exists()){
                const sortedData = Object.entries(snapshot.val()).sort((a, b) => {
                    const dateA = new Date(a[1].Date)
                    const dateB = new Date(b[1].Date)
                    return dateA - dateB
                })

                setData(sortedData)
                setSaved(Object.entries(snapshot.val()))
            }
        })
    }, [])

    function handleShow(index, id){
        newId = id
        data.filter((item) => {
            if(item[0] === id){
                setTime(item[1].Slots)
                console.log(item[1].Slots)
                setCount(1)
            }
        })
    }

    function handleValueChange(item, index, value){
        setSelection(prev => {
            const newData = [...prev]
            newData[index] = value
            return newData
        })
        if (value === '1' && selection[index] !== '1') {
            setChangedData(prev => [...prev, { ...item, value: '1' }]);
        }
        else if (value !== '1' && selection[index] === '1') {
            setChangedData(prev => prev.filter((i) => i.id !== item.id));
        }        
    }
        
       

    // function update(){
    //     const filteredData = changedData.filter(item => item !== undefined)
    //     console.log(filteredData)
    //     saved.map(item => {
    //         if(item[0] === newId){
    //             item[1].Slots.map(slot => {
    //                 filteredData.map(item => {
    //                     if(item.id === slot.id){
    //                         let path = (parseInt(item.id) - 1).toString()
    //                         let address = 'Date/'+newId+'/Slots/'+path
    //                         console.log(address)
    //                         console.log(item)
    //                         // update(ref(database, address), item)
    //                     }
    //                 })                   
    //             })
    //         }
    //     })
    //     setCount(0)
    // }

    function updated(){
        let filteredData = changedData.filter(item => item !== undefined)
        console.log(filteredData)
        // saved.map(item => {
            // if(item[0] === newId){
                // item[1].Slots.map(slot => {
                    filteredData.map(item => {
                        // if(item.id === slot.id){
                            let path = (parseInt(item.id) - 1).toString()
                            let address = 'Date/'+newId+'/Slots/'+path
                            console.log(address)
                            console.log(item)
                            update(ref(database, address), item)
                        // }
                    })                   
                // })
            // }
        // })
        setCount(0)
        setSelection([])
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
                {data.map((item, index) => {
                    return(
                        <tr key={index} className='info-table'>
                            <td>{index+1}</td>
                            <td>{item[1].Date}</td>
                            <td>
                                <button onClick={() => handleShow(index, item[0])}>Get Slots</button>
                            </td>                
                        </tr>
                    )
                })}
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
                {time.map((item,index) => {
                    return(
                        <tr key={index}>
                            {item.value === '0' && <td>{item.label}</td>}

                            {item.value === '0' &&
                            <td>
                                <select value={selection[index] || '0'} onChange={(e) => handleValueChange(item, index, e.target.value)}>
                                    <option value='0'>0</option>
                                    <option value='1'>1</option>
                                </select>
                            </td>}
                        </tr>
                    )
                })}
            </tbody>
        </table>}

        {(time && count>=1) && <button className='update-btn' onClick={updated}>Update</button>}
    </div>
  )
}
