// src/app/workspace/[workspaceId]/page.tsx
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = use(params);
  return <div>ID: {workspaceId}</div>;
}
