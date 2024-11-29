import { FetchAvg } from "@/components/FetchAvg";

export default function AverageFeed() {
  return (
    <div>
      <div className="flex gap-10">
        <FetchAvg />
        <FetchAvg />
        <FetchAvg />
      </div>
    </div>
  );
}
