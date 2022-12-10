import myPhoto from '../assets/myPhoto.jpg'

import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import telegram from '../assets/telegram.png'
import instagram from '../assets/instagram.png'
import arrow from '../assets/arrow-down-thin-240.png'
const Home = props => {
  return (
    <div className="home">
       <div className="Navigations">
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolios</li>
            <li>Contact</li>
          </ul>
       </div>
       <div className="home-container">
           <div className="left">
               <p className="greeting">Hello, I am</p>
               <p className="name">Abel Abebe</p>
               <p className="field">Front-End/ Mobile App Developer </p>
               <div className="social-medias">
                    <img src={linkedin}/>
                    <img src={telegram}/>
                    <img src={instagram}/>
                    <img src={facebook}/>
                    <img src={github}/>
               </div>
               <button className="btn">Contact Me</button>
           </div>
           <div className="right">
             <div className='profilePhoto'>
                 <img src={myPhoto}/>
             </div>
           </div>
       </div>
        <div className="scroll">
            <p>Scroll</p>
            <img src={arrow}/>
        </div>
    </div>
  )
}

Home.propTypes = {}

export default Home