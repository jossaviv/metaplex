import { Hero } from "./componants/Hero/Hero"
import { OurVision } from "./componants/OurVision/OurVision"
import { CustomToolbar } from "./componants/Toolbar/Toolbar"
import "./HomePage.css"

export const HomePage: any = () => {
    return (
        <>
            <CustomToolbar>asd</CustomToolbar>
            <div className="home-main-container">
                <div className="home-inner-container">
                    <Hero></Hero>
                </div>
                <OurVision></OurVision>
            </div>
        </>)
}