import Image from "next/image";
import data from "../app/dataTest"
import CardTitle from "./Components/CardTitle";

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
      <div>
        <div>
          <h2>Annonces Officiel</h2>
          <div>
            <h3>Annonces</h3>
            <p>Les annonces officiels du jeu GodsChess</p>
          </div>
        </div>
        <div>
          <h2>GodsChess</h2>
          {cardsTitle}
        </div>
      </div>
    </main>
  );
}
