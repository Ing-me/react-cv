const Experiences = ({title, src, isActive, onShow}) => {
    return (
        <div className="form-cv">            
            <div className="infoPerso">
                <h2>{title}</h2>
                <button onClick={onShow}>
                    <img src={src} alt='plus'/>
                    </button>  
            </div> 
            { isActive ?  (<form id='infoForm'>
                        <div className='fieldForm'>
                            <label htmlFor="companyName">Company name:</label>
                            <input 
                                type="text" 
                                id='companyName' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='Comapany name'
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="positionTitle">Position title</label>
                            <input 
                                type="text" 
                                id='posisitionTitle' 
                                minLength="3" 
                                maxLength="100" 
                                placeholder='Position title' 
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
                                cols="5"
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
export default Experiences;