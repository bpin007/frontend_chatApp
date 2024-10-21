import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../miscellaneous/SideDrawer";
import { chatState } from "./context/ChatProvider";
import MyChats from "./MyChats";
import ChatBox from "./ChatBox";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);

  const { user } = chatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats {...{ fetchAgain, setFetchAgain }} />}
        {user && <ChatBox {...{ fetchAgain, setFetchAgain }} />}
      </Box>
    </div>
  );
};

export default ChatPage;
