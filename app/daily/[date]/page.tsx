import { IndexedCard, IndexedCardGroup } from "@/components/indexed-card";
import Image from "next/image";

export default async function DailyPageReport({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;

  return (
    <div className="flex flex-col gap-5">
      <header className="relative">
        <Image
          src="/header.png"
          alt="Daily Report Header"
          width={1500}
          height={750}
          className="w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[25%] gap-3">
          <h1 className="text-4xl text-white font-bold">安吉尔每日快讯</h1>
          <p className="text-white font-normal text-xl">
            --2026/2/6-2026/2-9--
          </p>
        </div>
      </header>
      <main className="px-2">
        <IndexedCardGroup className="flex flex-col gap-5">
          <IndexedCard title="舆情概览">内容一</IndexedCard>
          <IndexedCard title="调性占比">内容二</IndexedCard>
          <IndexedCard>内容三</IndexedCard>
        </IndexedCardGroup>
      </main>
      <footer></footer>
      {/* Add your report content here */}
    </div>
  );
}
