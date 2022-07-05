import React from "react";
import "./modal.css"
import { IoIosCloseCircleOutline } from "react-icons/io"

function PopUpModal(props){
    if(!props.open){
        return null;
    }
    return (
      <div onClick={props.onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
        <div style={{textAlign : 'center'}}> 
           <img src={props.popURL} alt='/' className ="popImage"/>
        </div > 
        <div className='closeBtn'>
           <IoIosCloseCircleOutline onClick={props.onClose} />
        </div>
      </div>
    </div>
    );

}

export default PopUpModal;