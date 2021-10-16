import "./ImageSwitcher.css"
import { useEffect, useState } from "react"

import a1 from "./a1.jpeg"
import a2 from "./a2.jpeg"
import a3 from "./a3.jpeg"
import a4 from "./a4.jpeg"
import a5 from "./a5.jpeg"
// import a6 from "./a6.jpeg"
// // import a7 from "./a7.jpeg"
import { setInterval } from "timers"

const allImages = [a1, a2, a3, a4,a5]

export const ImageSwitcher: any = () => {

    const [currentImg, setCurrentImg] = useState<number>(0)

    useEffect(() => {
        let index = 0
        setInterval(() => {
            index++
            if (index > 4)
                index = 0
            setCurrentImg(index)
        }, 1000)
    }, [])

    return (
        <>
            <img className="img-switcher-img" src={allImages[currentImg]} />
        </>
    )
}