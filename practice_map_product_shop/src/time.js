

function Time() {
    return (
        <div>
        <h1>Bonjour, monde</h1>
        <h2>Il est {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

setInterval(Time, 1000);
