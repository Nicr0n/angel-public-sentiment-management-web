import { IndexedCard, IndexedCardGroup } from "@/components/indexed-card";
import { SentimentDonutChart } from "@/components/chart/sentiment-donut-chart";
import { NegativeTopicChart } from "@/components/chart/negative-topic-chart";
import { PlatformDistributionChart } from "@/components/chart/platform-distribution-chart";
import { BrandVolumeChart } from "@/components/chart/brand-volume-chart";
import Image from "next/image";
import { NormalPost } from "@/components/post/normal-post";
import { ReportFooter } from "@/components/report-footer";

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
          <IndexedCard title="舆情概览">
            <div>
              <strong>概述</strong>
              ：2月6日17:00-2月9日17:00，全网共监测舆情总数
              <strong className="text-red-500">6017</strong>
              篇，渠道包括短视频2214篇，手机新闻1643篇，网络新闻1293篇，视频489篇，微博169篇，微信168篇，论坛41篇。
            </div>
            <div>
              <strong>情感类型：</strong>
              正中报道5994篇，占比99.6%；负面报道23篇，占比0.4%。
            </div>
            <div>
              <strong>负面报道：</strong>
              产品质量-质量问题10篇（频繁故障4篇、漏水3篇、噪音大2篇、水质问题-水有异味1篇），占比43.5%；售后服务-售后问题9篇（不予退货退款4篇、售后不专业3篇、售后处理不及时2篇），占比39.1%；产品质量-虚假宣传1篇（净水流量宣传不一），占比4.3%；阻垢剂1篇（有阻垢剂），占比4.3%；产品质量-主观吐槽2篇，占比8.8%。
            </div>
          </IndexedCard>
          <IndexedCard title="调性占比">
            <SentimentDonutChart />
          </IndexedCard>
          <IndexedCard title="负面话题分布">
            <NegativeTopicChart />
          </IndexedCard>
          <IndexedCard title="传播平台分布">
            <PlatformDistributionChart />
          </IndexedCard>
          <IndexedCard title="传播声量占比">
            <BrandVolumeChart />
          </IndexedCard>
          <IndexedCard title="自身新闻">
            <div className="px-4 flex flex-col gap-6 py-4">
              <h1 className="flex items-center gap-3 text-2xl font-bold">
                <span className="w-1 self-stretch bg-red-600 rounded-full" />
                正面新闻
              </h1>
              <div className="flex flex-col gap-4">
                <NormalPost
                  title="安吉尔净水器荣获年度品质奖"
                  source="新浪新闻"
                  time="2026-02-27 10:30"
                  content='近日，安吉尔净水器在年度消费品评选活动中脱颖而出，荣获"年度品质奖"殊荣。评委会表示，安吉尔凭借其自主研发的RO反渗透净化技术、多重过滤系统以及出色的用户口碑，在同类产品中表现尤为突出。据了解，安吉尔净水器在本次评选中获得了来自全国多个城市消费者的高度认可，其产品在净化效果、使用寿命和售后服务等多维度均位居前列。公司负责人表示，未来将持续加大研发投入，推出更多高性价比的健康饮水解决方案，致力于让每个家庭都能喝上干净、安全的饮用水。'
                />
                <NormalPost
                  title="安吉尔携手央视公益频道共同推广农村安全饮水项目"
                  source="人民网"
                  time="2026-02-24 09:00"
                  content='安吉尔净水器近日宣布与央视公益频道达成战略合作，共同启动"净水进万家"农村安全饮水公益项目。据悉，该项目计划在未来两年内向全国200个贫困村捐赠净水设备，惠及逾10万农村居民。安吉尔相关负责人表示，企业始终将社会责任放在首位，希望借助此次合作，切实改善农村地区的饮水安全状况。此举在社会各界引发广泛好评，多位网友留言称赞安吉尔积极履行企业社会责任，品牌美誉度持续提升。'
                />
              </div>
            </div>
            <div className="px-4 flex flex-col gap-6">
              <h1 className="flex items-center gap-3 text-2xl font-bold">
                <span className="w-1 self-stretch bg-red-600 rounded-full" />
                负面新闻
              </h1>
              <div className="flex flex-col gap-4">
                <NormalPost
                  title="消费者投诉安吉尔净水器滤芯寿命虚标，实际使用不足半年"
                  source="消费者报道"
                  time="2026-02-20 14:15"
                  content="近期，多名消费者在社交平台及消费投诉平台反映，安吉尔某款净水器产品标称滤芯使用寿命为12个月，但实际使用不足6个月便出现出水量明显下降、TDS值偏高等异常情况。有用户表示，联系售后更换滤芯后问题依旧，客服态度敷衍、处理周期过长。目前该话题在微博累计阅读量超过80万，不少网友表示对品牌信任度有所下降。对此，安吉尔方面尚未作出公开回应。"
                />
              </div>
            </div>
          </IndexedCard>
          <IndexedCard title="竞品新闻">
            <div className="px-4 flex flex-col gap-6 py-4">
              <div className="flex flex-col gap-4">
                <NormalPost
                  title="小米净水器新品发布：首次搭载AI智能换芯提醒功能"
                  source="36氪"
                  time="2026-02-25 11:00"
                  content="小米生态链旗下净水产品线近日推出全新一代家用净水器，此次新品最大亮点在于首次搭载AI智能换芯提醒系统，可根据实际水质及使用频率动态预测滤芯寿命，精准度较传统计时换芯方式提升约40%。此外，新品支持米家App远程监控水质数据，用户可实时查看TDS值、余氯含量等关键指标。发布会现场，小米方面表示新品定价低于同级别竞品，主打高性价比路线，预计将对中端净水器市场格局产生较大冲击。"
                />
                <NormalPost
                  title="海尔净水器因售后响应慢遭用户集中吐槽，官方致歉并启动专项整改"
                  source="黑猫投诉"
                  time="2026-02-22 16:45"
                  content="近日，海尔净水器在多个消费平台遭遇集中投诉，用户普遍反映售后上门维修等待时间过长，部分地区甚至超过两周仍未有技术人员响应。相关话题在微博引发热议，阅读量突破120万。对此，海尔官方客服账号于2月22日发布致歉声明，表示已注意到相关问题，并宣布启动售后服务专项整改计划，承诺在30天内将全国平均响应时效缩短至48小时以内。业内人士指出，此次事件对海尔净水品牌形象造成一定影响，竞品企业可借机加强售后服务建设以扩大差异化优势。"
                />
              </div>
            </div>
          </IndexedCard>
        </IndexedCardGroup>
      </main>
      <ReportFooter />
      {/* Add your report content here */}
    </div>
  );
}
