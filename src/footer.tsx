import data from '/images/client-databiz.svg'
import audio from '/images/client-audiophile.svg'
import meet from '/images/client-meet.svg'
import maker from '/images/client-maker.svg'

function Footer() {
    return(
        <footer>
            <img src={data} alt='' className='footer_logo'></img>
            <img src={audio} alt='' className='footer_logo'></img>
            <img src={meet} alt='' className='footer_logo'></img>
            <img src={maker} alt='' className='footer_logo'></img>
        </footer>
    )
}

export default Footer