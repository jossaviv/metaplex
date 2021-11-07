// import { HorizontalRoadmap } from "../../../HomePage/componants/HorizontalRoadmap/HorizontalRoadmap";
import { RoadmapOld } from "../../../HomePage/componants/Roadmap/Roadmap";
import { Team } from "../Team/Team";
import { HorizontalRoadmap } from "./HorizontalRoadmap/HorizontalRoadmap";
import "./Roadmap.css";
import swipeImg from "./swipe-gest.png"

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
                    ANYBODIES is a diversity-driven DAO that will collaboratively design & create products for metaverses that are backed by their real-world counterpart
                </p>
                <HorizontalRoadmap />
                <img className="roadmap-gesture-img" src={swipeImg} />
                <Team />
            </div>

        </>
    )
}