import react from 'react';
import './Team.css';

function Team () {
    return (
      <div  className='ourTeam'>

        <img src={process.env.PUBLIC_URL + "img/team-1.png"} className='team-1' />
        <img src={process.env.PUBLIC_URL + "img/team-2.png"} className='team-2' />
        <img src={process.env.PUBLIC_URL + "img/team-3.png"} className='team-3' />
        <div className='teamWorkTogether'>Team Work Together</div>
        <div className='ellipse-56'></div>
        <div className='criticalThinking'>Critical Thinking <br /> and Creative </div>
        <div className='ellipse-57'></div>

        <div className='ideas'>Ideas and <br /> Solutions </div>

      </div>

    )
  }



export default Team;
