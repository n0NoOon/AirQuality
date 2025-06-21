import type { Feed } from "@/api/types/Feed";
import { Fragment, useState } from "react";
import checkAvg from "@/components/checkAvg";
import { IoIosCloseCircleOutline } from "react-icons/io";

type PlacesProps = {
  place: Feed | null;
  clearCity?: () => void;
};

export default function Detail({ place, clearCity }: PlacesProps) {
  // const [feed, setFeed] = useState<Feed | null>(null);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState<number>(2);

  let calendar: string[] = [];
  place?.fc_pm25.map((v) => {
    let date = v.day;
    calendar.push(date);
  });

  return (
    <div>
      {place && (
        <div
          className="row-span-1 flex justify-between px-5 pt-2 min-h-[80px] 
        scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-scroll
        scrollbar-thin"
        >
          {calendar.map((d, Index) => {
            let cut = d.slice(5);
            let day = cut.replace("-", "/");
            return (
              <Fragment key={Index}>
                <button
                  className="date-btn"
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
      )}
      <div className="p-5">
        <div className="relative">
          <span className="flex justify-center mb-3 font-bold text-lg text-center text-white">
            {place?.name ?? "Try to Search some city!"}
            <br />
            {calendar[date] ?? "And then, I'll show you the result"}
          </span>
          {place && (
            <span className="absolute top-0 right-0 flex flex-col items-center mt-2">
              {clearCity && (
                <button
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={clearCity}
                >
                  <IoIosCloseCircleOutline />
                </button>
              )}
            </span>
          )}
        </div>
        <div className="grid grid-cols-2">
          <div className="detail-box">
            <div className="detail-label">PM 2.5</div>
            <span className="detail-data-box">
              <span className="detail-data-label">Max</span>
              <span className="detail-data">
                {place?.fc_pm25[date]?.max ?? "N/A"}
              </span>
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Avg</span>
              {checkAvg(place?.fc_pm25[date]?.avg)}
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Min</span>
              <span className="detail-data">
                {place?.fc_pm25[date]?.min ?? "N/A"}
              </span>
            </span>
          </div>
          <div className="detail-box">
            <span className="detail-label">PM 10</span>
            <span className="detail-data-box">
              <span className="detail-data-label">Max</span>
              <span className="detail-data">
                {place?.fc_pm10[date]?.max ?? "N/A"}
              </span>
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Avg</span>
              {checkAvg(place?.fc_pm10[date]?.avg)}
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Min</span>
              <span className="detail-data">
                {place?.fc_pm10[date]?.min ?? "N/A"}
              </span>
            </span>
          </div>
          <div className="detail-box">
            <span className="detail-label">Ozone</span>
            <span className="detail-data-box">
              <span className="detail-data-label">Max</span>
              <span className="detail-data">
                {place?.fc_o3[date]?.max ?? "N/A"}
              </span>
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Avg</span>
              {checkAvg(place?.fc_o3[date]?.avg)}
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Min</span>
              <span className="detail-data">
                {place?.fc_o3[date]?.min ?? "N/A"}
              </span>
            </span>
          </div>
          <div className="detail-box">
            <span className="detail-label">UV Index</span>
            <span className="detail-data-box">
              <span className="detail-data-label">Max</span>
              <span className="detail-data">
                {place?.fc_uvi[date]?.max ?? "N/A"}
              </span>
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Avg</span>
              {checkAvg(place?.fc_uvi[date]?.avg)}
            </span>
            <span className="detail-data-box">
              <span className="detail-data-label">Min</span>
              <span className="detail-data">
                {place?.fc_uvi[date]?.min ?? "N/A"}
              </span>
            </span>
          </div>
          <div className="detail-box">
            <span className="detail-label">CO</span>
            {checkAvg(place?.co)}
          </div>
          <div className="detail-box">
            <span className="detail-label">SO2</span>
            {checkAvg(place?.so2)}
          </div>
        </div>
      </div>
    </div>
  );
}
