import react from 'react';
import './Clients.css';

class Clients extends react.Component {
  constructor(props) {
    super(props);

  }
  render(){
     return (
      <div className='ourClients'>
      <div>Our clients</div>
      <img src={process.env.PUBLIC_URL + "img/client-1.png"} className='client-1' />
      <img src={process.env.PUBLIC_URL + "img/client-2.png"} className='client-2' />
      <img src={process.env.PUBLIC_URL + "img/client-3.png"} className='client-3' />
      <img src={process.env.PUBLIC_URL + "img/client-4.png"} className='client-4' />
      <img src={process.env.PUBLIC_URL + "img/client-5.png"} className='client-5' />
      <img src={process.env.PUBLIC_URL + "img/client-6.png"} className='client-6' />
      <img src={process.env.PUBLIC_URL + "img/client-7.png"} className='client-7' />
      <img src={process.env.PUBLIC_URL + "img/client-8.png"} className='client-8' />

    </div>
      
  )}
 
}

export default Clients;
