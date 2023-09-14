import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { NewPost } from "./new-post"
import { Button } from "@/components/ui/button"

export default function HomePost () {
  return (
    <div className="flex justify-between mx-3 center gap-2">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

    <NewPost />

    <Button variant={"outline"} disabled className="rounded-xl text-neutral-500" >
      Post
    </Button>
    </div>
  )
}