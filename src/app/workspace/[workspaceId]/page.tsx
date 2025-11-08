// src/app/workspace/[workspaceId]/page.tsx
"use client";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";

export default function Page() {
  const workspaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workspaceId });

  return (
  <div>
    Data: {JSON.stringify(data)}
  </div>
     );
}
