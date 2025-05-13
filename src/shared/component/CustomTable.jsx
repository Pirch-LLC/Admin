import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import empty from "../../assets/images/empty.svg"
import {
  CustomDangerButton,
  CustomEyeIconButton,
  CustomWarningButton,
} from "./CustomButton";

export default function CustomTable({
  list,
  columns,
  onApplyFilter,
  onClearFilter,
  selectedItems,
  setSelectedItems,
  handleSort,
  filters,
  activeRow,
  slice,
  setFilters,
  globalFilters,
  expandedRows,
  setExpandedRows,
  rowExpansionTemplate,
  selectionMode,
  showSelection,
  count,
  onPageChange,
  first,
  rows,
  page,
  onView,
  onEdit,
  onDelete,
  hideActions,
  emptysrc,
  showCounts,
}) {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (timer > 0) {
        let newTimer = timer - 1;
        setTimer(newTimer);
      }
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timer]);

  useEffect(() => {
    if (timer === 0 && slice) {
      dispatch(slice(""));
    }
  }, [timer]);

  const rowClass = (data) => {
    return {
      "bg-grey-color": data?.id === activeRow,
    };
  };

  const filterClearTemplate = (options) => {
    return (
      <Button
        type="button"
        onClick={() => {
          onClearFilter
            ? onClearFilter(options)
            : options.filterClearCallback("");
        }}
        className="clear-button-outlined"
      >
        Claer
      </Button>
    );
  };

  const filterApplyTemplate = (options) => {
    return (
      <Button
        type="button"
        onClick={() => {
          onApplyFilter
            ? onApplyFilter(options)
            : options.filterApplyCallback();
        }}
        className="bg-primary-color"
      >
        Apply
      </Button>
    );
  };

  const ActionBodyTemplate = (rowData) => {
    return (
      <div className="flex">
        {onView && <CustomEyeIconButton onClick={() => onView(rowData)} />}
        {onEdit && <CustomWarningButton onClick={() => onEdit(rowData)} />}
        {onDelete && (
          <CustomDangerButton
            onClick={() => onDelete(rowData?.id)}
            icon="pi pi-trash"
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <DataTable
        className="w-full custom-table"
        value={list}
        tableStyle={{ minWidth: "50rem" }}
        filters={filters || {}}
        selectionMode={"checkbox"}
        selection={selectedItems && selectedItems}
        onSelectionChange={(e) => {
          setSelectedItems && setSelectedItems(e.value);
        }}
        dataKey="id"
        onSort={handleSort}
        rowClassName={rowClass}
        globalFilterFields={globalFilters}
        onFilter={(e) => {
          setFilters && setFilters(e.filters);
        }}
        onRowToggle={(e) => setExpandedRows(e?.data)}
        expandedRows={expandedRows}
        rowExpansionTemplate={rowExpansionTemplate}
        emptyMessage={
          <div className="flex flex-column align-items-center justify-content-center py-7">
            <img src={emptysrc} alt="" className="mb-3" width={200} />
            <img src={empty} alt="" />
          </div>
        }
      >
        {showSelection && (
          <Column
            selectionMode={selectionMode || "multiple"}
            headerStyle={{ width: "3rem" }}
            frozen
          ></Column>
        )}
        {columns?.map((col, index) => {
          return (
            <Column
              key={index}
              filterField={col?.accessor}
              field={col?.accessor}
              header={col?.name}
              frozen={col?.frozen}
              sortable={col?.sortable}
              filter={col?.filter}
              filterElement={col?.filterElement}
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "180px" }}
              className={`${col?.className || ""} capitalize`}
              filterClear={filterClearTemplate}
              filterApply={filterApplyTemplate}
              body={col?.body}
              showFilterMenuOptions={false}
              showFilterMatchModes={false}
            ></Column>
          );
        })}
        {!hideActions && (
          <Column
            body={ActionBodyTemplate || ""}
            style={{ width: "300px" }}
            header={"Action"}
            alignFrozen="right"
            frozen={true}
          ></Column>
        )}
      </DataTable>

      <div className="flex align-item-center justify-content-end mt-3">
        {showCounts && (
          <>
            {selectionMode !== "single" && showSelection ? (
              <span className="text gray-600">
                {selectedItems?.length || 0} out of {count || 0}
              </span>
            ) : (
              <span className="text-gray-600">
                {rows * page > count ? count : rows * page || 0} out of{" "}
                {count || 0}
              </span>
            )}
          </>
        )}
        {onPageChange && (
          <Paginator
            className="custom-pagination "
            first={Number(first)}
            rows={Number(rows)}
            totalRecords={Number(count)}
            rowsPerPageOptions={[10, 20, 50]}
            onPageChange={onPageChange}
          ></Paginator>
        )}
      </div>
    </div>
  );
}
