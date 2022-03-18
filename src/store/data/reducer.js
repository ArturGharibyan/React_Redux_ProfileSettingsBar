import { data } from "./state";

const reducer = (state = data, action) => {
    const temp = { ...state }
    switch (action.type) {
        case "about":
            temp.users = (action.value)
            break;
    }
    return temp
}

export default reducer


