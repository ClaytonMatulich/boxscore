import { useState } from "react";

import { Button } from "@/components/ui/button.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-auto flex max-w-md flex-col gap-1">
        <Button onClick={() => setCount((count) => count + 1)}>up</Button>
        <Button onClick={() => setCount((count) => count - 1)}>down</Button>
        <p>{count}</p>
      </div>
    </>
  );
}

export default App;
