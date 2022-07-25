import React from "react";

export default function ExampleComponent() {
	  const [data, setData] = React.useState(null);
	React.useEffect(() => {
    fetch("/getMessage")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}
