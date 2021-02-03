import React from "react";

function Button({ clicked }) {
  return (
    <div>
      <button name="C" onClick={(e) => clicked(e.target.name)}>
        C
      </button>
      <button name="/" onClick={(e) => clicked(e.target.name)}>
        ÷
      </button>
      <button name="*" onClick={(e) => clicked(e.target.name)}>
        ×
      </button>
      <button name="-" onClick={(e) => clicked(e.target.name)}>
        -
      </button>
      <br />
      <button name="7" onClick={(e) => clicked(e.target.name)}>
        7
      </button>
      <button name="8" onClick={(e) => clicked(e.target.name)}>
        8
      </button>
      <button name="9" onClick={(e) => clicked(e.target.name)}>
        9
      </button>
      <button name="+" onClick={(e) => clicked(e.target.name)}>
        +
      </button>
      <br />
      <button name="4" onClick={(e) => clicked(e.target.name)}>
        4
      </button>
      <button name="5" onClick={(e) => clicked(e.target.name)}>
        5
      </button>
      <button name="6" onClick={(e) => clicked(e.target.name)}>
        6
      </button>
      <button name="=" onClick={(e) => clicked(e.target.name)}>
        =
      </button>
      <br />
      <button name="1" onClick={(e) => clicked(e.target.name)}>
        1
      </button>
      <button name="2" onClick={(e) => clicked(e.target.name)}>
        2
      </button>
      <button name="3" onClick={(e) => clicked(e.target.name)}>
        3
      </button>
      <br />
      <button name="0" onClick={(e) => clicked(e.target.name)}>
        0
      </button>
      <button name="." onClick={(e) => clicked(e.target.name)}>
        .
      </button>
      <button name="del" onClick={(e) => clicked(e.target.name)}>
        del
      </button>
      <br />
    </div>
  );
}

export default Button;
