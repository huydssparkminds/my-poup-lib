# My poup

## Installation

```
$ npm install --save my-poup-library
$ yarn add my-poup-library
```

## The gist

```jsx
import { toast, ToastContainer } from "my-poup-library";
import "my-poup-library/dist/style.css"
function App() {

  const notify = () => toast('Hello, world!')

  return (
    <>
      <ToastContainer />
      <button onClick={notify}>Notify!</button>
    </>
  );
}

export default App;

```