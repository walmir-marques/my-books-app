import LoaderImg from "../images/loader.svg";

function Loader() {
  return (
    <div className="flex flex-col animate-spin">
      <img src={LoaderImg} alt="loader" />
    </div>
  );
}
export default Loader;
