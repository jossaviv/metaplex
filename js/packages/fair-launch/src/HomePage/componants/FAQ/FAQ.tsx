import "./FAQ.css"
import { QA } from "./QA/QA"

const qas = [
    {
        q: "WHEN IS MINT?",
        a: "October 31st 2021."
    },
    {
        q: "IS THERE A PRE-SALE?",
        a: <><b>YES</b>, for the first 1K members in discord. No invites or shilling.</>
    },
    {
        q: "WHAT IS THE COST?",
        a: "1.5 - 2.5 SOL (FLP)"
    },
    {
        q: "WHAT BLOCKCHAIN?",
        a: "Solana."
    },
    {
        q: "IS THERE RARITY?",
        a: <><b>NO</b>, we value all Anybodies equally. You get to decide the value of your Anybodies.</>
    },
    {
        q: "WHAT IS TRANSACTION LIMIT?",
        a: "3 per transaction."
    },
    {
        q: "WHICH MARKETPLACE WILL BE USED?",
        a: "We are still busy deciding. "
    },
    {
        q: "ROYALTY FEES?",
        a: "4% fee to the Creator & DAO."
    },
    {
        q: "ANYBODIES HELD FROM SALE?",
        a: "200 (Giveaways, Marketing and team)"
    },
]

export const FAQ = () => {
    return (
        <>
            <div>
                <div className="qa-title">FAQ</div>
                <div className="qa-main-container">
                    <div className="qa-inner-container">
                        {qas.map(qd =>
                            <>
                                <QA a={qd.a} q={qd.q}></QA>
                                <div className="qa-space"></div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}