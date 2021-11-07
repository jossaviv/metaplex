import "./Vault.css";
import VaultImg from "./diamond-vault-map.png";
import VaultImgV from "./diamond-vault-map-vertical.png";

const Zoom = require('react-reveal/Zoom');

export const Vault: any = () => {
    return (
        <>
            <div className="vault-container">

                <p className="vault-title">
                    DIAMOND <span className="vault-title-line">VAULT</span>
                </p>
                <div className="vault-content">
                    <p >
                        <b>DIAMOND VAULT</b> is your only way of accessing the <b>ANYWHERE ISLAND</b>. We DO NOT want flippers, farmers & short term players to be sitting around the bonfire (AMA), being part of the decision making that has long-term ramifications to our Diamond Handed community.
                        <br /><br />
                        We plan to grow the Anybodies brand to incredible heights, becoming the household name for creating & collaborating on products that will exist in the metaverse and will be sold in the real world. This is why we made the Diamond Vault, to create a powerful like-minded community.
                    </p>
                </div>
                <img className="vault-infograph" src={VaultImg} />
                <img className="vault-infograph-v" src={VaultImgV} />
            </div>
        </>
    )
}