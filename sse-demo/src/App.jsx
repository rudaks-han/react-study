import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // const eventSource = new EventSource("http://localhost:8080/emitter");
  }, []);
  const onClick = () => {
    // const eventSource = new EventSource("http://localhost:8080/sse/client");
    const eventSource = new EventSource("http://localhost:8080/sse");

    let contents = "";

    eventSource.addEventListener("message", (e) => {
      if (e.data === "[DONE]") {
        return;
      }

      if (e.data) {
        // console.log(event.data);
        const chunk = JSON.parse(e.data);
        contents += chunk.content || "";

        console.log("contents", contents);
        // emitter.emit("data", contents);
      }
      //'new_thread' 이벤트가 오면 할 동작
    });

    eventSource.onerror = () => {
      console.log("onerror");
      //에러 발생시 할 동작
      eventSource.close(); //연결 끊기
    };

    return () => {
      eventSource.close();
    };
  };

  return (
    <>
      <button onClick={onClick}>click</button>
    </>
  );
}

export default App;
