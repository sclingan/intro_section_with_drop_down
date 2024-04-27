import logo from '/images/logo.svg'
import icon_close from '/images/icon-close-menu.svg'
import icon_menu from '/images/icon-menu.svg'
import arrow_down from '/images/icon-arrow-down.svg'
import icon_todo from '/images/icon-todo.svg'
import icon_calendar from '/images/icon-calendar.svg'
import icon_reminders from '/images/icon-reminders.svg'
import icon_planning from '/images/icon-planning.svg'

function Header() {

    function open_close_Nav() {
        const icon = document.getElementById('nav')!;
        if(icon.className === 'nav') {
            console.log('nav')
            icon.classList.remove('nav');
            icon.classList.add('visually-hidden');
        }else{
            icon.classList.remove('visually-hidden');
            icon.classList.add('nav');
        }
    }

    return (
        <header>
            <div className='div_logo'>
            <img src={logo} alt=''></img>
            <img src={icon_menu} alt='' onClick={open_close_Nav} className='icon_menu'></img>
            </div>
            <nav className='visually-hidden' id='nav'>
                <img src={icon_close} alt='' className='icon-close' id='icon-close' onClick={open_close_Nav}></img>
                <ul>
                    <li><details>
                        <summary>Features<img src={arrow_down} alt='' className='details_open'></img></summary>
                        <ul className='features'>
                            <li><img src={icon_todo} alt=''></img>Todo List</li>
                            <li><img src={icon_calendar} alt=''></img>Calendar</li>
                            <li><img src={icon_reminders} alt=''></img>Reminders</li>
                            <li><img src={icon_planning} alt=''></img>Planning</li>
                        </ul>
                        </details></li>
                    <li><details>
                        <summary>Company<img src={arrow_down} alt='' className='details_open'></img></summary>
                        <ul>
                            <li>History</li>
                            <li>Our Team</li>
                            <li>Blog</li>
                        </ul>
                        </details></li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
                <div className='nav-footer'>
                <p>Login</p>
                <button className='register'>Register</button>
                </div>
            </nav>
        </header>
  
    )
  }
  
  export default Header