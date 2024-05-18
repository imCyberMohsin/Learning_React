//! 2. Event Handling

const ButtonClick = () => {

    const btnClick = () => {
        console.log("Click is Working");
    }

    return (
        <>
            <button onClick={() => { btnClick() }}>Click Here</button>
        </>
    )
}

export default ButtonClick