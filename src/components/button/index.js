import sty from './buttonsStyles.module.css'

export default function Button({onClick, text, styOp,value}) {    
    return ( 
        <div>
            <button onClick={onClick}
            value={value}
            type="button"
            className={
                (styOp==="green")? sty.greenButton :(styOp==="pink")? sty.pinkButton : sty.purpleButton
            }>
                {text}
            </button>
        </div>
        
     );
}

