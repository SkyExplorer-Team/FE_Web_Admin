import React, { useEffect } from "react";
import MainComponent from "./MainComponent";
import Sidebar from "./Sidebar";
import "../../../public/assets/compiled/css/app.css";
import "../../../public/assets/compiled/css/app-dark.css";

function App() {
  useEffect(() => {
    import("../../../public/assets/static/js/initTheme.js")
      .then((module) => module.default())
      .catch((error) =>
        console.error("Error importing/initiating initTheme.js:", error)
      );

    import("../../../public/assets/static/js/components/dark.js")
      .then((module) => module.default())
      .catch((error) =>
        console.error("Error importing/initiating dark.js:", error)
      );

    import(
      "../../../public/assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js"
    )
      .then((module) => module.default())
      .catch((error) =>
        console.error(
          "Error importing/initiating perfect-scrollbar.min.js:",
          error
        )
      );

    import("../../../public/assets/compiled/js/app.js")
      .then((module) => module.default())
      .catch((error) =>
        console.error("Error importing/initiating app.js:", error)
      );
  }, []);

  return (
    <>
      <Sidebar />
      <MainComponent />
    </>
  );
}

export default App;
