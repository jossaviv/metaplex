import "./Hero.css"
import logo from "./logo.svg"
import anybodies from "./anybodies-logo.svg"


export const Hero: any = () => {
    return (
        <>
            <div className="hero-ng-img">
                <div className="hero-main-container">
                    <img className="hero-community-img" src={anybodies} />
                    <div className="hero-inner-container">
                        {/* <div>
                        <h1 className="hero-welcome-text">WELCOME, ANYBODIES</h1>
                    </div> */}


                    </div>
                </div>

            </div>
            {/* <div className="hero-collection-container">
                9,876 hand-painted collectibles founded on two key values: Inclusivity and Representation
            </div>
            <div className="hero-community-container">
                <div>
                    Our communities are traditionally not reflected in the NFT space, especially marginalized identities including race, sexuality, religion and gender.
                </div>
            </div> */}
        </>
    )
}