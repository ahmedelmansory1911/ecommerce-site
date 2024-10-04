import { PuffLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PuffLoader color="#05a59f" size={80} />
    </div>
  );
}
