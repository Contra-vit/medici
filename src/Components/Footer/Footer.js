import react from 'react';
import './Footer.css';

class Footer extends react.Component {
  // constructor(props) {
  //   super(props);

  // }
  render(){
     return (
    <div className="footer">
     {/* <div className="footer-bottom" >Contact Us</div> */}
     <div className="footer-contact">
     <div className="footer-a">Contact Us</div>
     <div className="footer-a">Address: Novosibirsk, st.Molodezhniy, 40 <br/> Phone: +7 (383) 375-58-08 <br/>Mail: apply@medicisoft.ru</div>
     </div>
    
    </div>
  )}
 
}

export default Footer;
