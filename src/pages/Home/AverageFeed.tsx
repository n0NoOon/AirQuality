import { Average } from "@/api/types/Average";
import { FetchAvg } from "@/components/FetchAvg";

interface StationProps {
  station: Average | undefined;
}

export default function AverageFeed({ station }: StationProps) {
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
