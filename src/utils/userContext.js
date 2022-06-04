import React from "react";

export const UserContext = React.createContext("Abc");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
