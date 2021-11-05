
import "./HorizontalRoadmap.css"
import "./HorizontalRoadmap2.css"

export const HorizontalRoadmap: any = () => {

    return (
        <>
            {/* <div classNameName="owl-stage-outer">
                <div classNameName="owl-stage" style={{ transform: 'translate3d(-888px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '2075px' }}>
                    <div classNameName="owl-item" style={{ width: '297.333px', marginRight: '-1px' }}>
                        <div classNameName="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                            <h6 classNameName="roadmap-year-s2">Q1 2018</h6>
                            <h5 classNameName="title title-sm roadmap-date">Jan - Apr 2018</h5>
                            <div classNameName="roadmap-text">
                                <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                            </div>
                        </div>
                    </div>
                    <div classNameName="owl-item" style={{ width: '297.333px', marginRight: '-1px' }}>
                        <div classNameName="roadmap roadmap-s2 roadmap-i2 roadmap-running">
                            <h6 classNameName="roadmap-year-s2">Q2 2018</h6>
                            <h5 classNameName="title title-sm roadmap-date">Jul - Aug 2018</h5>
                            <div classNameName="roadmap-text">
                                <p>Start of the ICO Crypto Platform Development and Introduction of advertiser auctions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div style={{ position: "relative", height: "150px", textAlign: "center", margin: "auto" }}>
                <div style={{ height: "150px", display: "flex", width: "100vw" }}>
                    <p style={{ fontSize: "100px", margin: "auto", lineHeight: "100px", color: "#ffffff08" }}>TIMELINE</p>
                </div>
                <div style={{ position: "absolute", height: "150px", display: "flex", width: "100vw", top: "0px", }}>
                    <p style={{ fontSize: "50px", margin: "auto" }}>Roadmap</p>
                </div>
            </div>

            <section className="section" id="roadmap">

                <div className="container container-xxl">
                    <div className="nk-block">
                        <div className="roadmap-wrap roadmap-wrap-ovl-right text-center">
                            <div className="roadmap-line-s2"></div>
                            <div className="roadmap-slider has-carousel carousel-nav-center owl-carousel owl-loaded owl-drag blank-added"
                                data-blank="true" data-items="5" data-items-tab-l="4" data-items-tab-p="3" data-items-mobile="2"
                                data-margin="-1" data-navs="true">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage">
                                        <div className="owl-item active">
                                            <div className="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                                                <h6 className="roadmap-year-s2">Q4 2021</h6>
                                                <h5 className="title title-sm roadmap-date">Nov</h5>
                                                <div className="roadmap-text">
                                                    <p>Public Mint of 9,876 for 0.99 SOL.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i3">
                                                <h6 className="roadmap-year-s2">Q4 2021</h6>
                                                <h5 className="title title-sm roadmap-date">Dec</h5>
                                                <div className="roadmap-text">
                                                    <p>Creation of Diamond Vaul.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i4">
                                                <h6 className="roadmap-year-s2">Q4 2018</h6>
                                                <h5 className="title title-sm roadmap-date">Nov - Dec 2018</h5>
                                                <div className="roadmap-text">
                                                    <p>Launch of the mobile Best versions of the Publisher application and Press Tour.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i5">
                                                <h6 className="roadmap-year-s2">Q1 2019</h6>
                                                <h5 className="title title-sm roadmap-date">Jan - Apr 2019</h5>
                                                <div className="roadmap-text">
                                                    <p>Release of the initial versions of operational applications and smart contracts.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i6">
                                                <h6 className="roadmap-year-s2">Q2 2019</h6>
                                                <h5 className="title title-sm roadmap-date">Jul - Aug 2019</h5>
                                                <div className="roadmap-text">
                                                    <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="item-blank"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}