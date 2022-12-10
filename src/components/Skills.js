import Html from '../assets/html-5-500.png'
import Css from '../assets/css3-500.png'
import Javascript from '../assets/javascript-logo-500.png'
import ReactLogo from '../assets/icons8-react-480.png'
import Flutter from '../assets/flutter-500.png'
import Dart from '../assets/dart-language-500.png'
import Python from '../assets/python-500.png'

import SingleSkill from './SingleSkill'

const Skills = () => {
  return (
    <div className="skill-page">
        <p className="skill-header">SkillS</p>
        <div className="Skill-container">
            <p className="Using-Now">Using Now:</p>
            <div className="programming-icons">
                <SingleSkill logo={Html} title='HTML'/>
                <SingleSkill logo={Css} title='CSS'/>
                <SingleSkill logo={Javascript} title='JavaScript'/>
                <SingleSkill logo={ReactLogo} title='React JS'/>
                <SingleSkill logo={Flutter} title='Flutter'/>
                <SingleSkill logo={Dart} title='Dart'/>
                <SingleSkill logo={Python} title='Python'/>

            </div>
        </div>
    </div>
  )
}

export default Skills