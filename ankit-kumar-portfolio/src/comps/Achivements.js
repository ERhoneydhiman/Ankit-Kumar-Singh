import React from 'react'
import achivementData from './Files/Achivements.json'


function Achivements() {
  return (
    <div className='achives'>
      <h1>My Achivements</h1>
      <ul>
        {achivementData && achivementData.map(achivement => (<li key={achivement.id}>
          <h2>{achivement.acivements}</h2>
          <div><img src={ achivement.icon } alt="imgs" /></div>
        </li>))}
      </ul>
    </div>
  )
}

export default Achivements