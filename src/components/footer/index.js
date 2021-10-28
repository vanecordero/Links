import iso from 'img/iso_white.svg'
import sty from './footer.module.css'

export default function Footer(){


    return(
        <>
            <img src={iso} alt="Logo RVC" className={sty.iso}/>
            <p className={sty.text}>Frontend Developer</p>
        </>
    )
}