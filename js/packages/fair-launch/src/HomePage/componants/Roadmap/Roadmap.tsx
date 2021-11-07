import "./Roadmap.css"


const bulletsData = [
    {
        title: "MAIN SALE",
        content: "9,876 anybodies will be open for public mint for 0.99 SOL."
    },
    {
        title: "DIAMOND VAULT",
        content: (
            <div>The diamond vault is your only way of accessing the Anywhere Island. We DO NOT want flippers, farmers & short term players to be sitting around the bonfire(AMA), being part of the decision making that has long-term ramifications to our Diamond Handed community.

                We plan to grow the Anybodies brand to incredible heights, becoming the first fashion brand to create & collaborate on products that will exist and be sold in the real world & metaverse. This is why we made the Diamond Vault, to create a powerful like-minded community.
                <br />
                <br />
                <br />

                <b>Structure</b>
                <ul>
                    <li>
                        Entry Fee is 1 (one) Anybodies.
                    </li>
                    <li>
                        Your Anybodies will be locked in the Diamond Vault for a chosen amount of time: 4 Weeks.
                    </li>
                    <li>
                        Upon expiry you can choose to either relock your Anybodies OR have it sent back to your wallet.
                    </li>
                </ul>

                <br />
                <b >Benefit</b>
                <br />
                <span className="roadmap-sub-text">REWARDS: </span>Members will receive free airdrops over the next 120 days, which include mutations and rarer traits. You will be given discount codes to use on the e-commerce website (cost price). First 500 Island Members will receive our Anybodies x Nike AF1 Custom Sneakers.
                <br /><br />
                <span className="roadmap-sub-text">SCARCITY: </span>the more Anybodies locked in the Diamond Vault, the fewer can be listed on the secondary market. Giving the diamond hands more control of the floor price, preserving future value.
                <br /><br />
                <span className="roadmap-sub-text">CREATIVE CONTRIBUTION: </span>you will be able to define & decide on the products, designs & collabs, we as a brand do. You are entitled to 1 (one) vote for every Anybodies owned.
            </div>
        )
    },
    {
        title: "NIKE AF1 SNEAKER GIVEAWAY",
        content: "We will be giving away 500 Anybodies x AF1's to our first 500 Island Members (people who have joined the Diamond Vault)."
    },
    {
        title: " LAYING THE FOUNDATIONS",
        content: (
            <div>Once we have sold out on mint, we will begin creating the foundations of our business:
                <br />
                <ul>
                    <li>
                        Purchase domain
                    </li>
                    <li>
                        Build Shopify Site
                    </li>
                    <li>
                        Register Private Limited Co.
                    </li>
                    <li>
                        Hire amazing Fashion Designers
                    </li>
                    <li>
                        Hire top Digital Agency for marketing
                    </li>
                    <li>
                        Find manufacturing & fulfilment partners
                    </li>
                    <li>
                        Begin R&D for first Merch Drop
                    </li>
                </ul>
            </div>
        )
    },
    {
        title: "NOBODIES MUTATION AIRDROP",
        content: (
            <div>
                During your time on the Anywhere Island, you will see strange fruits starting to grow: orange watermelons and purple pears, green raspberries and pink bananas.
                <br />
                <br />
                Only those committed to the Diamond Vault will receive their fruit as an Airdrop. To eat the fruit you will have to make your way to https://nobodies.io/ website and complete your mission. Upon completion your Anybodies will be able to eat these strange fruits and begin to mutate into Nobodies.
            </div>
        )
    }
]


export const RoadmapOld = () => {
    return (
        <>
            {/* <div className="top-border"></div> */}
            <div>
                <div className="roadmap-title"><div>ROADMAP</div></div>
                <div className="roadmap-main-container">
                    <div className="roadmap-inner-container">
                        {bulletsData.map((d, i) => <BulletPoint key={i} index={i}></BulletPoint>)}
                        {/* <BulletPoint></BulletPoint>
                        <BulletPoint></BulletPoint>
                        <BulletPoint></BulletPoint> */}
                    </div>
                </div>
            </div>
        </>
    )
}


const BulletPoint: any = ({ index }: any) => {
    return (
        <>

            <div style={{ display: "flex" }}>
                <div>
                    <div className="bullet-num-container">
                        <div className="bullet-num-text">

                        </div>
                    </div>
                    <div className="bullet-line"></div>
                </div>
                <div className="bullet-bg">
                    <div className="bullet-num-text-inline">{index + 1}.</div>
                    <div className="bullet-title">
                        {bulletsData[index].title}
                    </div>
                    <p className="bullet-content">
                        {bulletsData[index].content}
                    </p>
                </div>
            </div>

        </>
    )
}