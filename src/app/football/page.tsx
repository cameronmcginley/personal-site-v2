import Image from "next/image";
import FootballAnimation from "@/components/footballtest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FootballAnimation
        start={{ x: 100, y: 600 }}
        end={{ x: 300, y: 600 }}
        maxHeight={100}
      />
    </main>
  );
}
