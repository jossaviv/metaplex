import { useRef } from "react";
import "./HorizontalRoadmap.css";
const Slide = require('react-reveal/Fade');


const datas = [
    {
        done: true,
        title: "NOV 2021",
        desc: <>
            - Public Mint
            <br />
            - DIAMOND VAULT
        </>
    },
    {
        done: false,
        title: "DEC 2021",
        desc: <>
            - Manufacture Sneakers
            <br />
            - Integrate Designs with Solana Games</>
    },
    {
        done: false,
        title: "JAN 2022",
        desc: <>
            - Employ additional designers
            <br />
            - R&D for first Merch Drop
            <br />
            - Integrate with ETH metaverses
        </>
    },
    {
        done: false,
        title: "FEB 2022",
        desc: <>
            - Delivery of Sneakers
            <br />
            - List products on Decentraland
            <br />
            - List products on Sandbox
        </>
    }
];

export const HorizontalRoadmap: any = () => {

    const ref = useRef(null);
    const scroll = (scrollOffset: number) => {
        if (ref.current) {
            const refAny: any = ref.current;
            refAny.scrollLeft += scrollOffset;
        }
    };
    return (
        <>
            <div className="hm-conatiner" ref={ref}>
                {datas.map(data => (<HorizontalRoadmapItem data={data}></HorizontalRoadmapItem>))}
            </div>
        </>
    )
}

const HorizontalRoadmapItem: any = ({ data }: any) => {
    return (
        <>

            {/* <Slide right> */}
            <div className="hm-item-conteiner">
                <h1 className="hm-item-bar-title">{data.title}</h1>
                <div className="hm-item-bar-conteiner">
                    {data.done ? (<>
                        <div className="hm-item-bar-line-finished"></div>
                        <div className="hm-item-bar-dot-finished"></div>
                    </>) :
                        (<>
                            <div className="hm-item-bar-line"></div>
                            <div className="hm-item-bar-dot"></div>
                        </>)}

                </div>
                <p className="hm-item-bar-desc">
                    {data.desc}
                </p>
            </div>
            {/* </Slide> */}

        </>
    )
}