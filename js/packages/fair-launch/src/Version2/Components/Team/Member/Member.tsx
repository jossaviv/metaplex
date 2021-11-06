import { MemberData } from "../Team"
import "./Member.css"
import insta from "./insta.png"
import twitter from "./twitter.png"
import linkedin from "./linkedin.png"


export const Member: any = ({ data }: { data: MemberData }) => {

    const handleSocialClick = (url: string | undefined) => {
        if (url) {
            const w = window.open(url, "_")
            w?.focus()
        }
    }

    return (
        <>
            <div className="member-container">
                <div className="member-inner-container">
                    <img className="member-img" src={data.imgSrc}></img>
                    <div className="member-name">{data.name}</div>
                    <div className="member-role">{data.role}</div>
                    <div className="member-bio">{data.bio}</div>
                    <div className="member-social-container">
                        {data.twitter && <img onClick={e => handleSocialClick(data.twitter)} className="member-social-img" src={twitter}></img>}
                        {data.insta && <img onClick={e => handleSocialClick(data.insta)} className="member-social-img" src={insta}></img>}
                        {data.linkedin && <img onClick={e => handleSocialClick(data.linkedin)} className="member-social-img" src={linkedin}></img>}
                    </div>
                </div>
            </div>
        </>
    )
}