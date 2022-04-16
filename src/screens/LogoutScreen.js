import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {authActions} from '../store/auth-slice'

const LogoutScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(authActions.logout())
        localStorage.removeItem('userData')
        setTimeout(()=>{
            navigate('/', {replace: true})
        }, 5000)
    },[dispatch])
  return (
    <div>
        <h1>Uspesno ste se odjavili</h1>
        <p>Nakon 5 sekundi ste na pocetnoj strani</p>
    </div>
  )
}

export default LogoutScreen
