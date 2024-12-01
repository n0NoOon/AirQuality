export default function checkAvg(data: number | undefined) {
  if (!data) return <span className="detail-data">N/A</span>;
  if (data <= 50)
    return <span className="text-[#009865] font-bold text-lg">{data}</span>;
  if (data <= 100)
    return <span className="text-[#fede33] font-bold text-lg">{data}</span>;
  if (data <= 150)
    return <span className="text-[#ff9933] font-bold text-lg">{data}</span>;
  if (data <= 200)
    return <span className="text-[#cc0033] font-bold text-lg">{data}</span>;
  if (data <= 300)
    return <span className="text-[#670099] font-bold text-lg">{data}</span>;
  if (data <= 500)
    return <span className="text-[#7e0023] font-bold text-lg">{data}</span>;
}
