import react from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";

function Footer (){
  const { t } = useTranslation();

     return (
    <div className="footer">
     {/* <div className="footer-bottom" >Contact Us</div> */}
     <div className="footer-contact">
     <div className="footer-a">{t('contact')}</div>
     <div className="footer-a">{t('contactContent1')}<br/>{t('contactContent2')}<br/>{t('contactContent3')}</div>
     </div>
    
    </div>
  )}
 

export default Footer;
