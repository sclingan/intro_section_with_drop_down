import logo from '../public/images/logo.svg'

function Header() {

    return (
        <header>
            <img src={logo} alt=''></img>
            <nav>
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