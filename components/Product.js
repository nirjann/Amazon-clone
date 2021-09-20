import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

function Product(props) {
  const { id, title, description, rating, image, category, price } =
    props.product;
  const [ratings] = useState(Math.ceil(rating.rate));
  const [hasPrime] = useState(Math.random() > 0.5);
  return (
    <div className="flex flex-col m-5 p-10 bg-white z-30 shadow-sm relative">
      <p className="absolute top-2 right-2 text-sm italic text-gray-500">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex mt-2">
        {Array(ratings)
          .fill()
          .map((_) => (
            <StarIcon className="h-4 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price * 73.74} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center text-xs -mx-5">
          <Image
            src="https://links.papareact.com/fdw"
            height={40}
            width={90}
            objectFit="contain"
          />

          <p className="italic  -mx-5 text-gray-500">FREE next-day delivery</p>
        </div>
      )}
      <button className="mt-auto button ">Add to Basket</button>
    </div>
  );
}

export default Product;
