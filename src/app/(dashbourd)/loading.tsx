function loading() {
  return (
    <div className="w-full  flex flex-col items-center justify-center min-h-screen bg-main-light  ">
      <div className="w-16 h-16 border-t-4 border-r-4 border-b-4  border-main rounded-full animate-spin"></div>
      <span className="mt-4 text-xl font-bold text-main  ">
        Please Wait ...
      </span>
      <div className="mt-2 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className=" bg-main animate-pulse"></div>
      </div>
    </div>
  );
}

export default loading;
