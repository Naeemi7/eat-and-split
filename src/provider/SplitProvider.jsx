import { useState } from "react";
import initialFriends from "@data/initialFriends";
import SplitContext from "@context/splitContext";

export default function SplitProvider({ children }) {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleSelection = (friend) => {
    // setSelectFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  return (
    <SplitContext.Provider
      value={{
        selectedFriend,
        setSelectedFriend,
        showAddFriend,
        setShowAddFriend,
        handleSelection,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
}
