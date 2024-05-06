import logo from '/images/logo.svg'
import icon_close from '/images/icon-close-menu.svg'
import icon_menu from '/images/icon-menu.svg'
import arrow_down from '/images/icon-arrow-down.svg'
import icon_todo from '/images/icon-todo.svg'
import icon_calendar from '/images/icon-calendar.svg'
import icon_reminders from '/images/icon-reminders.svg'
import icon_planning from '/images/icon-planning.svg'

function Header() {

    const mediaQuery = window.matchMedia("(min-width: 50rem)");

    function changeNav(e){
        if(e.matches){
        const nav = document.getElementById('nav');
        nav?.classList.remove('visually-hidden')
        nav?.classList.add('inline_nav');
        }
    }
    /* make this so it checks onload not just onchange */
    mediaQuery.addEventListener("change", changeNav);

    function open_close_Nav() {
        const icon = document.getElementById('nav')!;
        // const main = document.getElementById('main')!;
        if(icon.className === 'nav') {
            icon.classList.remove('nav');
            icon.classList.add('visually-hidden');
        }else{
            icon.classList.remove('visually-hidden');
            icon.classList.add('nav');
            // main.classList.add('blur');
            // main.classList.remove('main');
        }
    }

    function rotate(e) {
        const target = e?.target?.id;
        const arrow = document.getElementById('arrow')!;
        const arrow2 = document.getElementById('arrow2')!;
        let  element;
        if(target === 'arrow2') {
            element = arrow2;
        }else{
            element = arrow;
        }

        if(element.className === 'details_open') {
            element.classList.remove('details_open');
            element.classList.add('details_close');
        }else{
            element.classList.remove('details_close');
            element.classList.add('details_open');
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
                        <summary>Features<img src={arrow_down} alt='' className='details_open' id='arrow' onClick={rotate}></img></summary>
                        <ul className='features'>
                            <li><img src={icon_todo} alt=''></img>Todo List</li>
                            <li><img src={icon_calendar} alt=''></img>Calendar</li>
                            <li><img src={icon_reminders} alt=''></img>Reminders</li>
                            <li><img src={icon_planning} alt=''></img>Planning</li>
                        </ul>
                        </details></li>
                    <li><details>
                        <summary>Company<img src={arrow_down} alt='' className='details_open' id='arrow2' onClick={rotate}></img></summary>
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
                <p className='login'>Login</p>
                <button className='register'>Register</button>
                </div>
            </nav>
        </header>
  
    )
  }
  
  export default Header