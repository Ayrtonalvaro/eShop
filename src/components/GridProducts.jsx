import React, {useEffect, useState} from 'react';

const GridProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    console.log(products)
  }, []);

  const getProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const items = await data.json();
    setProducts(items);
  };

  return (
    <div>
      <p className="flex justify-center text-5xl mt-10">Products</p>
      <div>
        <nav>
          <ul className="flex gap-5 text-2xl mt-10 ml-20">
            <li>Electronic</li>
            <li>Technology</li>
            <li>Jewelery</li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-3 mt-32">
        {products.map((product) => (
          <div>
            <ul>
              <li key={product.id}>
                <p className="text-xl flex justify-center">{product.title}</p>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[300px] mx-auto my-10"
                />
                <div className="mx-auto flex justify-around items-center">
                  <p className="text-red-600 text-xl font-semibold">
                    ${product.price}
                  </p>
                  <button className="bg-yellow-400 rounded w-14 h-8 font-medium">
                    Buy
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProducts;
