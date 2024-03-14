

const Card = ( {item} ) => {
  return (
    <article className="w-72 h-96 border-dotted border-gray-500 border-2 rounded-md flex flex-col justify-center bg-white shadow-md hover:bg-green-600 content-center flex-wrap">
        <div className="h-72 w-64">
            <a href="">
                <img src={item.image} alt=""/>
            </a>
        </div>
        <div className="flex justify-around">
            <p className="text-slate-400 font-bold text-lg">{item.name}</p>
            <p className="font-bold text-xl text-green-600">{item.prix}€</p>
        </div>
    </article>
  )
}

export default Card