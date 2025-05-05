import React from "react";

function Code() {
  return (
    <div className="container">
      <div className="code__block">
        <div className="flex__center dot__container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <pre
          style={{
            display: "block",
            overflowX: "auto",
            background: "",
            color: "#702dff",
            padding: "20px",
          }}
        >
          <code style={{ whiteSpace: "pre-wrap" }}>
            <span style={{ color: "rgb(121, 40, 161)" }}>const</span> developer
            = {"{\n"}
            {"  "}
            <span style={{ color: "#d14" }}>LastName</span>:{" "}
            <span style={{ color: "green" }}>"Santatra Michado"</span>,{"\n"}
            {"  "}
            <span style={{ color: "#d14" }}>PhoneNumber</span>:{" "}
            <span style={{ color: "green" }}>"+261 32 46 658 49"</span>,{"\n"}
            {"  "}
            <span style={{ color: "#d14" }}>Email</span>:{" "}
            <span style={{ color: "green" }}>"Andrianjakasantatra22@gmail.com"</span>,{"\n"}
            {"  "}
            <span style={{ color: "#702dff" }}>hobby</span>: () =&gt; {"{\n"}
            {"    "}
            <span style={{ color: "rgb(105, 105, 105)" }}>// eat();</span>
            {"\n    "}
            <span style={{ color: "rgb(105, 105, 105)" }}>// sleep();</span>
            {"\n    "}
            <span style={{ color: "rgb(105, 105, 105)" }}>// code();</span>
            {"\n    "}
            <span style={{ color: "rgb(105, 105, 105)" }}>// repeat();</span>
            {"\n  }"}
            {"\n"}
            {"};"}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Code;
