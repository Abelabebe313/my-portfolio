const Home = props => {
  return (
    <div className="home">
       <div className="Navigations">
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolios</li>
            <li>Contact Me</li>
          </ul>
       </div>
       <div className="home-container">
           <div className="left">
               <p className="greeting">Hello, I am</p>
               <p className="name">Abel Abebe</p>
               <p className="field">Front-End/ Mobile App Developer </p>
           </div>
           <div className="right">

           </div>
       </div>
    </div>
  )
}

Home.propTypes = {}

export default Home