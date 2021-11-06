
import "./HorizontalRoadmap.css"
import "./HorizontalRoadmap2.css"

export const HorizontalRoadmap: any = () => {

    return (
        <>
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
                                                <h6 className="roadmap-year-s2">NOV 2021</h6>
                                                <div className="roadmap-text">
                                                    <ul>
                                                        <li>
                                                            - Public Mint
                                                        </li>
                                                        <li>
                                                            - Creating DIAMOND VAULT
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i3">
                                                <h6 className="roadmap-year-s2">Q4 2021</h6>
                                                <div className="roadmap-text">
                                                    <p>Creation of Diamond Vaul.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i4">
                                                <h6 className="roadmap-year-s2">Q4 2018</h6>
                                                <div className="roadmap-text">
                                                    <p>Launch of the mobile Best versions of the Publisher application and Press Tour.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i5">
                                                <h6 className="roadmap-year-s2">Q1 2019</h6>
                                                <div className="roadmap-text">
                                                    <p>Release of the initial versions of operational applications and smart contracts.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="roadmap roadmap-s2 roadmap-i6">
                                                <h6 className="roadmap-year-s2">Q2 2019</h6>
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