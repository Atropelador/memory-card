/* eslint-disable react/prop-types */

function GeneralModal({ textHeader, bodyText, score, maxScore, img, showModal, restart }) {
  //const [showModal, setShowModal] = useState(false);
  return (
    <>

      {showModal ? (
        <>
          <div className="text-center justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5">
                  <h3 className="text-3xl font-semibold ">{textHeader}</h3>
                </div>
                {/*body*/}
                <div className="flex flex-col items-center justify-center p-6">
                  <img className="max-h-36" src={img} alt="Game over" />
                  <p className="mt-3 text-blueGray-500 text-lg leading-relaxed">
                    Your Score: {score}
                  </p>
                  <p className="mb-6 text-blueGray-500 text-lg leading-relaxed">
                    Best Score: {maxScore}
                  </p>
                  <p className="mt-4 text-blueGray-500 text-lg leading-relaxed">
                    {bodyText}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6">
                  <button
                    className="min-w-56 min-h-16 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => restart()}
                  >
                    Restart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default GeneralModal;
