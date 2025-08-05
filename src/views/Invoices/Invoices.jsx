import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../shared/component/CustomTable";
import { CustomDeleteDialog } from "../../shared/component/CustomDialog";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInvoicesListAction } from "../../store/actions/invoicesActions";
import { getStatusColors } from "../../utils/commonFunctions";

export default function Invoices() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [userToDelete, setUserToDelete] = useState("");
    const [first, setFirst] = useState(0);
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // get query  params or default
    const page = query.get("page") || 1;
    const rows = query.get("rows") || 10;

    // Redux state
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        getList(page, rows);
    }, []);

    useMemo(() => {
        setFirst(page * rows - rows);
    }, []);

    const getList = async (page, rows) => {
        dispatch(
            getInvoicesListAction(page, rows, setLoading, (res) => {
                if (res?.success) {
                    setList(res.data);
                    setCount(res.count);
                }
            })
        );
    };

    const onPageChange = (e) => {
        navigate(`/invoices?page=${e.page + 1}&rows=${e.rows}`);
        setFirst(e.first);
        getList(e.page + 1, e.rows);

    };

    const onDelete = (id) => {
        setIsOpen(true);
        setUserToDelete(id);
    };

    const handleDelete = () => {
        dispatch(
            deleteUserAction(userToDelete, setLoading, (res) => {
                setUserToDelete("");
                setIsOpen(false);
                getList(page, rows);
            })
        );
    };

    const statusBodyTemplate = (status) => {
        return <span className={getStatusColors(status)}>{status}</span>;
    };

    const columns = [
        {
            accessor: "stripe_invoice_id",
            name: "Invoice ID",
            className: "invoice"
        },
        {
            accessor: "user.full_name",
            name: "User Name",
            body: (options) => (
                <span className="flex gap-3 align-items-center">
                    {options?.user?.full_name == "undefined" ? "Test" : options?.user?.full_name}
                </span>
            ),
        },
        {
            accessor: "user.email",
            name: "Email",
        },
        {
            accessor: "amount_paid",
            name: "Amount",
        },
        {
            accessor: "status",
            name: "Status",
            body: (options) => statusBodyTemplate(options?.status),
        },
    ];

    return (
        <>
            <CustomTable
                list={list}
                columns={columns}
                loading={loading}
                first={first}
                rows={rows}
                count={count}
                onPageChange={onPageChange}
                hideActions
                title={"Invoices"}
            />
            <CustomDeleteDialog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onDelete={handleDelete}
                loading={loading}
                itemName={"User"}
                label="Delete"
            />
        </>
    );
}
