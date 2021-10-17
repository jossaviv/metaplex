import { MemberData } from "../Team"
import "./Member.css"


export const Member: any = ({ data }: { data: MemberData }) => {
    return (
        <>
            <div className="member-container">
                <div className="member-inner-container">
                    <img className="member-img" src={data.imgSrc}></img>
                    <div className="member-name">{data.name}</div>
                    <div className="member-role">{data.role}</div>
                    <div className="member-bio">{data.bio}</div>
                </div>

            </div>
        </>
    )
}