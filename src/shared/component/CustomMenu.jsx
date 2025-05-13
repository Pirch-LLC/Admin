import React, { useRef } from "react";
import { Menu } from "primereact/menu";

export default function CustomMenu({
  items = [],
  trigger,
  triggerProps = {},
  ...props
}) {
  const menuRef = useRef(null);

  const handleClick = (event) => {
    menuRef.current?.toggle(event);
  };

  const renderTrigger = () => {
    // If trigger is a valid JSX element, clone it and add onClick
    if (React.isValidElement(trigger)) {
      return React.cloneElement(trigger, {
        onClick: handleClick,
      });
    }

    // If trigger is a component (function/class), render it with onClick
    if (typeof trigger === "function") {
      const TriggerComponent = trigger;
      return <TriggerComponent {...triggerProps} onClick={handleClick} />;
    }

    return null;
  };

  return (
    <>
      <Menu
        model={items}
        popup
        ref={menuRef}
        style={{ width: "auto", minWidth: "unset" }}
        {...props}
      />
      {renderTrigger()}
    </>
  );
}
