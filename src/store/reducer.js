const defaultState = {
    isShown:true,
    buttonText:"HIDE",
    messageText:"Hello World",
    json:"",
    formObj:{
        inputValue:"",
        textValue:"",
        selectValue:"",
    },
    numberOne:0,
    numberTwo:0,
    convertedNumberOne:null,
    convertedNumberTwo:null,
};

export const reducer = (state = defaultState, action) => {
    switch(action.type){
    case "CHANGE_IS_SHOWN":
    {
        let text = state.buttonText;
        text = !state.isShown ? "HIDE" : "SHOW";
        return {...state, isShown:!state.isShown, buttonText:text};
    }
    case "CHANGE_LANGUAGE":
    {
        let text = state.messageText;
        text = action.payload ==="RUSSIAN" ? "Привет Мир" : "Hello World";
        return {...state, messageText:text};
    }
    case "CHANGE_FORM_INPUT":
        {
            let formObj = state.formObj;
            formObj.inputValue = action.payload;
            return {...state, formObj:formObj,};
        }
    case "CHANGE_FORM_TEXT":
        {
            let formObj = state.formObj;
            formObj.textValue = action.payload;
            return {...state, formObj:formObj,};
        }
    case "CHANGE_FORM_SELECT":
        {
            let formObj = state.formObj;
            formObj.selectValue = action.payload;
            return {...state, formObj:formObj,};
        }
    case "CHANGE_JSON":
        {
            return {...state, json:action.payload,};
        }
    case "CHANGE_NUMBER_ONE":
         {
             return {...state, numberOne:action.payload.value, convertedNumberOne:action.payload.convertedValue,};
         }
    case "CHANGE_NUMBER_TWO":
        {
            return {...state, numberTwo:action.payload.value, convertedNumberTwo:action.payload.convertedValue,};
        }
    default:
        return state;
    };

}