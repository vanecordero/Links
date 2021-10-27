import bgDesk from '../img/bg_desktop.svg'
import Home from './home/home';
import bgMovil from "img/bg_mobile.svg"
const css = `
.backimage{
    min-height: 100vh;
    background-image: url(${bgDesk});
    background-repeat:no-repeat;
    background-size: cover;
    word-break: break-word;
}

@media (max-width: 992px)  {
    .backimage {
        background-image: url(${bgMovil});
    }
}
@media (max-width: 767px) {
    .backimage {
        
    }
}`;


export default function Background() {
    return ( 
        <>
        <style scoped>{css}</style>
        <div className="backimage">
            <Home/>
        </div>
        </>
        
     );
}
