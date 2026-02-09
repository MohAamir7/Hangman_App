function TextInput({label,type='text',placeholder='Enter some text',onChangeHandler}){
    return(
        <label>
            <span className="text-white-700">{label}</span>
            <input type={type}
              className="px-4 py-2 border border-white-500 rounded-b-md w-full my-2"
              placeholder={placeholder}
              onChange={onChangeHandler}

            />
        </label>
    )
}

export default TextInput;