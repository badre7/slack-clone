"use client";

import Link from "next/link";
import Image from "next/image";
import VerificationInput from "react-verification-input";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";

import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace-info";

import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useJoin } from "@/features/workspaces/api/use-join";

const JoinPage = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();


const {mutate, isPending} = useJoin();
const { data, isLoading} = useGetWorkspaceInfo({ id: workspaceId});

const isMember = useMemo(() => data?.isMember, [data?.isMember]);

useEffect(() => {
  if (isMember) {
    router.push(`/workspace/${workspaceId}`);
  }
}, [isMember, router, workspaceId]);


const handleComplete = (value: string) => {
  mutate({ workspaceId, joinCode: value },{
    onSuccess: (id) => {
      router.replace(`/workspace/${id}`);
      toast.success("Workspace joined.");
    },
    onError: () => {
      toast.error("Failed to join workspace")
    }
  })
};

if (isLoading) {
  return ( 
    <div className="h-full flex items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}

  return (
    <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
      <Image src="/logo.svg" width={60} height={60} alt="logo" />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">join {data?.name}</h1>
          <p className="text-md text-muted-foreground">
            Enter the workspace code to join
          </p>
        </div>
        <VerificationInput
        onComplete={handleComplete}
          length={6}
          classNames={{
            container: cn("otp-container", isPending && "opacity-50 cursor-not-allowed"),
            character: "otp-character",
            characterInactive: "otp-character-inactive",
            characterSelected: "otp-character-selected",
            characterFilled: "otp-character-filled",
          }}
          autoFocus
        />
      </div>
      <div className=" flex gap-x-4">
        <Button size="lg" variant="outline" asChild>
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default JoinPage;
