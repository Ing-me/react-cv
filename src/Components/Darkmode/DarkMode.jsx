import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import sun from './sun.svg';
import moon from './night.svg';
import Form from "../Forms/Form";

const DarkMode = () => {
    
    const [theme, setTheme] = useState({color: 'light-theme', image: moon})

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
                <Form />
            </div>
            
        </div>
    )
}

export default DarkMode;