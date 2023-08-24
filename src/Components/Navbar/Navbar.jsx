
const Navbar = ({background}) =>{
    return (
        <div className="navigation">
            <ul className="navbar" style={{backgroundColor: 'white'}}>            
                <li><a href="#">Home</a></li>
                <li><a href="#">Sing in</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>
        </div>       
    )
}

export default Navbar;