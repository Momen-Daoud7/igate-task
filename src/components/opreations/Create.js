import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../store/features/projects";
import DataForm from "./DataForm";

const Create = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      nav("/login");
    }
  }, [nav, token]);

  const submitHandler = async (values) => {
    console.log(values);
    await dispatch(createProject(values)).unwrap();
    nav("/");
  };
  return <DataForm submitHandler={submitHandler} />;
};

export default Create;
