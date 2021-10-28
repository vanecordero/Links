import bgDesk from 'img/bg_desktop.svg'
import Home from './home/home';
import bgMovil from "img/bg_mobile.svg"
const css = `
body{
    min-height: 100vh;
    weidth:100%;
    background-image: url(${bgDesk});
    background-repeat:no-repeat;
    background-size: cover;
    word-break: break-word;
    position: relative;
}

@media (max-width: 992px)  {
    body {
        background-image: url(${bgMovil});
    }
}`;


export default function Background() {
    return ( 
        <>
            <style scoped>{css}</style>
            <Home/>
        </>
        
     );
}
