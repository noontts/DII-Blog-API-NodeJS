const Card = ({ CardObj }) => {
  return (
    <>
      <div className="w-96 rounded-2 m-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt=""
          className="rounded-2 object-cover"
        />
        <div className="font-bold py-2">
          <a href="#">
            Title Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </a>
        </div>
        <div className="flex align-items-center justify-content-center py-4 text-gray-400">
          Mon May 30 2022
        </div>
        <p className="line-clamp-5">
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing...
        </p>
      </div>
    </>
  );
};

export default Card;
