import React from 'react';
import {FaCheck} from "react-icons/fa";


const NicknameChanger = (props) => {
    return (
        <form>
            <input type="text"/>
            <button>
                <FaCheck/>
            </button>
        </form>
    );
};

export default NicknameChanger;
