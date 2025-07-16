
function ButtonGreen(){
    const style = {
        backgroundcolor: "#04BF68",
        marginLeft: "608px",
        marginTop: "40px",
        color: "#26220E",
        border: "3px solid #C7B454",
        fontsize: "16px",
        outline: "none",
        cursor: "pointer"
    }
    let count = 0;
    const handleClick = () => console.log("Hello!!");
    const handleClick2 = (name) => console.log(`${name} stop click me.`);
    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} click for ${count} the time.`);
        } else{
            console.log(`${name} stop click me.`)
        }
    };

    const handleClick4 = (e) => {console.log(e)};

    return(
        <button style={style} onClick={() => handleClick3("You")}>Click Me!!</button>
    );
}

export default ButtonGreen;