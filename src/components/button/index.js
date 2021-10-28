import sty from './buttonsStyles.module.css'


export default function Button({onClick, text, styOp,value}) {    
    const css = `    
    .${styOp}Button::before{
        content: "${text}";
    }
    `;
    
    return ( 
        <div className={sty.shadow}>
            <style scoped>{css}</style>
            <button onClick={onClick}
            value={value}
            type="button"
            className={
                (styOp==="green")? `greenButton ${sty.greenButton}` :(styOp==="pink")? `pinkButton ${sty.pinkButton}` : `purpleButton ${sty.purpleButton}`
            }>
            </button>
        </div>
        
     );
}

