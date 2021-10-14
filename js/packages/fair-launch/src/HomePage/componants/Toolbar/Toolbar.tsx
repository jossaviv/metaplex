import "./Toolbar.css"
import anybodies from "./logo-main.png"

export const CustomToolbar: any = () => {
    return (
        <>
            <div className="ctoolbar">
                <div style={{ display: "flex", width: "100%" }} >
                    <img className="logo-img" src={anybodies} />
                </div>
            </div>
        </>
    )
}