const UPDT_MESSAGE_TEXTAREA = 'UPDT-MESSAGE-TEXTAREA'
const SEND_MESSAGE = 'SEND-MESSAGE'

const messagesReduser = (state, action) => {


    switch (action.type) {
        case UPDT_MESSAGE_TEXTAREA:
            state.newMessageTextarea = action.newText;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageTextarea
            }
            state.messagesData.push(newMessage);
            state.newMessageTextarea = '';
            return state;
        default:
            return state;


    }
}

export const changeMessageTextareaActionCreator = (text) => ({
    type: 'UPDT-MESSAGE-TEXTAREA', newText: text
});

export const SendMessageActionCreator = () => ({type: 'SEND-MESSAGE'});

export default messagesReduser;