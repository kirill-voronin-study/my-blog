"use client";

import { LikeButton } from "@/components";
import { useState } from "react";

function LikeWrapper() {
  const [isActive, setActive] = useState(false);

  async function handleLike() {
    if (isActive) {
      setActive((prev) => !prev);
    } else {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "POST",
        });
        setActive(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return <LikeButton isActive={isActive} onClick={handleLike} />;
}

export default LikeWrapper;
