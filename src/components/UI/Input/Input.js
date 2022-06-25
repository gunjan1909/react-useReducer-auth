import React, { useRef, useImperativeHandle, forwardRef } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  /*useEffect(() => {
    //inputRef.current will give the dom element and focus() is a DOM method for inputs to focus
    inputRef.current.focus();
  }, []);*/

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
