import React, { useState } from "react";

function Loading() {
    const [showCode, setShowCode] = useState(false);

    const handleShowCode = () => {
        setShowCode(true);
    };
    const handleNoneCode = () => {
        setShowCode(false);
    };

    return (
        <>

            <>
                {showCode && (
                    <pre>
                        <>
                            <div className="section-title mb-0">
                                <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                            </div>
                            <div className="bg-white text-center border border-top-0 p-3">

                            </div>
                        </>
                    </pre>
                )}
            </>
            <button onClick={handleShowCode}>مزيد</button>
            <button onClick={handleNoneCode}>no</button>
        </>
    );
}

export default Loading;
