import "./HorizontalRoadmap.css";
const Slide = require('react-reveal/Fade');

export const HorizontalRoadmap: any = () => {
    return (
        <>
            <div className="hm-conatiner">
                <HorizontalRoadmapItem finished={true}></HorizontalRoadmapItem>
                <HorizontalRoadmapItem finished={false}></HorizontalRoadmapItem>
                <HorizontalRoadmapItem finished={false}></HorizontalRoadmapItem>
                <HorizontalRoadmapItem finished={false}></HorizontalRoadmapItem>
                <HorizontalRoadmapItem finished={false}></HorizontalRoadmapItem>
                <HorizontalRoadmapItem finished={false}></HorizontalRoadmapItem>
                <HorizontalRoadmapItem finished={false}></HorizontalRoadmapItem>
                <HorizontalRoadmapItem finished={false}></HorizontalRoadmapItem>
            </div>
        </>
    )
}

const HorizontalRoadmapItem: any = ({ finished }: any) => {
    return (
        <>

            <Slide right>
                <div className="hm-item-conteiner">
                    <h1 className="hm-item-bar-title">NOV 2021</h1>
                    <div className="hm-item-bar-conteiner">
                        {finished ? (<>
                            <div className="hm-item-bar-line-finished"></div>
                            <div className="hm-item-bar-dot-finished"></div>
                        </>) :
                            (<>
                                <div className="hm-item-bar-line"></div>
                                <div className="hm-item-bar-dot"></div>
                            </>)}

                    </div>
                    <p className="hm-item-bar-desc">
                        - Public Mint
                        <br />
                        - Creating DIAMOND VAULT
                    </p>
                </div>
            </Slide>

        </>
    )
}