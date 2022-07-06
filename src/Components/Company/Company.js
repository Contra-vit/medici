import react from 'react';
import './Company.css';
import { useTranslation } from "react-i18next";

function Company (){
  const { t } = useTranslation();

     return (
    <div className="company1">
    <div className="rectangle" >
          <div className="company"> {t('company')} </div>
          <div className="company-text">  {t('companyContent')} </div>
        </div>

        <img src={process.env.PUBLIC_URL + "img/image_38.png"} className='image_38' />
        <div className="line-13"></div>
        <div className='ellipse-23'></div>
        <div className='ellipse-22'></div>

        <div className='frame-1'>
          <div className='mainStages'>{t('stage')} </div>
          <div className='rectangle-51'>
            <div className='rectangle-51-title'>{t('diagnosis')} </div>
            <div className='rectangle-51-p'>{t('diagnosisContent')} </div>

          </div>
          <div className='rectangle-52'>
            <div className='rectangle-52-title'> {t('buildProc')} </div>
            <div className='rectangle-52-p'> {t('buildProcContent')}  </div>
          </div>
          <div className='rectangle-53'>
            <div className='rectangle-53-title'> {t('Support')} </div>
            <div className='rectangle-53-p'>{t('SupportContent')} </div>
          </div>
        </div>
    </div>
  )}
 


export default Company;
