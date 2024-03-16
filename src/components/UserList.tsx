import React from 'react'
interface UserList {
    data :{
        first: string,
        last: string
    }[]
}
const UserList = (props: UserList) => {
  return (
    <div>{
        props.data.map((d)=> <h1>Name is {d.first} Last {d.last}</h1>)
   }
        </div>
  )
}

export default UserList