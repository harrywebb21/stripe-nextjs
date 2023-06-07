import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" bg-slate-300 w-fit h-96 p-3 flex flex-col">
        <div>
          <label className="text-black p-3">First name</label>
          <input className=" text-black m-3"></input>
        </div>
        <div>
          <label className="text-black p-3">Last name</label>
          <input className=" text-black m-3"></input>
        </div>
        <div>
          <label className="text-black p-3">Email</label>
          <input className=" text-black m-3"></input>
        </div>
        <div>
          <label className="text-black p-3">Address</label>
          <input className=" text-black m-3"></input>
        </div>
      </div>
    </main>
  );
}
