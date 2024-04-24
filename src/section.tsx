import hero from '/images/image-hero-mobile.png'
import heroDesktop from '/images/image-hero-desktop.png'

function Section() {

    return (
        <section>
          <picture>
            <source srcSet={hero} media="(max-width: 50rem)"/>
            <img src={heroDesktop} alt=""></img>
          </picture>
        </section>
     
    )
  }
  
  export default Section