

// Here we have passed the props - (props)
// we can also pass props using destructuring by using directly the passed name in scope - {data}
const FirstComponent = ({count, fnc}) => { // props in file 4
    return (
        <div>
            <h1>FirstComponent used in file 3</h1>
            <p>Displaying Count Using Props = {count}</p>
            
            <button onClick={()=>{fnc(1)}}>Reset To 1</button>
        </div>

    )
}


export default FirstComponent