import AboutImage from '../assets/programming_re_kg9v.svg'
const About = () => {
  return (
    <div className="About-page">
        <div className="About-container">
        <div className="about-left">
             <img src={AboutImage}/>
        </div>
        <div className="about-right">
            <p className="about-header">About Me</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam nostrum eaque magni numquam voluptate, cumque itaque at 
                voluptatibus velit adipisci facilis, ipsam repudiandae tempore 
                eligendi maxime voluptas repellendus expedita deleniti?
            </p>
            <button className="btn">Download CV</button>
        </div>
    </div>
    </div>
  )
}

export default About