import logo from '/images/logo.svg'
import icon_close from '/images/icon-close-menu.svg'
import icon_menu from '/images/icon-menu.svg'

function Header() {

    return (
        <header>
            <div>
            <img src={logo} alt=''></img>
            <img src={icon_menu} alt=''></img>
            </div>
            <nav className='nav'>
                <img src={icon_close} alt=''></img>
                <ul>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                    <li>Login</li>
                    <li><button>Register</button></li>
                </ul>
            </nav>
        </header>
  
    )
  }
  
  export default Header