import react from 'react';
import './Functional.css';
import { useTranslation } from "react-i18next";

function Functional(){
  const { t } = useTranslation();

     return (
        <div className="functional">
         
          <div className='mainFunctionality'>{t('functionality')} </div>
          <div className='reception'>{t('reception')} </div>
          <div className='reception-p'>{t('receptionContent')}  </div>
          <div className='line-18'></div>
          <img src={process.env.PUBLIC_URL + "img/photoReception.png"} className='photoReception' />
          <div className='line-21'></div>


          <img src={process.env.PUBLIC_URL + "img/photoEs.png"} className='photoEs' />
          <div className='es'>{t('medCard')} Electronic medical card </div>
          <div className='es-p'>{t('medCardContent')}   </div>
          <div className='line-17'></div>
          <div className='ellipse-35'></div>
          <div className='ellipse-16'></div>
          <div className='ellipse-15'></div>
          <div className='ellipse-22'></div>

          <div className='DoctorsWorkPlace'> {t('workplace')}</div>
          <div className='DoctorsWorkPlace-p'>{t('workplaceContent')}   </div>
          <div className='line-20'></div>
          <img src={process.env.PUBLIC_URL + "img/doctorWorkPlace.png"} className='photoDoctorWorkPlace' />
          <div className='line-22'></div>
          <div className='line-25'></div>
          <div className='еllipse-42'></div>
          <div className='line-29'></div>

          <img src={process.env.PUBLIC_URL + "img/photoCheckup.png"} className='photoCheckup' />
          <div className='professionalCheck-ups'>{t('checkups')} </div>
          <div className='professionalCheck-ups-p'>{t('checkupsContent1')}<br/><br/> {t('checkupsContent2')}<br/><br/>  {t('checkupsContent3')}<br/><br/>  {t('checkupsContent4')}</div>
          <div className='line-19'></div>
          <div className='line-23'></div>

          <div className='finance'>{t('finance')}</div>
          <div className='finance-p'>{t('financeContent1')} <br/> <br/>{t('financeContent2')}  <br/> <br/>{t('financeContent3')} <br/> <br/>{t('financeContent4')} <br/> <br/>{t('financeContent5')}</div>
          <div className='line-26'></div>
          <img src={process.env.PUBLIC_URL + "img/photoFinance.png"} className='photoFinance' />
          <div className='line-24'></div>
          <div className='line-28'></div>
          <div className='ellipse-52'></div> 

           <img src={process.env.PUBLIC_URL + "img/photoMarketing.png"} className='photoMarketing' />
          <div className='marketing'>{t('marketing')}</div>
          <div className='marketing-p'>{t('marketingContent1')} <br/> <br/>{t('marketingContent2')} <br/> <br/> {t('marketingContent3')} </div>
          <div className='line-27'></div>

        </div>
        

  )}
 


export default Functional;
