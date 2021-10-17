import "./Footer.css"
import twitter from "./twitter.png"
import discord from "./discord.png"

export const Footer: any = () => {
    const twitterHandler = () => {
        let win = window.open(`https://bit.ly/3iRGCV6`, "_blank");
        win?.focus();
    }
    const discordHandler = () => {
        let win = window.open(`https://bit.ly/3au6bqU`, "_blank");
        win?.focus();
    }

    return (
        <>
            <div className="footer-container">
                <div className="footer-inner-container">
                    <div onClick={twitterHandler} className="social-item">
                        <img className="footer-img" src={twitter} />
                    </div>
                    <div onClick={discordHandler} className="social-item">
                        <img className="footer-img" src={discord} />
                    </div>
                </div>
                <div className="footer-copy">© Anybodies, 2021</div>
            </div>
        </>
    )
}