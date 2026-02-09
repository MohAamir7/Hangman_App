import "tailwindcss";

function Button({type='text',text,onClickHandler}) {

    return(
        <button type={type} onClick={onClickHandler} className='px-2 py-2 m-2 bg-yellow-400 cursor-pointer'>{text}</button>
    )
    
}
export default Button;