import logo from "../assets/img/logo.png"
import FooterConcluidos from "./FooterConcluidos"
import Perguntas from "./Perguntas.js"
export default function App() {
    return (
        <>
            <div className="screen-container">
                <div className="logo-container">
                    <img src={logo} alt = ""/>
                    <h1>ZapRecall</h1>
                </div>
                <FooterConcluidos></FooterConcluidos>
                <Perguntas></Perguntas>
            </div>
        </>
    )
}
