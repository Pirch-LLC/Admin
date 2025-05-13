export const GenCard = ({ label, value }) => {
  const renderValue = (val) => {
    if (Array.isArray(val)) {
      return val.map((item, index) => (
        <div key={index}>{renderValue(item)}</div>
      ));
    }

    if (typeof val === "object" && val !== null) {
      return Object.entries(val).map(([key, nestedVal], index) => (
        <div key={index}>
          {Number(key) && <strong>{key}:</strong>} {renderValue(nestedVal)}
        </div>
      ));
    }

    return <span className="sub-heading font-normal">{val}</span>;
  };

  return (
    <div className="text-dark font-semibold mb-2">
      <span>{label}:</span>
      <div className="">{renderValue(value)}</div>
    </div>
  );
};
