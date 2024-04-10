import React from 'react'
import achivementData from './Files/Achivements.json'


function Achivements() {
  return (
    <div className='achives'>
      <h1>My Achivements</h1>
      <div className="achivements">
        <ul>
          {achivementData && achivementData.map(achivement => (<li key={achivement.id}>
            <div className="achive-text">
            <h2>{achivement.acivements}</h2>
            <p>{achivement.description}</p></div>
            <div className="achive-img"><img src={achivement.img} alt="img" /></div>
          </li>))}
        </ul>
      </div>

    </div>
  )
}

export default Achivements