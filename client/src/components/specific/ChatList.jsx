import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";
import { SouthAmerica } from "@mui/icons-material";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handelDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { avtar, _id, name, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers.includes(_id));

        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avtar={avtar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handelDeleteChatOpen={handelDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
