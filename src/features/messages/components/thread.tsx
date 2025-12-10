import { Button } from "@/components/ui/button";
import { Id } from "../../../../convex/_generated/dataModel";
import { Loader, XIcon } from "lucide-react";
import { useGetMessage } from "../api/use-get-message ";

interface ThreadProps {
    messageId: Id<"messages">;
    onClose: () => void;
};

export const Thread = ({ messageId, onClose }: ThreadProps) => {
    const { data: message, isLoading: loadingMessage } = useGetMessage({ id: messageId }); 
    
    if (loadingMessage) {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader className="size-5 animate-spin text-muted-foreground" />
            </div>
        );
    }
    
    return (
        <div className="h-full flex flex-col">
            <div className="h-[49px] flex justify-between items-center px-4 border-b">
                <p className="text-lg font-bold">Thread</p>
                <Button onClick={onClose} size="iconSm" variant="ghost">
                    <XIcon className="size-5 stroke-[1.5]"/>
                </Button>
            </div>
        </div>
    )
}