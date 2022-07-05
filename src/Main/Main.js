import react from 'react';
import './Main.css';
import Header from '../Header/Header';
import Nav from '../../Nav/Nav'
import Company from '../Company/Company';
import Functional from '../Functional/Functional';
import Team from '../../Team/Team';
import Clients from '../Clients/Clients';
// import { Link, animateScroll as scroll } from "react-scroll";
import NavBar from '../../NavBar/NavBar';

class Main extends react.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="main">
        <div className="line-11"></div>
        <div className="line-12"></div>
        <div className='ellipse-19'></div>
        <div className='ellipse-20'></div>


        <Header />
        <Company />
        <Functional />
        <Team />
        <Clients />




        {/* <Footer/> */}
        {/*
        <div className='header-main'>
     
        </div>
        <div className='company-main'>
          
        </div>
        <div className='functional-main'>
          
        </div>
        <div className='team-main'>
          
        </div>
        <div className='clients-main'>
          
        </div>


        {/* <div className="rectangle" >
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
        </div> */}

        {/* <div className="functional">
          <div className='mainFunctionality'>The main functionality of EMS </div>
          <div className='reception'>Reception</div>
          <div className='reception-p'>Reducing the waiting time for a doctor's appointment, getting rid of queues in hospitals. Optimizing the workload of doctors, reducing downtime and overloading medical equipment. Reducing the time of obtaining the results of diagnostic studies due to the integration of EMS and LIS. Streamlining the process of moving a patient within a medical organization through the use of electronic queues and referrals. Working with clients through SMS notifications. </div>
          <div className='line-18'></div>
          <img src={process.env.PUBLIC_URL + "img/photoReception.png"} className='photoReception' />
          <div className='line-21'></div>


          <img src={process.env.PUBLIC_URL + "img/photoEs.png"} className='photoEs' />
          <div className='es'>Electronic medical card </div>
          <div className='es-p'>Reducing the time of obtaining the results of diagnostic studies due to the integration of EMS and LIS. Integrity and availability of research results through the introduction of medical images archives. Continuity and effectiveness of treatment through the use of patient information from EHR. Optimizing the process of writing prescriptions and providing patients with medicines. Reduced time of enter, search and reuse information. </div>
          <div className='line-17'></div>
          <div className='ellipse-35'></div>
          <div className='ellipse-16'></div>
          <div className='ellipse-15'></div>
          <div className='ellipse-22'></div>

          <div className='DoctorsWorkPlace'> Doctor's workplace</div>
          <div className='DoctorsWorkPlace-p'>Increasing the timeshare of the doctor's work with the patient up to 90% of the appointment by reducing the share of the doctor's work with medical documentation.
Refusal of most paper documents (journals, referrals, prescriptions, etc.), promoting their    use in electronic form.
An automatic system for monitoring medical decision making with support for working with ICD-10.
Binding to the clinical recommendations of the Ministry of Healf on diagnosis.  </div>
          <div className='line-20'></div>
          <img src={process.env.PUBLIC_URL + "img/doctorWorkPlace.png"} className='photoDoctorWorkPlace' />
          <div className='line-22'></div>
          <div className='line-25'></div>
          <div className='еllipse-42'></div>
          <div className='line-29'></div>

          <img src={process.env.PUBLIC_URL + "img/photoCheckup.png"} className='photoCheckup' />
          <div className='professionalCheck-ups'>Professional Check-ups</div>
          <div className='professionalCheck-ups-p'>Compliance with local orders. <br/><br/>  Workstation of the occupational pathologist and medical commission.  <br/><br/>Growth of clinics traffic by 80% due to electronic queue.<br/>  <br/>Reducing the time spent by the patient in the clinic, without loss of quality.</div>
          <div className='line-19'></div>
          <div className='line-23'></div>

          <div className='finance'>Finance</div>
          <div className='finance-p'>Analysis of the financial performance of the clinic in real-time. <br/> <br/> Payroll system.<br/> <br/>  Sales plans.<br/> <br/>  Work with various types of payments and programs.<br/> <br/>  Forecast analysis of the eggectiverness of the clinic.</div>
          <div className='line-26'></div>
          <img src={process.env.PUBLIC_URL + "img/photoFinance.png"} className='photoFinance' />
          <div className='line-24'></div>
          <div className='line-28'></div>
          <div className='ellipse-52'></div>

          <img src={process.env.PUBLIC_URL + "img/photoMarketing.png"} className='photoMarketing' />
          <div className='marketing'>Marketing</div>
          <div className='marketing-p'>Flexible statistics tools. <br/> <br/> Analysis of the distribution of customers by direction, age. payments.  <br/> <br/>Automation of business processes of the marketing unit.</div>
          <div className='line-27'></div>

        </div>
         */}
        {/* <div className='team'> 
        <img src={process.env.PUBLIC_URL + "img/team-1.png"} className='team-1' />
        <img src={process.env.PUBLIC_URL + "img/team-2.png"} className='team-2' />
        <img src={process.env.PUBLIC_URL + "img/team-3.png"} className='team-3' />
        <div className='teamWorkTogether'>Team Work Together</div>
        <div className='ellipse-56'></div>
        <div className='criticalThinking'>Critical Thinking <br/> and Creative </div>
        <div className='ellipse-57'></div>

        <div className='ideas'>Ideas and <br/> Solutions </div>

        </div>
         */}
        {/* <div className='ourClients'>
          <div>Our clients</div>
          <img src={process.env.PUBLIC_URL + "img/client-1.png"} className='client-1' />
          <img src={process.env.PUBLIC_URL + "img/client-2.png"} className='client-2' />
          <img src={process.env.PUBLIC_URL + "img/client-3.png"} className='client-3' />
          <img src={process.env.PUBLIC_URL + "img/client-4.png"} className='client-4' />
          <img src={process.env.PUBLIC_URL + "img/client-5.png"} className='client-5' />
          <img src={process.env.PUBLIC_URL + "img/client-6.png"} className='client-6' />
          <img src={process.env.PUBLIC_URL + "img/client-7.png"} className='client-7' />
          <img src={process.env.PUBLIC_URL + "img/client-8.png"} className='client-8' />

        </div> */}

      </div>
    )
  }
}

export default Main;
