// import { HorizontalRoadmap } from "../../../HomePage/componants/HorizontalRoadmap/HorizontalRoadmap";
import { Team } from "../Team/Team";
import { HorizontalRoadmap } from "./HorizontalRoadmap/HorizontalRoadmap";
import "./Roadmap.css";
const Zoom = require('react-reveal/Zoom');

export const Roadmap: any = () => {
    return (
        <>
            <div className="roadmap-container">

                <div className="roadmap-title-container">
                    <div className="roadmap-timeline-container">
                        <p className="roadmap-timeline-text">TIMELINE</p>
                    </div>
                    <div className="roadmap-roadmap-container">
                        <Zoom top cascade>

                            <p className="roadmap-roadmap-text">ROADMAP</p>
                        </Zoom>
                    </div>
                </div>
                <p className="roadmap-roadmap-desc">
                    ICO Crypto is developing a global data-driven platform for the world.
                    <br />
                    Powered by blockchain and smart contracts.
                </p>
                <HorizontalRoadmap />
                <Team />
            </div>

        </>
    )
}