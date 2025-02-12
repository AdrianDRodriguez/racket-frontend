import axios from "axios";

export function RacketsNew() {
  const handleSubmit = (event) => {
    console.log("handle submit")
    event.preventDefault()
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/rackets.json", params).then(response => {
      console.log(response.data)
    }) 
  }
  return (
    <div>
      <h1>New Racket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Brand: <input name="brand" type="text" />
        </div>
        <div>
          Head_size: <input name="head_size" type="text" />
        </div>
        <div>
          Mass: <input name="mass" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}