import { useState } from "react";

const Experiences = ({title, src, isActive, onShow, onSubmit}) => {

    const [experience, setExperience] = useState({companyName:'', positionTitle:'', from:'', to:'', responsibilities:''})

    const handleCompanyName = (e) => {
        setExperience({...experience, companyName: e.target.value})
    }

    const handlePositionTitle = (e) => {
        setExperience({...experience, positionTitle: e.target.value})
    }

    const handleFrom = (e) => {
        setExperience({...experience, from:e.target.value})
    }

    const handleTo = (e) => {
        setExperience({...experience, to:e.target.value})
    }
    const handleResponsibilities = (e) => {
        setExperience({...experience, responsibilities: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(experience)
        onSubmit(experience)        
        setExperience({companyName:'', positionTitle:'',from:'', to:'', responsibilities:''})
    }

    return (
        <div className="form-cv">            
            <div className="infoPerso">
                <h2>{title}</h2>
                <button onClick={onShow}>
                    <img src={src} alt='plus'/>
                    </button>  
            </div> 
            { isActive ?  (<form onSubmit={ e => {handleSubmit(e)}} id='infoForm'>
                        <div className='fieldForm'>
                            <label htmlFor="companyName">Company name:</label>
                            <input 
                                type="text" 
                                id='companyName' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='Comapany name'
                                value={experience.companyName}
                                onChange={handleCompanyName}
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="positionTitle">Position title</label>
                            <input 
                                type="text" 
                                id='positionTitle' 
                                minLength="3" 
                                maxLength="100" 
                                placeholder='Position title' 
                                value={experience.positionTitle}
                                onChange={handlePositionTitle}
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="fromDate">From:</label>
                            <input 
                                type="date" 
                                id='fromDate' 
                                minLength="3" 
                                maxLength="50" 
                                value={experience.from}
                                onChange={handleFrom}
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="toDate">To:</label>
                            <input 
                                type="date" 
                                id='toDate' 
                                minLength="3" 
                                maxLength="50" 
                                value={experience.to}
                                onChange={handleTo}
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="Responsibilities">Responsibilities:</label>
                            <textarea 
                                type="text" 
                                id='Responsibilities' 
                                minLength="3" 
                                maxLength="250" 
                                value={experience.responsibilities}
                                onChange={handleResponsibilities}
                                rows="5"
                                required
                            />
                        </div>
                        
                        <div className='buttonSubmit'>
                            <button type='submit'>Submit</button>
                        </div>
                   
                    </form>) : ''

                }
                
        </div>
    )
}

export default Experiences;