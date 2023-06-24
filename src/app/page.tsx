import Name from "@/components/assets/Name";

export default function Home() {
  return (
    <main className="pt-32 md:pt-56">
      <div className="flex items-center justify-center">
        <Name />
      </div>
      <div className="absolute bottom-0 left-0 p-10 uppercase text-text">
        In Progress...
      </div>
    </main>
  );
}
