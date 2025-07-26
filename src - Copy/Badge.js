import React from 'react'
import { useState } from 'react'
const Badge = () => {
const [users ,setUsers]=useState([
    {id:1,name:'prashanth',rank:1},
    {id:2,name:'mani',rank:2},
    {id:3,name:'shravan',rank:3},
    {id:4,name:'raju',rank:4},
    {id:5,name:'siddu',rank:5},
])
const getUser=(rank)=>{
    switch(rank)
    {
        case 1:
            return <span style={{color:'gold'}}>Gold</span>
        case 2:
            return <span style={{color:'silver'}}>Silver</span>
        case 3:
            return <span style={{color:'#9f590a'}}>Bronze</span>
        default:
            return <span>Participat</span>
    }
}
  return (
    <div>
        <table border="1" style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Rank</th>
                    <th>Medal</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,id)=>{
                    return  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.rank}</td>
                    <td>{getUser(user.rank)}</td>
                </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Badge