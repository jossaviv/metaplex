import { Hero } from "./componants/Hero/Hero"
import { OurVision } from "./componants/OurVision/OurVision"
import { FAQ } from "./componants/FAQ/FAQ"
import { Roadmap } from "./componants/Roadmap/Roadmap"
import { CustomToolbar } from "./componants/Toolbar/Toolbar"
import "./HomePage.css"
import { Team } from "./componants/Team/Team"
import { Footer } from "./componants/Footer/Footer"
import { Brand } from "./componants/Brand/Brand"

export const HomePage: any = () => {
    return (
        <>
            {/* <CustomToolbar></CustomToolbar> */}
            <div className="home-main-container">
                {/* <div className="home-inner-container">
                   
                </div> */}
                <Hero></Hero>
                <OurVision></OurVision>
                <Brand></Brand>
                <Roadmap></Roadmap>
                <FAQ></FAQ>
                <Team></Team>
                <Footer></Footer>
            </div>
        </>)
}