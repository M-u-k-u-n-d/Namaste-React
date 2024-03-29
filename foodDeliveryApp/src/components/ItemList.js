import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  // console.log(props.items)
  return (
    <div>
      {props?.items?.map((item) => {
        // console.log(item?.card?.info)
        return (
          <div key={item?.card?.info?.id}>
            <div className="p-6 flex justify-between">
              <div className="w-9/12">
                <div>
                  <p className="font-serif text-lg text-gray-900 font-semibold">
                    {item.card.info.name}
                  </p>
                  <p>
                    ₹
                    {(item.card.info.price || item.card.info.defaultPrice) /
                      100}
                  </p>
                </div>
                <p className="font-sans font-thin text-xs text-wrap">
                  {item.card.info.description}
                </p>
              </div>
              <div className="flex flex-col w-3/12">
                {item?.card?.info?.imageId ? (
                  <img
                    className="h-20 w-28 object-cover ml-9 rounded-md"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                ) : (
                  <div className="h-20 w-28 ml-9 rounded-md bg-gray-50"></div>
                )}
                <button className="bg-black font-serif text-white rounded-md w-20 ml-12 shadow-md flex justify-center items-center">
                  {" "}
                  ADD +{" "}
                </button>
              </div>
            </div>
            <div className="h-[0.5] bg-slate-400"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
