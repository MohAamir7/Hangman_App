import { useState } from "react";
import TextInputForm from "./TextInputform";
import { useNavigate } from "react-router-dom";



function TextInputFormContainer(){
    let [inputType,setInputType] = useState('password');
    let [value,setvalue] = useState("");
    let navigate = useNavigate();
    function onSubmitHandler(event){
        event.preventDefault();
        // console.log("Form submitted");
        console.log(value);
        if(value){
            navigate('/Play',{state:{word:value}});
        }

    }
    function onHandlerTextInput(event){
        // console.log("Text input changed");
        setvalue(event.target.value);

    }
    function onTextChangeHandler(){
        if(inputType==='password'){
            setInputType("text")

        }else{
            setInputType('password');

        }
        // console.log(inputType);
    }

    return(
        <TextInputForm
        inputType={inputType}
        onSubmitHandler={onSubmitHandler}
        onHandlerTextInput={onHandlerTextInput}
        onTextChangeHandler={onTextChangeHandler}
        
        />
    )
}

export default TextInputFormContainer;