import Profile from "../img_profile";
import {Links}  from "services/Links";
import Button from "components/button";
import { useState } from "react";
import iso from 'img/iso_white.svg'
import sty from "./homeStyle.module.css"

export default function Home() {

    const [LinkProp] =  useState(Links)
    const [color] = useState(["green", "pink", "purple"])
    
    const handleClick=(e)=>{
        window.open(LinkProp[e.target.value]["url"], '_blank');
    }

    return ( 

        <div className={sty.container}>
            <div>
                <Profile/>
            </div>
            <div>
            {
                Object.keys(LinkProp).map((val, i) =>{
                  return  <Button key={"button_"+i}
                  onClick={handleClick} 
                  text={LinkProp[val]["name_ele"]}
                  styOp={color[i]}
                  value={val}/>
                })
            }
            </div>
            <div>
                <img src={iso} alt="Logo RVC" className={sty.iso}/>
            </div>
        </div>
     );
}

