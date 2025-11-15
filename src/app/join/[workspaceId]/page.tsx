"use client";

import Image from "next/image";
import VerificationInput from "react-verification-input";

const JoinPage = () => {
  return (
    <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
      <Image src="/logo.svg" width={60} height={60} alt="logo" />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">join workspace</h1>
          <p className="text-md text-muted-foreground">
            Enter the workspace code to join
          </p>
        </div>
        <VerificationInput
          classNames={{
            container: "otp-container",
            character: "otp-character",
            characterInactive: "otp-character-inactive",
            characterSelected: "otp-character-selected",
            characterFilled: "otp-character-filled",
          }}
        />
      </div>
    </div>
  );
};

export default JoinPage;
