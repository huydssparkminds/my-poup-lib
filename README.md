# My poup

## Installation

```
$ npm install --save my-poup-library
$ yarn add my-poup-library
```

## The gist

```jsx
import { toast, ToastContainer } from "./components";
function App() {

  const toastError = () => toast.error("Hello, word")
  const toastWarning = () => toast.warning("Hello, word")
  const toastInfo = () => toast.info("Hello, word")
  const toastLoading = () => toast.loading("Hello, word")
  const toastSuccess = () => toast.success("Hello, word", { duration: 5000, message: "This my message", position: 'top-left' })

  return (
    <>
      <ToastContainer />
      <button onClick={toastError}>toastError</button>
      <button onClick={toastSuccess}>toastSuccess</button>
      <button onClick={toastWarning}>toastWarning</button>
      <button onClick={toastInfo}>toastInfo</button>
      <button onClick={toastLoading}>toastLoading</button>
    </>
  );
}

export default App;


```