const UPDT_MESSAGE_TEXTAREA = 'UPDT-MESSAGE-TEXTAREA'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    dialogsData: [
        {id: 1, name: "Vas'an", path: "/messages/1"},
        {id: 2, name: "Igor", path: "/messages/2"},
        {id: 3, name: "Masha", path: "/messages/3"},
        {id: 4, name: "Sveta", path: "/messages/4"},
        {id: 5, name: "Andrey", path: "/messages/5"},
        {id: 6, name: "Yuliya", path: "/messages/6"},
        {id: 7, name: "Katya", path: "/messages/7"},
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "I'm Vas'an"},
        {id: 3, message: "And today I will show U"},
        {id: 4, message: "How to play in this game"},
        {id: 5, message: "Let's Start!!!"},
        {id: 6, message: "Are U ready???"},
    ],
    newMessageTextarea: ""

}


const messagesReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDT_MESSAGE_TEXTAREA:
            return {
                ...state,
                newMessageTextarea: action.newText
            };
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageTextarea
            }
            return {
                ...state,
                newMessageTextarea: '',
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;


    }
}

export const changeMessageTextarea = (text) => ({
    type: 'UPDT-MESSAGE-TEXTAREA', newText: text
});

export const SendMessage = () => ({type: 'SEND-MESSAGE'});

export default messagesReduser;