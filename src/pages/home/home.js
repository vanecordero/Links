import { useState } from "react";
import {Links}  from "services/Links";
import Profile from "../../components/img_profile";
import Button from "components/button";
import Footer from "components/footer";
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
			<div className={sty.btn_container}>
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
				<Footer/>	
			</div>
			
		</div>
     )
}

