import React from "react";
import { FloatLabel } from "primereact/floatlabel";
import { capitalizeCamelCase } from "../../utils/regex";

export default function InputLayout({
  label,
  name,
  required,
  col,
  extraClassName = "",
  errorMessage,
  data,
  children,
  ignorelabel
}) {
  col = parseInt(col);
  if (col > 12) {
    col = 12;
  }
  return (
    <div className={`input-layout mb-3 md:mb-0 px-0 md:col-${col} ${extraClassName}`}>
      {!ignorelabel &&
        <label htmlFor={name} className="text-base font-medium" > 
        <div className="mb-1">
          {label || capitalizeCamelCase(name)}
          {required ? <span className="text-red-500">*</span> : null}
        </div>
      </label>
      }
      
      {children}
      {errorMessage || data?.formErrors?.[name] ? (
        <small className="p-error">
          {errorMessage || data?.formErrors?.[name]}
        </small>
      ) : null}
    </div>
  );
}
