import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProject, updateProject } from "../../store/features/projects";
import DataForm from "./DataForm";

const Edit = () => {
  const { id } = useParams();
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const nav = useNavigate();

  // Fetch the user with the id
  useEffect(() => {
    const display = async () => await dispatch(getProject(id)).unwrap();
    display();
  }, [dispatch, id]);

  const submitHandler = async (values) => {
    console.log(values);
    await dispatch(updateProject(id, values)).unwrap();
    nav("/projects");
  };
  console.log(projects);
  return (
    <>
      {projects[0] && (
        <DataForm savedValues={projects[0]} submitHandler={submitHandler} />
      )}
    </>
  );
};

export default Edit;
