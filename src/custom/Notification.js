import React from 'react'
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import './Notification.css'

function Notification(props) {

    const dispatch = useDispatch()

    const cssClasses = `notification ${props.status}`;

  return (
    <div className='mainNotification'>
      <div className={cssClasses}>
          <i onClick={()=>dispatch(uiActions.closeNotification(null))} id='closeIcon' className='fa fa-times'></i>
          <h2>{props.title}</h2>
          <p id='messageP'>{props.message}</p>
      </div>
    </div>
  )
}

export default Notification
