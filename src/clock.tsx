import { React } from "rahisi";

function clock() {

    const { startTicking, stopTicking } =
        (() => {

            let timerId: any;

            const setTime = () => currentTime = new Date().toLocaleTimeString();

            return {
                startTicking: () => {

                    setTime();

                    timerId =
                        setInterval(
                            setTime,
                            1000,
                        );
                },
                stopTicking: () => clearInterval(timerId),
            };
        })();

    let currentTime = "";

    return (
        <div onMounted={startTicking} onUnmounted={stopTicking}>
            <h1>Hello, world!</h1>
            <h2>
                It is {() => currentTime}.
        </h2>
        </div>).mount(document.body);
}

document.addEventListener("DOMContentLoaded", clock, false);
