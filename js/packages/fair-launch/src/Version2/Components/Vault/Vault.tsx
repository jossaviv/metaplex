import "./Vault.css";
import VaultImg from "./diamond-vault-map.png";
import VaultImgV from "./diamond-vault-map-vertical.png";

const Zoom = require('react-reveal/Zoom');

export const Vault: any = () => {
    return (
        <>
            <div className="vault-container">

                <h1 className="vault-title">
                    <Zoom top cascade>
                        DIAMOND <span className="vault-title-line">VAULT</span>
                    </Zoom>
                </h1>
                <div className="vault-content">
                    <p >
                        <Zoom >
                            DIAMOND VAULT is your only way of accessing the ANYWHERE ISLAND. We DO NOT want flippers, farmers & short term players to be sitting around the bonfire (AMA), being part of the decision making that has long-term ramifications to our Diamond Handed community.
                            <br /><br />
                            We plan to grow the Anybodies brand to incredible heights, becoming the a household name for creating & collaborating on products that will exist and be sold in the real world & metaverse. This is why we made the Diamond Vault, to create a powerful like-minded community.
                        </Zoom>
                    </p>
                </div>
            </div>
        </>
    )
}