const NotFound = () => {
  const goBack = (home: boolean) => {
    if (typeof window !== "undefined" && window.history.length > 1 && !home) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-9xl">404</h1>
      <p className="m-5 mb-30 text-2xl">Page not found</p>
      <div className="flex gap-2">
        <p className="animate-bounce text-4xl">👇</p>
        <p className="text-xl">Go back to civilization?</p>
        <p className="animate-bounce text-4xl">👇</p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <button
          className="btn btn-primary"
          onClick={() => {
            goBack(true);
          }}
        >
          Go to home
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => {
            goBack(false);
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
