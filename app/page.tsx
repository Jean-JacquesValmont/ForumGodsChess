import Image from "next/image";
import data from "../app/dataTest"
import CardTitle from "./Components/CardTitle";
import Link from "next/link";

export default function Home() {

  const cardsTitle = data.map(item => {
    return (
        <CardTitle
            key={item.id}
            item={item}
        />
    )
  })

  return (
    <main className="">
      <div className="">
        <Image className="w-full" src="/image/bannière_forum_godschess_2.png" alt="" width={1200} height={600}/>
      </div>
      <div className="">
        <div>
          <h2 className="bg-black text-white text-6xl font-bold p-4">Officiel</h2>
          <Link href={"/"}>
            <div className="m-4 border-black border-b-2">
              <div className='flex justify-between'>
                <h3 className='text-4xl'>Annonces</h3>
                <p>0 fils de discussion</p>
              </div>
              <p className='text-xl'>Les annonces officielles du jeu GodsChess</p>
            </div>
          </Link>
        </div>
        <div>
          <h2 className="bg-black text-white text-6xl font-bold p-4">GodsChess</h2>
          {cardsTitle}
        </div>
      </div>
    </main>
  );
}
