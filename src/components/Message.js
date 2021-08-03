import React from 'react';

const Message = ({ pseudo, message, isUser }) => {
    if (isUser(pseudo)) {
        return (
            <div>
                <p className="user-message">
                    { message }
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p className="not-user-message">
                    <strong>{ pseudo }: </strong>{ message }
                </p>
            </div>
        );
    }
};

export default Message;