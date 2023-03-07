"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:block">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <p className="text-white text-center animate-pulse">
                Loading Chats...
              </p>
            )}

            {chats?.docs?.map((chatDoc) => (
              <ChatRow key={chatDoc.id} id={chatDoc.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <img
          src={session.user?.image!}
          alt="Profile Pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:animate-pulse"
          onClick={() => signOut()}
        />
      )}
    </div>
  );
}

export default Sidebar;
