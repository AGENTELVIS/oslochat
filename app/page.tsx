import ChatSection from "@/components/ChatSection";
import ChatTopbar from "@/components/ChatTopbar";
import TargetsSection from "@/components/TargetsSection";

export default function Home() {
  return (
    <div className="h-full border border-gray-300 rounded-2xl overflow-hidden">
      <ChatTopbar/>
      <div className="flex flex-row">
        <div className="w-4/7 border-gray-300 mt-0">
          <ChatSection/>
        </div>
        <div className="border-l border-gray-300 overflow-y-scroll ">
          <TargetsSection/>
        </div>
      </div>
    </div>
  );
}
