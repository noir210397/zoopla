import React from "react";
import image1 from "../images/Home Slider/wales-land-transaction-tax.jpg";
import image2 from "../images/Home Slider/house-price-index-april-2022.jpg";
import image3 from "../images/Home Slider/GettyImages-1190810297_-_2.jpg";
import { Link } from "react-router-dom";
const data = [
  {
    img: image1,
    header: `Renters' Reform Bill comes to Parliament next week`,
    date: "05 may 2023",
    description: `Notice periods for rent increases to be doubled, no-fault evictions banned and minimum housing standards established. What's in the Renters' Reform Bill? `,
  },
  {
    img: image2,
    header: `Zoopla House Price Index - May 2023`,
    date: "03 may 2023",
    description: `Our House Price Index for May 2023 shows that the UK housing market is more balanced than it has been for years, with buyer demand and sale numbers recovering while house price growth slows. `,
  },
  {
    img: image3,
    header: `Are UK house prices falling in May 2023?`,
    date: "03 may 2023",
    description: `Our House Price Index has recorded more local house price falls this month, while UK-wide price growth drops to 3%. Here’s what’s happening with house prices in May 2023.  `,
  },
];
const HomeSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0">
      <h1 className="text-2xl font-extrabold py-2">
        Looking for facts, figures or property advice?
      </h1>
      <p className="text-lg py-1">Just ask Zoopla.</p>
      <div>
        <div className=" overflow-hidden grid md:grid-cols-3 justify-center grid-flow-row md:gap-6 gap-3">
          {data.map((item) => {
            return (
              <div className="max-w-md md:w-full pb-2  " key={item.header}>
                <div className="h-56  ">
                  <img
                    src={item.img}
                    alt={item.header}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <Link>
                  <h2 className="py-1 font-semibold text-lg hover:underline decoration-purple-700 decoration-2">
                    {item.header}
                  </h2>
                </Link>

                <p>{item.date}</p>
                <p className="text-sm line-clamp-2 ">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
