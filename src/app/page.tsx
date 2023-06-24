import Name from "@/components/assets/Name";
import TypeAnimationComponent from "@/components/atoms/TypeAnimation";

export default function Home() {
  return (
    <main className="pt-32 md:pt-56">
      <div className="flex items-center justify-center">
        <Name />
      </div>

      <TypeAnimationComponent />
    </main>
  );
}
