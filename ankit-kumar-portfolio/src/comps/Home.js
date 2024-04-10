import React from 'react'
import dp from '../imgs/dp.png'


function Home() {
  return (
    <div className='main'>
      <div className="first-para">
        <p>
          <p id='hey'>
            HEY !!!
          </p>
          I'm <b>ANKIT KUMAR SINGH</b>. <br /> I"m a passionate long distance runner, dadicated to pushing my limits and achiveing my goals on road or trail. <br /> <br /> "Running is not just a sport for me, it's a way of life that fuels my drive for excellence and Self improvement."
        </p>
        <img id='dp' src={dp} alt="dp" />
      </div>
      <div className="second-para">
        <p>I am a dedicated long - distance runner, demonstrating exceptional endurance & discipline in my athletic pursuits. My training regimen likely involves Consistent mileage, interval Sessions & cross  training to enhance performance and prevent injury. As an athlete, I prioritize proper nutrition, rest, and recovery to optimize my physical condition for races and Competitions. My Passion for running drives me Challenge myself, Setting personal goals & Striving for improvement With each race I undertake.</p>
      </div>

      
    </div>
  )
}

export default Home