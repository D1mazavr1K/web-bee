import React from "react"

export function Timer({time}) {

    let date = new Date(0);
    date.setSeconds(Math.floor(time / 1000)); // specify value for SECONDS here
    let timeString = date.toISOString().substring(11, 19);

    return (
        <main className="container-fluid px-4 my-5 gap-4">
            <div>
                <h3>Timer</h3>
                <p>{timeString}</p>
            </div>
        </main>
    )
}
