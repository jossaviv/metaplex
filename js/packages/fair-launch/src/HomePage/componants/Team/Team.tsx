import { Member } from "./Member/Member"
import "./Team.css"
import joss from "./joss.png"
import nora from "./nora.png"
import elli from "./elli.png"
import hlanga from "./hlanga.png"
import xi from "./xi.png"
import dan from "./dan.png"


export type MemberData = {
    imgSrc: any;
    name: string;
    role: string;
    bio: string;
}
const members: MemberData[] = [


    {
        imgSrc: xi,
        name: "Xi Ding",
        role: "Artist",
        bio: "Xi Ding is an artist specialized in faces. As a professional live caricature artist, he has drawn nearly 100K faces."
    },
    {
        imgSrc: elli,
        name: "Elli De Gouveia",
        role: "Founder",
        bio: "I love building new things, starting from a blank whiteboard or early-stage prototype and transforming it into something people truly value."
    },
    {
        imgSrc: joss,
        name: "Joss Aviv",
        role: "Developer",
        bio: "Joss is a senior developer at WIX.com, with more than 10 years experience in software development."
    },
    {
        imgSrc: hlanga,
        name: "Hlanga Vena",
        role: "Marketing",
        bio: "Digital marketer who helps companies scale by implementing systems that predictably increase revenue through social media and online advertising"
    },
    {
        imgSrc: nora,
        name: "Nora Neus",
        role: "Writer",
        bio: "Nora is an Emmy-award nominated journalist and a traditionally published author of two books. She lives in New York City with her partner!"
    },
    {
        imgSrc: dan,
        name: "Daniel Dedekind",
        role: "Content Strategist",
        bio: "Daniel is a freelance filmmaker, photographer and content director for multiple leading international brands. He lives in Johannesburg, South Africa."
    },
]

export const Team: any = () => {
    return (
        <>
            <div style={{ display: "contents"}}>
                <div className="team-title">TEAM</div>
                <div className="members-container">
                    {members.map((data: MemberData, i: number) => (
                        <Member data={data} ></Member>
                    ))}
                </div>

            </div>
        </>
    )
}