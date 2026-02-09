import "tailwindcss";

function Button({type='text',text,onClickHandler}) {

    return(
        <button type={type} onClick={onClickHandler} className="inline-block text-center w-2xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 my-1 rounded-xl font-semibold shadow-lg hover:scale-90 transition-transform duration-300 hover:shadow-purple-500/50">{text}</button>
    )
    
}
export default Button;