import React from "react";
import './Performance.css';

const Performance = () => {
    const newLocal = "performance";
    return (
        <div className={newLocal} id="Performance">
            <div className="achievement">
                <div className="circle">1K+</div>
                <span>total</span>
                <span>Downloads</span>
            </div>
            <div className="achievement">
                <div className="circle">5+</div>
                <span>published</span>
                <span>Applications</span>
            </div>
            <div className="achievement">
                <div className="circle">4.8+</div>
                <span>overall</span>
                <span>Ratings</span>
            </div>
        </div>
    )
}

export default Performance;