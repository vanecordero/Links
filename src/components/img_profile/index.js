//import photo from 'img/'
import sty from './img_profile.module.css'
import ContactBtn from 'components/contact_buttons';


export default function Profile() {
    
    return ( 
        < div className={sty.container}>
            <div className={sty.profile_img}>
                {/* <img src={"photo"} alt={"Foto de Vanessa Cordero - Desarrolladora Frontend"} /> */}
            </div>
            <p className={sty.text}>Vanessa Cordero</p>
            <ContactBtn/>
        </ div>
     );
}

