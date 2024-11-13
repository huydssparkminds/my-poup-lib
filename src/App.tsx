import { toast, ToastContainer } from "./components";
function App() {
  const notify = () => {
    toast("Hello, world!", {
      message: "This is a custom message",
    });
  };

  const notifyError = () => {
    toast("Hello, world!", {
      message: "This is a custom message",
      type: "error",
    });
  };

  const notifyInfo = () => {
    toast("Hello, world!", {
      message: "This is a custom message",
      type: "info",
    });
  };

  const notifyWarning = () => {
    toast("Hello, world!", {
      message: "This is a custom message",
      type: "warning",
    });
  };

  return (
    <>
      <ToastContainer />
      <button onClick={notify}>Notify!</button>
      <button onClick={notifyError}>notifyError!</button>
      <button onClick={notifyInfo}>notifyInfo!</button>
      <button onClick={notifyWarning}>notifyWarning!</button>
    </>
  );
}

export default App;
