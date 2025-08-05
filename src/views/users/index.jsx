import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../shared/component/CustomTable";
import { CustomDeleteDialog } from "../../shared/component/CustomDialog";
import { useLocation, useNavigate } from "react-router-dom";
// import PageTitleHeader from "../../shared/component/PageTitleHeader";
import {
  deleteUserAction,
  getUserListAction,
  // updateUserAction,
  updateUserActiveStatus,
} from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { setChild } from "../../store/slices/childSlice";
// import PrimaryButton from "../../shared/component/CustomButton";
// import { InputSwitch } from "primereact/inputswitch";
import { LoadingSwitch } from "../../shared/component/AllInputs";

export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // state managment
  const [visible, setVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState("");
  const [first, setFirst] = useState(0);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // get query  params or default
  const page = query.get("page") || 1;
  const rows = query.get("rows") || 10;

  // Redux state
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers(page, rows);
  }, []);

  useMemo(() => {
    setFirst(page * rows - rows);
  }, []);

  const fetchUsers = async (page, rows) => {
    dispatch(
      getUserListAction(page, rows, setLoading, (res) => {
        if (res?.success) {
          setUserList(res.data);
          setCount(res.count);
        }
      })
    );
  };

  const handleAddChild = () => {
    navigate("add");
  };

  const onPageChange = (e) => {
    navigate(`/users?page=${e.page + 1}&rows=${e.rows}`);
    setFirst(e.first);
    fetchUsers(e.page + 1, e.rows);

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
        fetchUsers(page, rows);
      })
    );
  };

  const handleSwitch = (id, setLoading) => {
    dispatch(
      updateUserActiveStatus(id, setLoading, (res) => {
        if (res?.success) {
          fetchUsers(page, rows);
        }
      })
    );
  };

  const columns = [
    {
      accessor: "full_name",
      name: "User Name",
      body: (options) => (
        <span className="flex gap-3 align-items-center">
          <img
            src={options?.image}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />{" "}
          {options?.full_name}
        </span>
      ),
    },
    {
      accessor: "email",
      name: "Email",
    },
    {
      accessor: "is_active",
      name: "Active",
      body: (options) => {
        const [loading, setLoading] = useState(false);
        return (
          <LoadingSwitch
            checked={options?.is_active}
            onChange={() => handleSwitch(options.id, setLoading)}
            loading={loading}
          />
        );
      },
    },
  ];

  return (
    <>
      {/* <div className="flex justify-content-end mb-3">
        <PrimaryButton
          label={"+ Add User"}
          extraClassNames="bg-dark-red"
          onClick={() => navigate("add")}
        />
      </div> */}
      <CustomTable
        list={userList}
        columns={columns}
        loading={loading}
        first={first}
        rows={rows}
        count={count}
        slice={setChild}
        // onView={(rowData) =>{
        //   navigate(`/children/view/${rowData?.id}`)
        // }}
        // onEdit={(rowData) => {
        //   navigate(`${rowData?.id}`);
        //   dispatch(setChild(rowData));
        // }}
        onDelete={onDelete}
        onPageChange={onPageChange}
        title={"Users"}
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
