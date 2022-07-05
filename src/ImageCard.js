import React, {useState} from "react";
import {Card} from 'react-bootstrap';
import PopUpModal from "./PopUpModal";

import "./card.css"

function ImageCard(props){
    const [isOpen, openModal] = useState(false);
    const [modalURL, setmodalURL] = useState(null);

    const modalHandler = (e) => {
            e.stopPropagation();
            let currNode = e.target.src;
            openModal(true);
            setmodalURL(currNode)
    }
    
    const closeHandler = (e) =>{
        openModal(false);
        setmodalURL(null)
    }
    return (
        <div className="boxSection" > 
        <PopUpModal open ={isOpen} onClose = {closeHandler} popURL = {modalURL} />
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.url}  className ="cardImg" onClick={modalHandler} id= {props.cardId} />
              <Card.Body style ={{textAlign : 'center'}}>
                  <Card.Title className="cardFooter">Image by : {props.username}</Card.Title>  
              </Card.Body>
            </Card>
        </div>
    );
}

export default ImageCard;