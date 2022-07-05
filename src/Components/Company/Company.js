import react from 'react';
import './Company.css';

class Company extends react.Component {
  // constructor(props) {
  //   super(props);

  // }
  render(){
     return (
    <div className="company1">
    <div className="rectangle" >
          <div className="company"> Company </div>
          <div className="company-text"> MEDICI is a medical ecosystem of the future, a set of improvements for all participants in the healthcare system that simplifies and increases work efficiency. The MEDICI platform collects, transmits and stores data about patients, doctors and clinics in a single information and secure </div>
        </div>

        <img src={process.env.PUBLIC_URL + "img/image_38.png"} className='image_38' />
        <div className="line-13"></div>
        <div className='ellipse-23'></div>
        <div className='ellipse-22'></div>

        <div className='frame-1'>
          <div className='mainStages'>The main stages of work</div>
          <div className='rectangle-51'>
            <div className='rectangle-51-title'>Clinical diagnosis</div>
            <div className='rectangle-51-p'>We collect data, determine the state of business processes, identify problem areas and offer solutions.</div>

          </div>
          <div className='rectangle-52'>
            <div className='rectangle-52-title'>Building new business processes</div>
            <div className='rectangle-52-p'>Together with the founder, we create a new model of business processes, train staff, put the project into operation.</div>
          </div>
          <div className='rectangle-53'>
            <div className='rectangle-53-title'>Support project</div>
            <div className='rectangle-53-p'>We help keep the system up to date and adapt to changing business conditions.</div>
          </div>
        </div>
    </div>
  )}
 
}

export default Company;
