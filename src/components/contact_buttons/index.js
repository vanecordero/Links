import wa from "img/wa.svg"
import mail from "img/email.svg"
import phone from "img/phone.svg"
import sty from "./contactbtn.module.css"

function ContactBtn() {
    
    const goWassap=() =>{
        console.log("wassap")
    }
    const goEmail=() =>{
        console.log("wassap")
    }
    const goPhone=() =>{
        console.log("wassap")
    }

    return ( 
    <div className={sty.img_container}>
        <img src={wa} onClick={goWassap}/>
        <img src={mail} onClick={goEmail}/>
        <img src={phone} onClick={goPhone}/>
    </div>
    );
}

export default ContactBtn;