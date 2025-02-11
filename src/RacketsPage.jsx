import { RacketsIndex } from "./RacketsIndex";

export function RacketsPage() {
  const rackets = [ 
    {id: 1, head_size: 100, price: 260, brand: "yonex"},
    {id: 2, head_size: 107, price: 220, brand: "prince"},
    {id: 3, head_size: 93, price: 250, brand: "head"},
  ];
  
  return (
    <main>
      <RacketsIndex rackets={rackets} />
    </main>
  );
}
