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