"use client";

import { usePathname } from "next/navigation";
import { Id } from "../../convex/_generated/dataModel";

export const useMemberId = (): Id<"members"> | undefined => {
  const pathname = usePathname();
  const segments = pathname.split("/");

  const memberIndex = segments.indexOf("member");
  const memberId = memberIndex !== -1 ? segments[memberIndex + 1] : undefined;

  return memberId as Id<"members"> | undefined;
};
