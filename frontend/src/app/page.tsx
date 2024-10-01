import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <div className='grid grid-cols-4 container'>
      {produtos.map((prod, index) => {
        if (index < 7)
          return <ProdutoItem key={prod.id} produto={prod} />
      })}
    </div>
  );
}
