import react from 'react';
import './Functional.css';

class Functional extends react.Component {
  constructor(props) {
    super(props);

  }
  render(){
     return (
        <div className="functional">
         
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
        

  )}
 
}

export default Functional;
