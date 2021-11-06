import "./Footer.css"
import twitter from "./twitter.png"
import discord from "./discord.png"
import medium from "./medium.png"

export const Footer: any = () => {
    const twitterHandler = () => {
        let win = window.open(`https://bit.ly/3iRGCV6`, "_blank");
        win?.focus();
    }
    const discordHandler = () => {
        let win = window.open(`https://bit.ly/3au6bqU`, "_blank");
        win?.focus();
    }
    const mediumHandler = () => {
        let win = window.open(`https://bit.ly/2YXovG6`, "_blank");
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
                    <div onClick={mediumHandler} className="social-item">
                        <img className="footer-img" src={medium} />
                    </div>
                </div>
                <div className="footer-copy">© Anybodies, 2021</div>
            </div>
        </>
    )
}