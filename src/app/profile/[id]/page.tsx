import React from 'react'

const UserProfile = ({ params }: any) => {
  return (
    <div>
      Profilepages
      <span className='bg-orange-500 text-black'>{params.id}</span>
    </div>
  )
}

export default UserProfile 
