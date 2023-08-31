import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import sun from './sun.svg';
import moon from './night.svg';
import Personal from "../Forms/Form";
import plus from '../../assets/plus-custom.png';
import Education from "../Education/Education";
import Experiences from "../Experiences/Experiences";

const ThemeMode = () => {
    
    const [theme, setTheme] = useState({color: 'light-theme', image: moon})
    const [activeIndex, setActiveIndex] = useState(false);
    const [array, setArray] = useState([]);

    const toggleTheme = () => {
        theme.color === 'dark-theme' ? setTheme({color: 'light-theme', image: moon}) : setTheme({color: 'dark-theme', image: sun})
    }
    
    useEffect(() =>{
        document.body.className = theme.color
    }, [theme.color]);

    const getData = (data) => {
        setArray([data])
    }
    const getDataFromeducation = (data)=> {
        setArray([...array, data])
    }
    
    const getDataFromExperiences = (data) => {
        setArray([...array,data])
    }

    console.log(array)

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
            { array.length >= 3 ? <button className="viewButton">View cv</button> : '' }                
                <div className="personalSection">
                    <Personal
                        title="Your information"
                        src={plus}
                        isActive={activeIndex === 0}
                        onShow={() => setActiveIndex(0)}
                        onSubmit = {getData}
                    />
                </div>
                
                <div className="educationSection">
                    <Education 
                        title="Your Education"
                        src={plus}
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        onSubmit={getDataFromeducation}
                    />
                </div>
                
                <div className="experiencesSection">
                    <Experiences
                        title="Your experiences"
                        src={plus}
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        onSubmit={getDataFromExperiences}
                    />
                </div>

            </div>
            
        </div>
    )
}

export default ThemeMode;