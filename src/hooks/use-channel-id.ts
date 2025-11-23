"use client";

import { usePathname } from "next/navigation";
import { Id } from "../../convex/_generated/dataModel";

export const useChannelId = () => {
  const pathname = usePathname();
  // bv. /workspace/abc123/channel/def456
  const segments = pathname.split("/"); // ["", "workspace", "abc123", "channel", "def456"]

  const channelIndex = segments.indexOf("channel");
  const channelId =
    channelIndex !== -1 ? segments[channelIndex + 1] : undefined;

  return channelId as Id<"channels"> | undefined;
};
