const defaultState = {
    isShown:true,
    buttonText:"HIDE",
    messageText:"Hello World",

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
    default:
        return state;
    };

}