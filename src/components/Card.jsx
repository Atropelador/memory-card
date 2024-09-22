function Card() {
  return (
    <>
      <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
        <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-1 text-xl font-semibold text-slate-800">
            Natalie Paisley
          </h4>
        </div>

      </div>
    </>
  );
}

export default Card;
