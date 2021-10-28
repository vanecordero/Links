import photo from 'img/vane.png'
import sty from './img_profile.module.css'
import ContactBtn from 'components/contact_buttons';


export default function Profile() {
    
    return ( 
        < div className={sty.container}>
            <img src={photo} className={sty.profile_img} alt={"Foto de Vanessa Cordero - Desarrolladora Frontend"} />
            <p className={sty.text}>Vanessa Cordero</p>
            <ContactBtn/>
        </ div>
     );
}

