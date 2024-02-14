import {useContext} from 'react'
import { userLoginContext } from '../../contexts/userLoginContext'

function UserProfile() {
  let [currentUser]=useContext(userLoginContext)



  return (
    <div className='text-end'>
      <img src={currentUser.profileImg} width='60px'  alt="" />
        <p className="lead fs-2  text-primary">Welcome ,{currentUser.username}</p>
        <p className="lead">{currentUser.email}</p>
    </div>
  )
}

export default UserProfile