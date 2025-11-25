import dynamic from "next/dynamic";

import Editor from "@/components/editor"

export const ChatInput = () => {
    return (
        <div className="px-5 w-full">
            <Editor variant="update" />
        </div>
    )
}