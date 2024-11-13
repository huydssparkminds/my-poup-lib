import { toast, ToastContainer } from "./components";
function App() {

  const toastError = () => toast.error("Hello, word")
  const toastWarning = () => toast.warning("Hello, word")
  const toastInfo = () => toast.info("Hello, word")
  const toastLoading = () => toast.loading("Hello, word")
  const toastSuccess = () => toast.success("Hello, word", { duration: 5000, message: "This my message", position: 'top-left' })

  return (
    <div className="container">
      <ToastContainer />
      <button className="button-1" onClick={toastError}>Error</button>
      <button className="button-1" onClick={toastSuccess}>Success</button>
      <button className="button-1" onClick={toastWarning}>Warning</button>
      <button className="button-1" onClick={toastInfo}>Info</button>
      <button className="button-1" onClick={toastLoading}>Loading</button>
    </div>
  );
}

export default App;
