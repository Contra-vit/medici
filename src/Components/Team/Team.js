import react from 'react';
import './Team.css';
import { useTranslation } from "react-i18next";

function Team () {
  const { t } = useTranslation();

    return (
      <div  className='ourTeam'>

        <img src={process.env.PUBLIC_URL + "img/team-1.png"} className='team-1' />
        <img src={process.env.PUBLIC_URL + "img/team-2.png"} className='team-2' />
        <img src={process.env.PUBLIC_URL + "img/team-3.png"} className='team-3' />
        <div className='teamWorkTogether'>{t('team')}</div>
        <div className='ellipse-56'></div>
        <div className='criticalThinking'>{t('teamContent1')}<br />{t('teamContent2')}  </div>
        <div className='ellipse-57'></div>

        <div className='ideas'>{t('teamContent3')} <br /> {t('teamContent4')}</div>

      </div>

    )
  }



export default Team;
