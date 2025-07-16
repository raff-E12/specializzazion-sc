
// Centralizzazione della Logica.

export default function PasswordReducer(state, action) {
    switch (action.type) {
        case "ADD_FILTER":
        if (state.isType.includes(action.payload)) return {...state, isType: state.isType.filter(key => key !== action.payload)};
        return {...state, isType: [...new Set([...state.isType, action.payload])]};

        case "SET_LENGHT":
        return {...state, isLength: Number(action.payload)}

        case "SET_PASSWORDS":
        let isSorted = [];
        let IsPassword = [];
        let SortedList = [];

        const isUpperCase = "ABCDEFGHILMNOPQRSTUVZWYKJ".split("");
        const isLowerCase = "abcdefghilkjmnopqrstuvzwyx".split("");
        const isNumber = "1234567890".split("");
        const isSpecialKey = "@#[]+_*=&%$£!|§ç-:.,;^?".split("");

        if (state.isType.includes("UpperCase") && state.isType.length !== 0) {
            const UpperCaseIndex = isUpperCase[Math.floor(Math.random() * isUpperCase.length)];
            isSorted.concat(isUpperCase)
            IsPassword.push(UpperCaseIndex);
        } 
        
        if (state.isType.includes("LowerCase") && state.isType.length !== 0) {
            const LowerCaseIndex = isLowerCase[Math.floor(Math.random() * isLowerCase.length)];
            isSorted = isSorted.concat(isLowerCase);
            IsPassword.push(LowerCaseIndex);
        } 
        
        if (state.isType.includes("Numbers") && state.isType.length !== 0) {
            const NumberIndex = isNumber[Math.floor(Math.random() * isNumber.length)];
            isSorted = isSorted.concat(isNumber);
            IsPassword.push(NumberIndex);
        } 
        
        if (state.isType.includes("Symbols") && state.isType.length !== 0) {
            const SpecialIndex = isSpecialKey[Math.floor(Math.random() * isSpecialKey.length)];
            isSorted = isSorted.concat(isSpecialKey);
            IsPassword.push(SpecialIndex)
        }

        if (state.isType.length > 0) {
            for (let index = IsPassword.length; index < state.isLength; index++) {
            SortedList = isSorted[Math.floor(Math.random() * isSorted.length)];
            IsPassword.push(SortedList)
            }
        } else {
            IsPassword = [];
            isSorted  = [];
        }

        return {...state, isClick: false, isPasswords: IsPassword};

        case "SET_CLICK":
        return {...state, isClick: true};
    
        default:
        return state
    }
}