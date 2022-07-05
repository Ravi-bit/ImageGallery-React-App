import React, {useEffect, useState} from "react";
import ImageCard from "./ImageCard";
import instance from "./axios";
import "./container.css"


function CardContainer(){

   const[cardsResponse, setCards] = useState([]) 
    
   useEffect(() => {
    async function getData(){
    await Promise.all([
    instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=nature&image_type=photo&editors_choice=true'),
     instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=food&image_type=photo&editors_choice=true'),
      instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=places&image_type=photo&editors_choice=true'),
      instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=nature&image_type=photo'),
     instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=food&image_type=photo'),
      instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=places&image_type=photo'),
      instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=backgrounds&image_type=photo&editors_choice=true'),
      instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=travel&image_type=photo&editors_choice=true'),
      instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=business&image_type=photo&editors_choice=true&safesearch=true'),
       instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=computer&image_type=photo&safesearch=true&editors_choice=true'),
       instance.get('api/?key='+process.env.REACT_APP_API_KEY+'&category=buildings&image_type=photo&editors_choice=true')
    ]).then(
      res => {
        let tempArray = []
        for(let datachunk of res){
            tempArray = [...tempArray, ...datachunk.data.hits]
        }
        setCards(prevCards => [...prevCards,...tempArray])
      } 
    )
    }
    getData()
   },[])

    return (
        <div className="cardContainer">
            { cardsResponse.map( card => <ImageCard key ={card.id} cardId ={card.id} url ={card.webformatURL} username ={card.user}  /> )}
        </div>
    )
}

export default CardContainer;