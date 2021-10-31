import "./FAQ.css"
import { QA } from "./QA/QA"

const qas = [
    {
        q: "WHEN IS MINT?",
        a: "November 10th 2021."
    },
    {
        q: "IS THERE A PRE-SALE?",
        a: <><b>YES</b>, for the first 1K members in discord. No invites or shilling.</>
    },
    {
        q: "WHAT IS THE COST?",
        a: "0.99 SOL"
    },
    {
        q: "WHAT BLOCKCHAIN?",
        a: "Solana."
    },
    {
        q: "IS THERE RARITY?",
        a: <>Yes.</>
    },
    {
        q: "WHAT IS TRANSACTION LIMIT?",
        a: "None."
    },
    {
        q: "WHICH MARKETPLACE WILL BE USED?",
        a: "Magic Eden."
    },
    {
        q: "ROYALTY FEES?",
        a: "5% fee."
    },
    // {
    //     q: "ANYBODIES HELD FROM SALE?",
    //     a: "200 (Giveaways, Marketing and team)"
    // },
]

export const FAQ = () => {
    return (
        <>
            <div style={{width:"100vw", overflow: "none"}}>
                <p className="qa-title"></p>
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