import type { Feed } from "@/api/types/Feed";
import { Fragment, useState } from "react";

type PlacesProps = {
  place: Feed | null;
};

export default function Detail({ place }: PlacesProps) {
  // const [feed, setFeed] = useState<Feed | null>(null);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState<number>(2);

  let calendar: string[] = [];
  place?.fc_pm25.map((v) => {
    let date = v.day;
    calendar.push(date);
  });

  return (
    <div className="grid grid-rows-5">
      <div className="row-span-1 flex justify-between">
        {calendar.map((d, Index) => {
          let cut = d.slice(5);
          let day = cut.replace("-", "/");
          return (
            <Fragment key={Index}>
              <button
                value={Index}
                onClick={() => {
                  setDate(Index);
                  setShow(!show);
                }}
              >
                {day}
              </button>
            </Fragment>
          );
        })}
      </div>
      <div className="grid row-span-4 p-5">
        <span>{place?.name}</span>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col border border-black justify-center items-center">
            <span>PM 2.5</span>
            <span>
              <span>Max.</span>
              <span>{place?.fc_pm25[date]?.max ?? "N/A"}</span>
            </span>
            <span>
              <span>Avg.</span>
              <span>{place?.fc_pm25[date]?.avg ?? "N/A"}</span>
            </span>
            <span>
              <span>Min.</span>
              <span>{place?.fc_pm25[date]?.min ?? "N/A"}</span>
            </span>
          </div>
          <div className="flex flex-col border border-black justify-center items-center">
            <span>PM 10</span>
            <span>
              <span>Max.</span>
              <span>{place?.fc_pm10[date]?.max ?? "N/A"}</span>
            </span>
            <span>
              <span>Avg.</span>
              <span>{place?.fc_pm10[date]?.avg ?? "N/A"}</span>
            </span>
            <span>
              <span>Min.</span>
              <span>{place?.fc_pm10[date]?.min ?? "N/A"}</span>
            </span>
          </div>
          <div className="flex flex-col border border-black justify-center items-center">
            <span>Ozone</span>
            <span>
              <span>Max.</span>
              <span>{place?.fc_o3[date]?.max ?? "N/A"}</span>
            </span>
            <span>
              <span>Avg.</span>
              <span>{place?.fc_o3[date]?.avg ?? "N/A"}</span>
            </span>
            <span>
              <span>Min.</span>
              <span>{place?.fc_o3[date]?.min ?? "N/A"}</span>
            </span>
          </div>
          <div className="flex flex-col border border-black justify-center items-center">
            <span>UV Index</span>
            <span>
              <span>Max.</span>
              <span>{place?.fc_uvi[date]?.max ?? "N/A"}</span>
            </span>
            <span>
              <span>Avg.</span>
              <span>{place?.fc_uvi[date]?.avg ?? "N/A"}</span>
            </span>
            <span>
              <span>Min.</span>
              <span>{place?.fc_uvi[date]?.min ?? "N/A"}</span>
            </span>
          </div>
          <div className="flex flex-col border border-black justify-center items-center">
            <span>CO</span>
            <span>{place?.co ?? "N/A"}</span>
          </div>
          <div className="flex flex-col border border-black justify-center items-center">
            <span>SO2</span>
            <span>{place?.so2 ?? "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
