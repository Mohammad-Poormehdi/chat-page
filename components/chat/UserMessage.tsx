import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import {BsTrashFill} from 'react-icons/bs'

interface UserMessageProps {
  avatarSrc: string;
  message: string;
  isBot: boolean;
}

const UserMessage: React.FC<UserMessageProps> = ({
  avatarSrc,
  message,
  isBot,
}) => {
  const [isLiked, setIsLiked] = useState<boolean | undefined>(undefined);
  const [isDisliked, setIsDisliked] = useState<boolean|undefined>(undefined)
  const handleLike = useCallback(() => {
    if (isLiked) {
      setIsLiked(undefined);
      return;
    }
    setIsDisliked(false)
    setIsLiked(true);
  }, [isLiked]);
  const handleDislike = useCallback(()=>{
    if(isDisliked){
        setIsDisliked(undefined)
        return
    }
    setIsLiked(false)
    setIsDisliked(true)
  },[isDisliked])
  return (
    <div className="flex gap-6">
      <div
        dir="rtl"
        className={`px-4 py-3 relative w-full rounded-xl flex whitespace-pre-line items-center ${
          isBot ? "bg-white dark:bg-primary-dark dark:text-white" : "bg-secondary"
        }`}
      >
        {message}
        {isBot && <BsTrashFill className="absolute left-4 bottom-4 cursor-pointer text-icon" />}
      </div>
      <div className="space-y-2">
        <Avatar src={avatarSrc} />
        {isBot && (
          <div className="flex justify-center">
            <div className="space-y-2 text-black dark:text-white">
              <button onClick={handleLike} className="block">
                {isLiked ? <AiFillLike /> : <AiOutlineLike />}
              </button>
              <button onClick={handleDislike}>
                {isDisliked ? <AiFillDislike /> : <AiOutlineDislike />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserMessage;
