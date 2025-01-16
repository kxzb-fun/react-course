import ShimmerButton from  "./components/ui/shimmer-button"
const App = () => {
  return (
    <>
      <div>
        <ShimmerButton>8888</ShimmerButton>
        <h1>Hello World</h1>
        <button className="border-2	 border-dashed">click me</button>
        <p className="bg-red-200 text-lg">这是p标签</p>
        <div className="rounded-md border-solid border-2">123</div>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-accent">Accent</button>
      </div>
      <div className="avatar">
        <div className="w-24 rounded">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
