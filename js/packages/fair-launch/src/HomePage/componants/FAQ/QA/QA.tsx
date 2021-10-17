import "./QA.css"

export const QA: any = ({ q, a }: any) => {
    return (
        <>
            <div className="qa-container">
                <div style={{ display: "flex" }}>
                    <div className="q-bullet">  <div className="q-bullet-text">Q</div></div>
                    <div className="q-text">
                        <div style={{ margin: "auto" }}>{q}</div>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <div className="q-green">  <div className="q-bullet-text">A</div></div>
                    <div className="a-text">
                        <div style={{ margin: "auto" }}>{a}</div>
                    </div>
                </div>
            </div>
        </>
    )
}