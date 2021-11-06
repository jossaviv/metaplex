import { HorizontalRoadmap } from "../../../HomePage/componants/HorizontalRoadmap/HorizontalRoadmap";
import "./Roadmap.css";

export const Roadmap: any = () => {
    return (
        <>
            <div className="roadmap-container">

                <div className="roadmap-title-container">
                    <div className="roadmap-timeline-container">
                        <p className="roadmap-timeline-text">TIMELINE</p>
                    </div>
                    <div className="roadmap-roadmap-container">
                        <p className="roadmap-roadmap-text">ROADMAP</p>
                    </div>
                </div>
                <p className="roadmap-roadmap-desc">
                    ICO Crypto is developing a global data-driven platform for the world.
                    <br />
                    Powered by blockchain and smart contracts.
                </p>

                <HorizontalRoadmap />
            </div>
        </>
    )
}