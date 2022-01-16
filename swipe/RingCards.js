import { dividerClasses } from '@mui/material';
import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import "./RingCards.css";
import database from "./firebase.js";

function RingCards() {
    const [people, setPeople] = useState([]);

    // useEffect() -> code tht runs based on condition
    useEffect(() => {
         
        const unsubscribe = database
        .collection('rings')
        .onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            //cleanup
            unsubscribe();
        }
    }, []);

    return (
            <div className="ringCards__cardImgContainer">
            {people.map(person => (
                <TinderCard 
                className='swipe'
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.image})`,border: `10px solid ${person.ringColor}`}}
                    className="card"
                    >
                    </div>
                        <h3 className="ringCards__cardName">{person.name}</h3>
                        <p className="ringCards__cardDescription">{person.description}</p>
                </TinderCard>
            ))}
            </div>
    );
}

export default RingCards
