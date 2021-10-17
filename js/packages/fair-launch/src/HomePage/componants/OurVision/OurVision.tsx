import "./OurVision.css"
import { ImageSwitcher } from "./ImageSwitcher/ImageSwitcher"
// 9,876 unique bodies
// in need of anysols
export const OurVision = () => {
    return (
        <>
            <div>
                {/* <div className="vision-title">OUR VISION</div> */}
                <div className="vision-main-container">
                    <div className="vision-item-container">
                        <div className="vision-item">
                            <div style={{
                                height: "fit-content",
                                margin: "auto"
                            }}>
                                <div className="vision-unique">9,876 unique bodies</div>
                                < div className="vision-anysols"> in need of anysols</div>
                                <div className="vision-welcome-text"><b>9,876</b> hand-painted collectibles representing those traditionally not reflected in the NFT space, especially marginalized identities including race, sexuality, gender & more.</div>

                            </div>
                            <div className="vision-item-text">

                                {/* <div className="vision-welcome">Welcome, <b>Anybodies</b></div> */}
                            </div>
                        </div>
                        <div className="vision-item"><ImageSwitcher /></div>
                    </div>
                </div>
                {/* <div className="vision-text">
                    <span>*</span>
                    <br />
                    Our long term goal is to create a unisex clothing line that can be worn by anybody, helping them feel comfortable in their bodies.
                    We plan to collaborate with existing brands, putting our own unique twist onto each piece.
                </div>
                <div className="vision-text">
                    <span>*</span>
                    <br />

                    Holders of our Anybodies Collectibles will have the first option to purchase this merchandise, 24hrs after, we will open sale to the public.
                </div>
                <div className="vision-text">
                    <span>*</span>
                    <br />

                    If your Anybodies Collectible is used in any of the designs, you will receive royalties for each sale of that item.

                </div> */}
            </div>
        </>
    )
}