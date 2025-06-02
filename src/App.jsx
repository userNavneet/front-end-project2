import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import NewsSection from "./components/NewsSection";
import TeamsSec from "./components/TeamsSec";
import Playerranking from "./components/Player_rank.jsx";
import Footer from "./components/Footer.jsx";
import TextAnime from "./components/TextAnime.jsx";
import Loader from './components/Loader.jsx'
import NewMarkq from "./components/NewMarkq.jsx";
import Test from './components/Test.jsx'
import { useState } from "react";
function App() {
    const [latestHover, setlatestHover] =  useState(false)
    const [f1Hover,setf1Hover] = useState(false)
    return (
        <>

        
            <Loader/>
            <Navigation  setlatestHover={setlatestHover} latestHover={latestHover} setf1Hover={setf1Hover} f1Hover={f1Hover} />
            <Hero setlatestHover={setlatestHover} setf1Hover={setf1Hover}/>
            <Test setlatestHover={setlatestHover} setf1Hover={setf1Hover}/>
            <TextAnime setlatestHover={setlatestHover} setf1Hover={setf1Hover}/>
            <NewsSection setlatestHover={setlatestHover} setf1Hover={setf1Hover}/>
            <TeamsSec setlatestHover={setlatestHover} setf1Hover={setf1Hover}/>
            <Playerranking/>
            <NewMarkq  setlatestHover={setlatestHover} setf1Hover={setf1Hover}/>
            <Footer setlatestHover={setlatestHover} setf1Hover={setf1Hover}/>
            
        </>
    );
}
export default App;
