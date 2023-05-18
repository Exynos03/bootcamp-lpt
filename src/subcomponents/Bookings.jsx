import React, { useEffect } from 'react'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { useState } from 'react'

const appSettings = {
    databaseURL: "https://landing-page-c8e30-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const bookings = ref(database, "Bookings")


export default function Bookings() {
    const [action, setAction] = useState(['Select', 'DNP', 'Connected'])

    const [data, setData] = useState([])
    const [valueChange, setValueChange] = useState({})


    useEffect(() => {
        onValue(bookings, function(snapshot){
            if(snapshot.exists()){
                setData(Object.entries(snapshot.val()))
                setValueChange(snapshot.val())
            }
        })
    }, [])

    function handleStatus(index, stats, id){

        {!stats === 'Select' && setData(prevData => {
            const newData = [...prevData];
            newData[index][1].Status = stats;
            return newData;
        })}

        if(stats === 'DNP'){
            update(ref(database, `Bookings/${id}`), { 
                Status: stats})
        }
        
        else if(stats === 'Connected') {
            update(ref(database, `Bookings/${id}`), { 
                Status: stats});
        }



    }
    data && data.sort((a, b) => {
        const dateA = new Date('2023-' + a[1].Date + 'T' + a[1].Call_Time.split('-')[0] + ':00');
        const dateB = new Date('2023-' + b[1].Date + 'T' + b[1].Call_Time.split('-')[0] + ':00');
        return dateA - dateB;
      });
    

  return (
    <table>
        <caption>
            Bookings Dashboard
        </caption>

        <thead>
            <tr className='table-headings'>
                <th>S No</th>
                <th>Mobile No</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {data.map((item, index) => (
                <tr key={index} className='info-table'>
                    <td>{index+1}</td>
                    <td>{item[1].MobileNumber}</td>
                    <td>{item[1].Date}</td>
                    <td>{item[1].Call_Time}</td>
                    {/* <td>
                        <select onChange={(e) => handleSlot(index, e.target.value)}>
                            {slotValues.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </td> */}
                    <td>{item[1].Status}</td>
                    <td>
                        <select onChange={(e) => handleStatus(index, e.target.value, item[0])}>
                            {action.map(stats => (
                                <option key={stats} value={stats}>{stats}</option>
                            ))}
                        </select>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
