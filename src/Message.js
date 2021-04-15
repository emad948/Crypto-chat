import React, { forwardRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './message.css'


const Message=forwardRef(({ messages, loggedIn }, ref) => {
    return (
        <div ref={ref}>
            {messages.map((msg) => {
                const { username, message, token }=msg;
                const isUser=username===loggedIn;

                return (
                    <div  >
                        {message&&<List  >
                            <ListItem className={`${isUser&&"loggeding_user"}`} >
                                <ListItemAvatar className={`${isUser&&"loggeding_user"}`} >
                                    <Avatar alt={username} src="https://block-builders.de/wp-content/uploads/2021/01/Dogecoin-1-678x381.png" />
                                </ListItemAvatar>
                                <ListItemText primary={message} secondary={username} />
                            </ListItem>
                        </List>}

                    </div>
                )
            })}
        </div>
    )
})

export default Message
