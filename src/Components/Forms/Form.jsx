import { useState } from 'react';

const Personal = ({title, src, isActive, onShow, onSubmit}) => {
    const [personal, setPersonal] = useState({fullname:'', email:'', phone:'', address:''})

    const handleFullName = (e) =>{
        setPersonal({...personal, fullname: e.target.value})
    }

    const handleFullEmail= (e) =>{
        setPersonal({...personal, email: e.target.value})
    }
    const handleFullPhone = (e) =>{
        setPersonal({...personal, phone: e.target.value})
    }
    const handleFullAddress = (e) =>{
        setPersonal({...personal, address: e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(personal)
        onSubmit(personal)
        setPersonal({fullname:'', email:'', phone:'', address:''})
    }

    return(
        <div className="form-cv">            
            <div className="infoPerso">
                <h2>{title}</h2>
                <button onClick={onShow}>
                    <img src={src} alt='plus'/>
                    </button>  
            </div> 
        { isActive ?  (<form onSubmit={e => {handleOnSubmit(e)}} id='infoForm'>
                       
                        <div className='fieldForm'>
                            <label htmlFor="Fullname">Full name:</label>
                            <input 
                                type="text" 
                                id='Fullname' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='Your fullname'
                                required
                                value={personal.fullname}
                                onChange={handleFullName}
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="Email">Email:</label>
                            <input 
                                type="email" 
                                id='Email' 
                                minLength="3" 
                                maxLength="100" 
                                placeholder='your email' 
                                required
                                value={personal.email}
                                onChange={handleFullEmail}
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="Phone">Phone:</label>
                            <input 
                                type="phone" 
                                id='Phone' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='your phone' 
                                required
                                value={personal.phone}
                                onChange={handleFullPhone}
                            />
                        </div>
                        <div className='fieldForm'>
                            <label htmlFor="Address">Address:</label>
                            <input 
                                type="text" 
                                id='Address' 
                                minLength="3" 
                                maxLength="50" 
                                placeholder='your address'
                                required
                                value={personal.address}
                                onChange={handleFullAddress}
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

export default Personal;