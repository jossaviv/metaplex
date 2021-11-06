import { Hero } from "./Components/Hero/Hero"
import { Intro } from "./Components/Intro/Intro"
import { Roadmap } from "./Components/Roadmap/Roadmap"
import { Vault } from "./Components/Vault/Vault"
import { Footer } from "./Components/Footer/Footer"
import "./HomePage.css"

export const HomePage: any = () => {
    return (
        <>
            {/* <CustomToolbar></CustomToolbar> */}
            <div className="home-main-container">
                <Hero />
                <Intro />
                <Vault />
                <Roadmap />
                <Footer />
                {/* <div className="home-inner-container">
                   
                </div> */}
            </div>
        </>
    )
}