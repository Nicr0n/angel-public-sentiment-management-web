export default async function DailyReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-full flex justify-center bg-[#f0f0f0]">
      <div className="md:max-w-3xl w-full bg-white min-w-xs">{children}</div>
    </div>
  );
}
