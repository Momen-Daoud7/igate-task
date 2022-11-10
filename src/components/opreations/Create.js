import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../store/features/projects";
import DataForm from "./DataForm";

const Create = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const submitHandler = async (values) => {
    console.log(values);
    await dispatch(createProject()).unwrap();
    nav("/projects");
  };
  return <DataForm submitHandler={submitHandler} />;
};

export default Create;
