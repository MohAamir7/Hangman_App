import TextInput from "../TextInput/TextInput";
import Button from "../Buttons/Buttons";
// import TextInputFormContainer from "./TextInputformConatiner";


function TextInputForm({inputType,onSubmitHandler,onHandlerTextInput,onTextChangeHandler}){
    
    return(
        <form onSubmit={onSubmitHandler} className="space-y-6 flex-col items-center">
        <div className="flex flex-col text-left">
            <TextInput
            type={inputType}
            label=''
            placeholder='Enter a word '
            onChangeHandler={onHandlerTextInput}
            className="my-1"
            
            />
        </div>
        <div>
            <Button
            type='button'
            text={inputType==='password'?'Show':'Hide'}
            // onClickHandler={onChangeText}
            onClickHandler = {onTextChangeHandler} 
            />
        </div>
        <div>
            <Button
            type = 'submit'
            text ='Submit'
            
            />
        </div>
    </form>
    )
}

export default TextInputForm;