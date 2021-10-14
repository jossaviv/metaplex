import "./Roadmap.css"


const bulletsData = [
    {
        title: "MAIN SALE",
        content: "9,876 anybodies will be open for public mint."
    },
    {
        title: "IP RIGHTS & HIGH RES",
        content: "Full Intellectual Property Rights are granted to buyers. You can request a High Resolution version of your Anybodies."
    },
    {
        title: "CHARITABLE DONATIONS",
        content: "5% of net proceeds of the mint sale will go to charity."
    },
    {
        title: "ISLAND HUNT",
        content: "5% of mint will be used for community giveaways. These will range from Gender Reassignment Surgery, Tattoos, $SOL and more."
    },
    {
        title: "MERCH & COLLABS",
        content: `Our merchandise store is our most valued aspect, providing utility and future value  to our community. One example we are working on is - We are in talks with "The brand with 3 stripes" to collaborate on a sneaker that will be exclusive to our members.`
    },
    {
        title: "CREATION OF ISLAND DAO",
        content: "We will establish our DAO using the Grape Protocol."
    }
]


export const Roadmap = () => {
    return (
        <>
            <div>
                <div className="roadmap-title">ROADMAP</div>
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
                            {index+1}
                        </div>
                    </div>
                    <div className="bullet-line"></div>
                </div>
                <div style={{ display: "grid" }}>
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