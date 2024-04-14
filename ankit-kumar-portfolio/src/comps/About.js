import React from 'react'

function About() {
  return (
    <div className='about main'>
      <h1>Skills and Others</h1>
      <div className="skills">

        <h2>Sports and Games</h2>
        <dl>
          <dt>Kho-Kho</dt>
          <dd>First step in sports, Kho-Kho is my first sport as a team player.</dd>
          <dt>Running</dt>
          <dd>After Kho-Kho, in 11th standard i started running, and with time i developed interest in running.</dd>
          <dd>And won many awards including Gold, Silver madels and others.</dd>
        </dl>

        <h2>Computer Skills</h2>
        <ul>
          <li>Tech-savvy and quick to learn new programs.</li>
          <li>Knowledge of MS Office Program, proficient with MS word and Powerpoint</li>
          <li>Experience with electronic file keeping and reporting</li>
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          <li>Excellent Writing and speeking skills</li>
          <li>Languags : English, Hindi, Telugu</li>
          <li>Skill to connect with new peoples</li>
        </ul>
      </div>

      <div className="employement">
        <h2>Decathlon Errum Manzil</h2>
        <p>Athletic (Running) Team Sports Leader</p>
        <ol>
          <li>Responsible for the Athletic department</li>
          <li>Lead a Team for Four members for a Sports Event</li>
          <li>Organized a workshop related to Athletic and Other</li>
          <li>Managed a running Department layout</li>
        </ol>
      </div>
      
    </div>
  )
}

export default About