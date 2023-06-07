import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">SnKz</h1>
      <div className="flex flex-col items-center justify-center bg-white text-black p-6">
        <Image width={200} height={100} src="/images/jordan1.jpg" />
        <h2 className="text-2xl font-bold text-center">
          Off-White x Jordan 1 Chicago's
        </h2>
        <p className="text-center">Size 10.5</p>
        <p className="text-center">$1,000</p>
      </div>
    </main>
  );
}
