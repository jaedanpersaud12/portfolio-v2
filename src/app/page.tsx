import Name from "@/components/assets/Name";
import Introduction from "@/components/atoms/Introduction";
import HomePortfolioItem from "@/components/views/HomePortfolioItem";
import PageLayout from "@/components/views/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center md:pt-24">
        <Name />
      </div>
      <Introduction />
      <HomePortfolioItem />
    </PageLayout>
  );
}
