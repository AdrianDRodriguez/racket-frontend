export function RacketsPage() {
  var clubs = [
    {
      id: 1,
      name: "FCBarcelona",
      url: "https://summa.es/wp-content/uploads/2022/07/BARC%CC%A7A_1-1920x1184.jpg",
    },
    {
      id: 1,
      name: "Real Madrid",
      url: "https://images2.minutemediacdn.com/image/upload/c_crop,w_7154,h_4024,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jeeg8qcvxvpss07xpp.jpg",
    },
    {
      id: 1,
      name: "Juventus",
      url: "https://b3751545.smushcdn.com/3751545/wp-content/uploads/2024/10/Juventus-Futbol-Kulubu-Tarihi.jpg?lossy=1&strip=1&webp=1",
    },
    // {
    //   id: 1,
    //   name: "FCBarcelona",
    //   url: "https://summa.es/wp-content/uploads/2022/07/BARC%CC%A7A_1-1920x1184.jpg",
    // }
    // {
    //   id: 1,
    //   name: "FCBarcelona",
    //   url: "https://summa.es/wp-content/uploads/2022/07/BARC%CC%A7A_1-1920x1184.jpg",
    // }
    // {
    //   id: 1,
    //   name: "FCBarcelona",
    //   url: "https://summa.es/wp-content/uploads/2022/07/BARC%CC%A7A_1-1920x1184.jpg",
    // }
  ]

  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
        <div>
          {clubs.map(club =>(
            <div key={club.id} className="shadow-lg rounded-sm mb-4">
              <img src={club.url} className="w-full aspect-[4/3] object-cover" />
              <div className="p-4">
              <h2 className="font-bold text-xl">{club.name}</h2>
              </div>
              <button>More Info</button>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
