import { useState } from "react";
import initialFriends from "@data/initialFriends";
import SplitContext from "@context/splitContext";

export default function SplitProvider({ children }) {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);

    //Automatically hide the showAddFriend after a friend is added
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    // setSelectFriend(friend);

    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));

    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectFriend(null);
  };

  return (
    <SplitContext.Provider
      value={{
        handleSplitBill,
        handleSelection,
        handleAddFriend,
        handleShowAddFriend,
        friends,
        showAddFriend,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
}
