import css from "styled-jsx/css";

const styles = css.global`
  * {
    color: red;
  }
  main {
    margin: auto;
    padding: auto;
    text-align: center;
  }
`;

css.home`
* {
    color: violet;
  }
}
`;

export default styles;
