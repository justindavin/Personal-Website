import { faPython, faGitAlt, faRProject, faJsSquare, faReact, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    const [letterClass] = useState('text-animate')
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a very ambitious full-stack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
                </p>
                <p>
                I'm quiet confident, naturally curious, and always looking to improve in both myself and my skills.
                </p>
                <p>
                If I need to define myself in one sentence that would be a passionate, athletic, and tech-obsessed University student!!!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#4682B4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faRProject} color="#0000FF" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3Alt} color="#1E90FF" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default About