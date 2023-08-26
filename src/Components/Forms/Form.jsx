import plus from '../../assets/plus-custom.png';

const Form = ({title, src, isActive, onShow}) => {

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
                            <label htmlFor="Fullname">Full name:</label>
                            <input 
                                type="text" 
                                id='Fullname' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='Your fullname'
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="Email">Email:</label>
                            <input 
                                type="email" 
                                id='email' 
                                minLength="3" 
                                maxLength="100" 
                                placeholder='your email' 
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="Phone">Phone:</label>
                            <input 
                                type="phone" 
                                id='phone' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='your phone' 
                                required
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="Addresse">Address:</label>
                            <input 
                                type="text" 
                                id='adresse' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='your address'
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

export default Form;