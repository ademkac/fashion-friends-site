import React from 'react'
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import classes from './Notification.module.css'

function Notification(props) {

    const dispatch = useDispatch()


    let specialClasses = '';

    if(props.status === 'error'){
        specialClasses = classes.error;
    }
    if (props.status === 'success'){
        specialClasses = classes.success;
    }

    const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
        <i onClick={()=>dispatch(uiActions.closeNotification(null))} id='closeIcon' className='fa fa-times'></i>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
    </section>
  )
}

export default Notification
