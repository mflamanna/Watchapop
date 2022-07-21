import { Link } from "react-router-dom"


export default function ItemWatch ({model, brand, price, image}) {


    return (
        <div className="min-h-screen bg-gray-100 flex">
  <div className="container">
    <div className="max-w-sm">
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg cardWatch">
        
      <Link to="/detail"><img className="rounded-t-lg imgWatch" src={image} alt="" /></Link>
        <div className="py-6 px-8 rounded-lg bg-white">
          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{brand}</h1>
          <p className="text-gray-700 tracking-wide">{model}</p>
          <Link to="/form">
            <button className="mt-6 py-2 px-4 bg-newYellow text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
          </Link>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span className="text-md bg-newYellow rounded-lg p-2">${price}</span>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}