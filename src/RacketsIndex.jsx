export function RacketsIndex({ rackets }) {
  return (
    <div>
      <h1>All photos ({ rackets.length } total)</h1>
      {rackets.map((racket) => (
         <div key={racket.id}>
          <div>
            Brand: {racket.brand}
          </div>
          <div>
            Head_size: {racket.head_size}
          </div>
          <div>
            Mass: {racket.mass}
          </div>
          <div>
            Price: {racket.price}
          </div>
          <button>More Info</button>
          <br />
          <br />
         </div>
       ))}
    </div>
  );
}