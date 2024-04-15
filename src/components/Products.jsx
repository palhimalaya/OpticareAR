import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Repeat2, User } from "lucide-react";

const Products = () => {
  const productData = [
    {
      id: 1,
      imageSrc: "https://dummyimage.com/420x260",
      title: "The Catalyzer",
      price: "$16.00"
    },
    {
      id: 2,
      imageSrc: "https://dummyimage.com/421x261",
      title: "Shooting Stars",
      price: "$21.15"
    },
    {
      id: 3,
      imageSrc: "https://dummyimage.com/422x262",
      title: "Neptune",
      price: "$12.00"
    },
    {
      id: 4,
      imageSrc: "https://dummyimage.com/422x262",
      title: "Neptune",
      price: "$12.00"
    }
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center lg:mx-28">
        <h1 className="text-lg font-semibold dark:text-white md:text-2xl">Browse Our Products</h1>
      </div>
      <section className="text-gray-600 body-font dark:text-gray-400">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productData.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductCard = ({ id, imageSrc, title, price }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavouriteClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={imageSrc} />
          </a>
          <Heart
            onClick={handleFavouriteClick}
            className={`absolute top-0 right-0 m-2 cursor-pointer ${isFavourite ? 'fill-red-500 text-red-500 dark:fill-red-400 dark:text-red-400' : ' text-white dark:text-gray-300'}`}
          />
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <div>
            <h2 className="text-gray-900 title-font text-lg font-medium dark:text-white">{title}</h2>
            <p className="mt-1 dark:text-gray-300">{price}</p>
          </div>
          {/* <div className="flex flex-row text-sm">
            <User className="h-5 w-6" />
            <h3 className="tracking-widest title-font mb-1">4</h3>
          </div> */}
          {/* <Link to={`/product/${2}`}>
            <div className="flex flex-row justify-between items-center text-sm">
              <h3 className="text-gray-500 tracking-widest title-font mb-1">try it on</h3>
              <Repeat2 className="h-6 w-6" />
            </div>
          </Link> */}
        </div>
      </Link>
    </div>
  );
};

export default Products;
