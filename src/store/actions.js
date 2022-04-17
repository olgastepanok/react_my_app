export const changeIsShownAction = () =>{
    return({
        type:"CHANGE_IS_SHOWN",
    });

};
export const changeLanguageAction = (language) => {
    return({
        type:"CHANGE_LANGUAGE",
        payload: language,
    });
};
export const changeFormInputAction = (value) => {
    return({
        type:"CHANGE_FORM_INPUT",
        payload: value,
    });
};
export const changeFormTextAction = (value) => {
    return({
        type:"CHANGE_FORM_TEXT",
        payload: value,
    });
};
export const changeFormSelectAction = (value) => {
    return({
        type:"CHANGE_FORM_SELECT",
        payload: value,
    });
};
export const changeJsonAction = (value) => {
    return({
        type:"CHANGE_JSON",
        payload: value,
    });
};
export const changeNumberOneAction = (obj) => {
    return({
        type:"CHANGE_NUMBER_ONE",
        payload: {value: obj.value,
                  convertedValue: obj.convertedValue,},
    });
};
export const changeNumberTwoAction = (obj) => {
    return({
        type:"CHANGE_NUMBER_TWO",
        payload: {value: obj.value,
                  convertedValue: obj.convertedValue,},
    });
};