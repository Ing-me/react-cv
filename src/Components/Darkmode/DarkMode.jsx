import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import sun from './sun.svg';
import moon from './night.svg';
import Form from "../Forms/Form";
import plus from '../../assets/plus-custom.png';
import Education from "../Education/Education";
import Experiences from "../Experiences/Experiences";

const DarkMode = () => {
    
    const [theme, setTheme] = useState({color: 'light-theme', image: moon})
    const [activeIndex, setActiveIndex] = useState(false);

    const toggleTheme = () => {
        theme.color === 'dark-theme' ? setTheme({color: 'light-theme', image: moon}) : setTheme({color: 'dark-theme', image: sun})
    }
    
    useEffect(() =>{
        document.body.className = theme.color
    }, [theme.color]);

    return(
        
        <div>
            <div className="main-heading">
                <button onClick={toggleTheme}>
                    <img 
                        style={{width: 20 +'px'}}
                        src={theme.image} 
                        alt={theme.color} />
                    </button>
                
            
            </div>
            <Navbar background={theme.color === 'dark-theme' ? 'light-theme' : 'dark-theme' }/>
            <div className="main-content">
                <div className="personalSection">
                    <Form
                        title="Your information"
                        src={plus}
                        isActive={activeIndex === 0}
                        onShow={() => setActiveIndex(0)}
                    />
                </div>
                
                <div className="educationSection">
                    <Education 
                        title="Your Education"
                        src={plus}
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                    />
                </div>
                
                <div className="experiencesSection">
                    <Experiences
                        title="Your experiences"
                        src={plus}
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                    />
                </div>

            </div>
            
        </div>
    )
}

export default DarkMode;