import "./Toolbar.css"
import anybodies from "./logo-main.png"

export const CustomToolbar: any = () => {
    return (
        <>
            <div style={{ height: 'max-content', display: "flex" }}>
                <div style={{ display: "flex", width: "100%" }} >
                    <img className="logo-img" src={anybodies} />
                </div>
            </div>
        </>
    )
}