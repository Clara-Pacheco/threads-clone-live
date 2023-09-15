"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type PostAvatarProps = {
  src?: string;
  fallbackInitials: string;
}

export const PostAvatar = ({src, fallbackInitials }:PostAvatarProps) => {
 return (
  <Avatar>
  <AvatarImage src={src} alt={fallbackInitials} />
  <AvatarFallback>{fallbackInitials}</AvatarFallback>
</Avatar>
 )
}