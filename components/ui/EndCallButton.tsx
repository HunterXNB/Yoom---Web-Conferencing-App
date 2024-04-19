import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IProps {}
const EndCallButton = ({}: IProps) => {
  const router = useRouter();
  const call = useCall();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;
  call?.on("call.ended", () => {
    router.replace("/");
  });
  if (!isMeetingOwner) return null;

  return (
    <Button
      onClick={async () => {
        await call.endCall();
        router.replace("/");
      }}
      className="bg-red-500"
    >
      End Call For everyone
    </Button>
  );
};

export default EndCallButton;
