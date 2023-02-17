 const Light = ({lightColor,handleClick}) =>{
    return  (
        <span className={lightColor} onClick={handleClick}>

        </span>
    );
 }
 export default Light;