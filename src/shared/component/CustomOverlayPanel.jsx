import React, { useRef, useEffect } from "react";
import { OverlayPanel } from "primereact/overlaypanel";

export default function CustomOverlayPanel({
  children,
  trigger,
  triggerType = "hover", // "click" or "hover"
}) {
  const op = useRef(null);
  const triggerRef = useRef(null);

  const handleOutsideClick = (e) => {
    const opEl = op.current?.container;
    const triggerEl = triggerRef.current;

    if (!opEl || !triggerEl) return;

    // If click is outside both trigger and overlay content
    if (!opEl.contains(e.target) && !triggerEl.contains(e.target)) {
      op.current.hide();
    }
  };

  useEffect(() => {
    if (triggerType === "click") {
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [triggerType]);

  const getTriggerProps = () => {
    if (triggerType === "click") {
      return {
        ref: triggerRef,
        onClick: (e) => op.current.toggle(e),
      };
    } else {
      return {
        ref: triggerRef,
        onMouseEnter: (e) => op.current.show(e),
        onMouseLeave: () => op.current.hide(),
      };
    }
  };

  const handleOverlayClick = () => {
    op.current.hide(); // Close overlay if user clicks inside the content
  };

  return (
    <>
      <span {...getTriggerProps()}>{trigger}</span>
      <OverlayPanel
        ref={op}
        dismissable
        {...(triggerType === "hover" && {
          onMouseLeave: () => op.current.hide(),
        })}
      >
        <div style={{ maxWidth: 250 }} onClick={handleOverlayClick}>
          {children}
        </div>
      </OverlayPanel>
    </>
  );
}
