import React, { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";
import { InputSwitch } from "primereact/inputswitch";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import InputLayout from "./InputLayout";
import { capitalizeCamelCase } from "../../utils/regex";
import { MultiSelect } from "primereact/multiselect";
import { Slider } from "primereact/slider";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

export const CustomRadioButton = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col,
  formArrayName,
  checked,
  index,
  inputClass,
  template,

  ...props
}) => {
  return (
    <InputLayout
      col={col || 6}
      name=""
      extraClassName={extraClassName}
      errorMessage={data?.formErrors?.[name]}
    >
      <div className="flex align-items-center">
        <RadioButton
          inputId={label}
          name={name}
          value={value}
          checked={data?.[name] === value || checked}
          onChange={(e) =>
            onChange &&
            onChange({
              ...e,
              name: e.target.name,
              value: e.value,
              formArrayName,
              index,
            })
          }
          className={`custom-radio ${inputClass ? inputClass : ""} ${
            errorMessage ? "p-invalid" : ""
          }`}
          {...props}
        />
        {label && (
          <label htmlFor={label} className="ml-2 text-sm cursor-pointer">
            {label}
          </label>
        )}
      </div>

      {template && <>{template}</>}
    </InputLayout>
  );
};
export const CustomInput = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 6,
  inputClass,
  disabled = false,
  type = "text",
  placeholder = "",
  icon = null,
  iconPosition = "right",
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <div className="p-inputgroup w-full">
        {icon && iconPosition === "left" && (
          <span className="p-inputgroup-addon">{icon}</span>
        )}
        <InputText
          id={name}
          name={name}
          value={value || data?.[name] || ""}
          type={type}
          onChange={(e) =>
            onChange &&
            onChange({ ...e, name: e.target.name, value: e.target.value })
          }
          className={`input w-full ${inputClass ? inputClass : ""} ${
            errorMessage ? "p-invalid" : ""
          } ${value || data?.[name]}`}
          placeholder={placeholder || `Enter ${capitalizeCamelCase(name)}`}
          disabled={disabled}
          {...props}
        />
        {icon && iconPosition === "right" && (
          <span className="p-inputgroup-addon">{icon}</span>
        )}
      </div>
    </InputLayout>
  );
};
export const CustomInputTextArea = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 6,
  inputClass,
  disabled = false,
  type = "text",
  placeholder = "",
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <InputTextarea
        id={name}
        name={name}
        value={value || data?.[name] || ""}
        type={type}
        onChange={(e) =>
          onChange &&
          onChange({ ...e, name: e.target.name, value: e.target.value })
        }
        className={`input w-full border-round-3xl ${
          inputClass ? inputClass : ""
        } ${errorMessage ? "p-invalid" : ""} ${value || data?.[name]}`}
        placeholder={placeholder || `Enter ${label}`}
        disabled={disabled}
        {...props}
      />
    </InputLayout>
  );
};

export const CustomInputNumber = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 12,
  inputClass,
  disabled = false,
  type = "text",
  placeholder = "",
  useGrouping = false,
  maxLength = 10,
  icon = null,
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <div className="relative w-full">
        {icon && <span className="absolute mt-2  right-0 ">{icon}</span>}

        <InputNumber
          id={name}
          name={name}
          value={value ?? data?.[name] ?? null}
          type={type}
          onChange={(e) => onChange && onChange({ ...e, name, value: e.value })}
          className={`input w-full border-round-3xl pr-10 ${inputClass || ""} ${
            errorMessage ? "p-invalid" : ""
          }`}
          placeholder={placeholder || `Enter ${name}`}
          disabled={disabled}
          useGrouping={useGrouping}
          maxLength={maxLength}
          {...props}
        />
      </div>
    </InputLayout>
  );
};

export const CustomPassword = ({
  label,
  name = "",
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 12,
  inputClass,
  disabled = false,
  feedback = false,
  placeholder = "",
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <Password
        id={name}
        name={name}
        value={value || data?.[name] || ""}
        onChange={(e) => {
          onChange &&
            onChange({ ...e, name: e.target.name, value: e.target.value });
        }}
        className={`w-full block ${inputClass ? inputClass : ""} ${
          errorMessage ? "p-invalid" : ""
        }`}
        inputClassName="w-full"
        disabled={disabled}
        feedback={feedback}
        toggleMask
        placeholder={placeholder || `Enter ${capitalizeCamelCase(name)}`}
        {...props}
      />
    </InputLayout>
  );
};

export const CustomDropDown = ({
  label,
  name,
  onChange,
  options,
  data,
  value,
  errorMessage,
  extraClassName,
  dropDownClassName,
  required,
  formArrayName,
  index,
  col = 12,
  optionLabel = "label",
  optionValue = "value",
  placeholder = "Select",
  highlightOnSelect = true,
  valueTemplate,
  itemTemplate,
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <Dropdown
        id={name}
        name={name}
        options={options}
        value={value || data?.[name]}
        onChange={(e) =>
          onChange &&
          onChange({
            ...e,
            name: e.target.name,
            value: e.value,
            formArrayName,
            index,
          })
        }
        className={`w-full custom-dropdown border-round-3xl primary-color ${
          errorMessage ? "p-invalid" : ""
        } ${dropDownClassName}`}
        optionLabel={optionLabel}
        optionValue={optionValue}
        placeholder={placeholder || `Select ${capitalizeCamelCase(name)}`}
        highlightOnSelect={highlightOnSelect}
        valueTemplate={valueTemplate}
        itemTemplate={itemTemplate}
        {...props}
      />
    </InputLayout>
  );
};

export const CustomCalander = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 6,
  inputClass,
  disabled = false,
  placeholder = "",
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
      labelClassName="text-dark"
    >
      <Calendar
        id={name}
        name={name}
        value={value || data?.[name] || ""}
        onChange={(e) => onChange && onChange({ ...e, name, value: e.value })}
        className={`w-full border-round-3xl overflow-hidden ${
          inputClass ? inputClass : ""
        }`}
        inputClassName="border-round-left-3xl"
        disabled={disabled}
        placeholder={placeholder || `Select ${capitalizeCamelCase(name)}`}
        showIcon
        {...props}
      />
    </InputLayout>
  );
};

export const CustomCheckbox = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col,
  formArrayName,
  checked,
  index,
  inputClass,
  template,
  ...props
}) => {
  return (
    <InputLayout
      col={col || 6}
      name=""
      extraClassName={extraClassName}
      errorMessage={data?.formErrors?.[name]}
    >
      <Checkbox
        id={name}
        name={name}
        inputId={label}
        checked={checked || value || data?.[name]}
        onChange={(e) =>
          onChange &&
          onChange({
            ...e,
            name: e.target.name,
            value: e.checked,
            formArrayName,
            index,
          })
        }
        className={`checkbox cursor-pointer ${inputClass ? inputClass : ""} ${
          errorMessage ? "p-invalid" : ""
        }`}
        {...props}
      />

      {label && (
        <label htmlFor={label} className="ml-2 text-sm cursor-pointer">
          {label}
        </label>
      )}

      {template && <>{template}</>}
    </InputLayout>
  );
};

export const CustomSwitch = ({
  label,
  name,
  data,
  value,
  onChange,
  col = 6,
  ...props
}) => {
  return (
    <InputLayout col={col} name="">
      <div className="flex">
        <InputSwitch
          checked={value || data?.[name]}
          onChange={(e) => onChange && onChange({ ...e, name, value: e.value })}
          {...props}
        />
        <div htmlFor={label} className="ml-2 my-auto">
          {label ? label : label}
        </div>
      </div>
    </InputLayout>
  );
};

export const CustomMemoryInput = ({
  label,
  name,
  data,
  value,
  onChange,

  typeValue,
  typeName,
  onTypeChange,

  errorMessage,
  extraClassName,
  required,
  col = 6,
  inputClass,
  disabled = false,
  type = "text",
  placeholder = "",
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <div className="p-inputgroup flex-1">
        <InputText
          id={name}
          name={name}
          value={value || data?.[name] || ""}
          type={type}
          onChange={(e) =>
            onChange &&
            onChange({ ...e, name: e.target.name, value: e.target.value })
          }
          className={`input w-full ${inputClass ? inputClass : ""} ${
            errorMessage ? "p-invalid" : ""
          }`}
          placeholder={placeholder || `Enter ${name}`}
          disabled={disabled}
          {...props}
        />
        <Dropdown
          id={typeName}
          name={typeName}
          value={typeValue || data?.[typeName]}
          onChange={(e) =>
            onTypeChange &&
            onTypeChange({ ...e, name: e.target.name, value: e.value })
          }
          className="custom-dropdown w-3"
          options={["Pi", "Ti", "Gi", "Mi"]}
        />
      </div>
    </InputLayout>
  );
};

//New
export const CustomSearch = ({ value = "", onChange }) => {
  const [search, setSearch] = useState(value);
  useEffect(() => {
    if (onChange) {
      onChange(search);
    } // eslint-disable-next-line
  }, [search]);

  return (
    <div className="search-box">
      <i className="pi pi-search" />
      <InputText
        className="w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
    </div>
  );
};

export const CustomForm = ({ children, title }) => {
  return (
    <form className="grid m-0 p-0">
      {title ? <div className="col-12 title my-auto">{title}</div> : null}
      {children}
    </form>
  );
};

export const CustomField = ({ label, name, data, value }) => {
  return (
    <div className="input-layout col-12 grid">
      <label htmlFor={name} className="text-sm font-semibold col-3">
        <div>{label ? label : name}</div>
      </label>
      <div className="col-9  overflow-x-auto">
        {value || data?.[name] || "-"}
      </div>
    </div>
  );
};

export const CustomFileInput = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 6,
  inputClass,
  disabled = false,
  placeholder = "",
  inputKey,
  selectedFiles,
  accept,
  isMulitple,
  ignoreError,
  ignorelabel,
  src,
  ...props
}) => {
  let image = "";
  if (data?.[name]?.name) {
    image = URL.createObjectURL(data?.[name]);
  } else {
    image = data?.[name];
  }
  return (
    <InputLayout
      col={col}
      label={label}
      ignorelabel={ignorelabel}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
      ignoreError={ignoreError || true}
    >
      <div className="avatar-img">
        <div className="upload-icon w-9rem text-center p-2 relative bg-dark-red text-white border-round-lg">
          Upload Photo
          <input
            disabled={disabled}
            id="file-upload"
            className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
            type="file"
            accept={accept || ".jpg,.jpeg,.png"} //.doc,.xls,.zip,.pdf
            onChange={(e) =>
              onChange &&
              onChange({
                ...e,
                name: name,
                value: e?.target?.files[0],
              })
            }
            // onClick={(event) => {
            //   if (
            //     event.target.files.length === 1 &&
            //     event.target.files[0].name ===
            //       selectedFiles[selectedFiles.length - 1]?.name
            //   ) {
            //     event.target.value = null;
            //   }
            // }}
            // multiple
          />
        </div>
      </div>
    </InputLayout>
  );
};

export const CustomInputTextArea2 = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
  required = false,
  disabled = false,
  errorMessage = "",
  className = "",
  inputClassName = "",
  ...props
}) => {
  return (
    <div className={`field ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-2 font-medium pt-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <InputTextarea
        id={name}
        name={name}
        value={value}
        onChange={(e) =>
          onChange &&
          onChange({ ...e, name: e.target.name, value: e.target.value })
        }
        rows={rows}
        className={`w-full border-round-3xl ${inputClassName} ${
          errorMessage ? "p-invalid" : ""
        }`}
        placeholder={placeholder || `Enter ${label}`}
        disabled={disabled}
        {...props}
      />
      {errorMessage && <small className="p-error">{errorMessage}</small>}
    </div>
  );
};

export const LabeledMultiSelect = ({
  label,
  name,
  onChange,
  options,
  data,
  value,
  errorMessage,
  extraClassName,
  multiselectClassName,
  required,
  formArrayName,
  index,
  col = 12,
  optionLabel = "label",
  optionValue = "value",
  placeholder = "Select",
  display = "chip",
  maxSelectedLabels,
  ...props
}) => {
  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <MultiSelect
        id={name}
        name={name}
        options={options}
        value={value || data?.[name]}
        onChange={(e) =>
          onChange &&
          onChange({
            ...e,
            name: e.target.name,
            value: e.target.value,
            formArrayName,
            index,
          })
        }
        className={`w-full ${
          errorMessage ? "p-invalid" : ""
        } ${multiselectClassName}`}
        optionLabel={optionLabel}
        optionValue={optionValue}
        placeholder={placeholder}
        display={display}
        maxSelectedLabels={maxSelectedLabels}
        {...props}
      />
    </InputLayout>
  );
};

export const CustomDurationSlider = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 6,
  inputClass,
  disabled = false,
  type = "text",
  placeholder = "",
  ...props
}) => {
  value = value || data?.[name];
  const [thumbPos, setThumbPos] = useState(0);
  const sliderRef = useRef(null);

  const getTooltipText = (value) => {
    return `${value || 0} ${value > 0 ? "Days" : "Day"}`;
  };

  useEffect(() => {
    const thumb = sliderRef.current?.querySelector(".p-slider-handle");
    if (thumb) {
      const thumbLeft = thumb.offsetLeft;
      setThumbPos(thumbLeft);
    }
  }, [value]);

  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <div className="energy-container relative ">
        <label htmlFor="energy" className="energy-label"></label>

        {/* Tooltip Bubble */}
        <div
          className="energy-tooltip "
          style={{ left: `calc(${thumbPos}px + 10px)` }}
        >
          {getTooltipText(value)}
        </div>

        {/* Slider */}
        <div className="slider-wrapper " ref={sliderRef}>
          <Slider
            id="energy"
            value={value}
            onChange={(e) =>
              onChange && onChange({ ...e, name, value: e.value })
            }
            min={0}
            max={30}
            className="custom-energy-slider "
          />
        </div>

        {/* Labels */}
        <div className="energy-range-labels sub-heading">
          <span>1 Day</span>
          <span>30 Day</span>
        </div>
      </div>
    </InputLayout>
  );
};

export const CustomEnergySlider = ({
  label,
  name,
  data,
  value,
  onChange,
  errorMessage,
  extraClassName,
  required,
  col = 6,
  inputClass,
  disabled = false,
  type = "text",
  placeholder = "",
  ...props
}) => {
  value = value || data?.[name];
  const [thumbPos, setThumbPos] = useState(0);
  const sliderRef = useRef(null);

  const getTooltipText = (value) => {
    if (value === 0) return "I'm wiped, help me survive";
    if (value <= 1) return "Minimal prep";
    if (value <= 4) return "Moderate energy";
    return "Fully energized!";
  };
  const containerWidth = sliderRef.current?.offsetWidth || 0;
  const tooltipLeft = Math.min(Math.max(thumbPos - 10, 0), containerWidth - 50);
  useEffect(() => {
    const thumb = sliderRef.current?.querySelector(".p-slider-handle");
    if (thumb) {
      const thumbLeft = thumb.offsetLeft;
      setThumbPos(thumbLeft);
    }
  }, [value]);

  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
    >
      <div className="energy-container relative">
        <label htmlFor="energy" className="energy-label"></label>
        {/* Tooltip Bubble */}
        <div className="energy-tooltip" style={{ left: `${tooltipLeft}px` }}>
          {getTooltipText(value)}
        </div>

        {/* Slider */}
        <div className="slider-wrapper " ref={sliderRef}>
          <Slider
            id="energy"
            value={value}
            onChange={(e) =>
              onChange && onChange({ ...e, name, value: e.value })
            }
            min={0}
            max={5}
            className="custom-energy-slider "
          />
        </div>

        {/* Labels */}
        <div className="energy-range-labels">
          <span>0</span>
          <span>5</span>
        </div>
      </div>
    </InputLayout>
  );
};

export const CustomCouponInput = ({
  label,
  name,
  value,
  onChange,
  onApply,
  errorMessage,
  required,
  data,
  placeholder = "Add coupon code",
  disabled = false,
  col = 6,
  extraClassName,
  inputClass,
  ...props
}) => {
  const inputValue = value || data?.[name] || "";

  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      errorMessage={errorMessage}
      data={data}
    >
      <div
        className="flex align-items-center justify-content-between p-1 px-2"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "2rem",
          height: "4rem",
        }}
      >
        <InputText
          id={name}
          name={name}
          value={inputValue}
          onChange={(e) =>
            onChange && onChange({ ...e, name, value: e.target.value })
          }
          placeholder={placeholder}
          disabled={disabled}
          className={`border-none w-full mr-2 ${inputClass || ""}`}
          style={{
            backgroundColor: "transparent",
            fontWeight: "500",
            fontSize: "1rem",
          }}
          {...props}
        />
        <Button
          label="Apply"
          onClick={() => onApply && onApply(inputValue)}
          className="border-none px-4 text-white"
          style={{
            backgroundColor: "#C1513E",
            borderRadius: "2rem",
            fontWeight: "500",
          }}
          disabled={disabled}
        />
      </div>
    </InputLayout>
  );
};

export const CustomCardInput = ({
  label,
  name,
  value,
  onChange,
  errorMessage,
  required,
  disabled = false,
  data,
  col = 12,
  extraClassName,
  inputClass,
  placeholder = "1234 5678 9012 3456",
  cardLogos = [],
  ...props
}) => {
  const inputValue = value || data?.[name] || "";

  return (
    <InputLayout
      col={col}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      errorMessage={errorMessage}
      data={data}
    >
      <div
        className="flex align-items-center justify-content-between pl-3 pr-3"
        style={{
          backgroundColor: "#fff",
          borderRadius: "2rem",
          height: "3.5rem",
        }}
      >
        <InputText
          id={name}
          name={name}
          value={inputValue}
          onChange={(e) =>
            onChange && onChange({ ...e, name, value: e.target.value })
          }
          placeholder={placeholder}
          disabled={disabled}
          className={`border-none w-full mr-2 ${inputClass || ""}`}
          style={{
            backgroundColor: "transparent",
            fontSize: "1rem",
            fontWeight: "500",
          }}
          {...props}
        />

        <div className="flex align-items-center gap-2">
          {cardLogos.map((src, idx) => (
            <img key={idx} src={src} alt={`Card-${idx}`} height={20} />
          ))}
        </div>
      </div>
    </InputLayout>
  );
};

export const LoadingSwitch = ({ loading, checked, onChange }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <InputSwitch
        checked={checked}
        onChange={onChange}
        disabled={loading}
        style={{ opacity: loading ? 0.6 : 1 }}
      />
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <ProgressSpinner
            style={{ width: "20px", height: "20px" }}
            strokeWidth="4"
          />
        </div>
      )}
    </div>
  );
};
