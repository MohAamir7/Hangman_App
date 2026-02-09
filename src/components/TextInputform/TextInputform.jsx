import TextInput from "../TextInput/TextInput";
import Button from "../Buttons/Buttons";
// import TextInputFormContainer from "./TextInputformConatiner";


function TextInputForm({inputType,onSubmitHandler,onHandlerTextInput,onTextChangeHandler}){
    
    return(
        <form onSubmit={onSubmitHandler}>
        <div>
            <TextInput
            type={inputType}
            label='Enter a word or pharse'
            placeholder='Enter a word or a Pharse'
            onChangeHandler={onHandlerTextInput}
            
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