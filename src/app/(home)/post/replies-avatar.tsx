"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type RepliesAvatarProps = {
  data : {
    src?: string;
    fallbackInitials: string;
  }[];
}

const getClass = (index: number) => {
  if(index === 0 ) {
    return "w-5 h-5 ml-0"
  }

  return "w-5 h-5 ml-[-0.5rem]"
}

export const RepliesAvatar = ({ data }:RepliesAvatarProps) => {
 return (
  <div className="flex mt-5">
    {data.map((item, index) => {
      return (
        <Avatar className={getClass(index)} key={item.src}>
        <AvatarImage src={item.src} alt={item.fallbackInitials} />
        <AvatarFallback>{item.fallbackInitials}</AvatarFallback>
      </Avatar>
      )
    })}
  </div>
 )
}