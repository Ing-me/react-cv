import { useState } from "react"

const Education = ({title, src, isActive, onShow, onSubmit}) => {

    const [education, setEducation] = useState({schoolname:'', titleStudy:'', dateStudy:''})

    const handSchoolName = (e) =>{
        setEducation({...education, schoolname: e.target.value})
    }

    const handleTitleStudy= (e) =>{
        setEducation({...education, titleStudy: e.target.value})
    }
    const handleDateStudy = (e) =>{
        setEducation({...education, dateStudy: e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
         console.log(education)
        onSubmit(education)
        setEducation({schoolname:'', titleStudy:'', dateStudy:''})
    }
   
    return(
        <div className="form-cv">            
            <div className="infoPerso">
                <h2>{title}</h2>
                <button onClick={onShow}>
                    <img src={src} alt='plus'/>
                    </button>  
            </div> 
            { isActive ?  (<form onSubmit={(e) => {handleOnSubmit(e)}} id='infoForm'>
                        <div className='fieldForm'>
                            <label htmlFor="schoolName">School name:</label>
                            <input 
                                type="text" 
                                id='schoolName' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='School name'
                                value={education.schoolname}
                                onChange={handSchoolName}
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="titleStudy">Title of study:</label>
                            <input 
                                type="text" 
                                id='titleStudy' 
                                minLength="3" 
                                maxLength="100" 
                                placeholder='Title of study' 
                                value={education.titleStudy}
                                onChange={handleTitleStudy}
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="dateStudy">Date of study:</label>
                            <input 
                                type="date" 
                                id='dateStudy' 
                                minLength="3" 
                                maxLength="50" 
                                name="from"
                                value={education.dateStudy}
                                onChange={handleDateStudy}
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

export default Education;