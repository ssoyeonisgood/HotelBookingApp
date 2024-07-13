import { Alert, AlertTitle } from "./ui/alert";
import { FaInfoCircle } from "react-icons/fa";

const AlertMessage = ({ message, type }: { message: any; type: any }) => {
  return (
    <Alert
      className={`rounded-none ${
        type === "error" ? "bg-red-500 text-white" : "bg-green-500 test-white"
      }`}
    >
      <AlertTitle className="text-white">{message}</AlertTitle>
    </Alert>
  );
};

export default AlertMessage;
