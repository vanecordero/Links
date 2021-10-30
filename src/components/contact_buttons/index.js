import wa from "img/wa.svg"
import mail from "img/email.svg"
import phone from "img/phone.svg"
import sty from "./contactbtn.module.css"
import ln from "img/linkedin.svg"

const WRITTEME= "mailto:contact@rvcordero.com?Subject=Contact via web links"
const CALLME='tel:+1-809-217-9600'
const TEXTME='https://api.whatsapp.com/send?phone=18092179600&text=Hello!, I have seen your contact through your links and I would love to have a meeting with you.'
const LINK = "www.linkedin.com/in/rvco"

function ContactBtn() {
    
    const goWassap=() =>{
        window.open(TEXTME, "_blank");
    }
    const goEmail=() =>{
        window.location.href = WRITTEME
    }
    const goPhone=() =>{
        window.location.href = CALLME
    }
    const goLinkedin=()=>{
        window.open(LINK, "_blank");
    }
    return ( 
    <div className={sty.img_container}>
        <img src={wa} onClick={goWassap} alt="Contact me by WhatsApp icon/button"/>
        <img src={mail} onClick={goEmail} alt="Contact me by Email icon/button"/>
        <img src={phone} onClick={goPhone} alt="Contact me by phone icon/button"/>
        <img src={ln} onClick={goLinkedin} alt="Contact me by phone icon/button"/>
    </div>
    );
}

export default ContactBtn;