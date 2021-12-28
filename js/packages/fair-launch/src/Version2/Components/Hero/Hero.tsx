import "./Hero.css";
import heroImg from "./hero-img.png"

export const Hero = () => {

    const goToMint = () => {
        const w = window.open("https://vault.anybodies.io/", "_")
        w?.focus()
    }

    return (
        <>
            <div className="hero-container">
                <h1 className="hero-title">ANYBODIES</h1>
                <p className="hero-subtitle">3,000 collectibles representing diversity</p>
                <div onClick={goToMint} className="hero-mint">DIAMOND VAULT</div>
            </div>
        </>
    )
}