const Education = ({title, src, isActive, onShow}) => {
    return(
        <div className="form-cv">            
            <div className="infoPerso">
                <h2>{title}</h2>
                <button onClick={onShow}>
                    <img src={src} alt='plus'/>
                    </button>  
            </div> 
            { isActive ?  (<form id='infoForm'>
                        <div className='fieldForm'>
                            <label htmlFor="schoolName">School name:</label>
                            <input 
                                type="text" 
                                id='schoolName' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='School name'
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
                                placeholder='Date of study' 
                                required
                            />
                        </div>
                        <div className='buttonSubmit'>
                            <button type='button'>Submit</button>
                        </div>
                    </form>) : ''

                }
        </div>
        
    )
}

export default Education;