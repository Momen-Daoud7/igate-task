import { Button } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  actions,
  deleteProject,
  getAllProjects,
} from "../../../store/features/projects";
import "./Table.css";

const Table = () => {
  const { projects, searchName } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  // Fetch projects
  useEffect(() => {
    const display = async () =>
      await dispatch(getAllProjects()).unwrap();
    display();
  }, [dispatch]);

  // Delete functionality
  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id)).unwrap();
  };

  // Search functionality
  const searchHanlder = async (e) => {
    e.preventDefault();
    console.log(searchName);
    await dispatch(getAllProjects(searchName)).unwrap();
    dispatch(actions.setSearchName(" "));
  };

  return (
    <div className="table">
      <div className="table__content">
        <div className="table__header">
          <h3>Data table</h3>
        </div>
        <div className="table__info">
          <h2>Table</h2>
          <div className="table__infoActions">
            <form
              className="table__infoActions__search"
              onSubmit={searchHanlder}
            >
              <div>
                <SearchOutlined />
              </div>
              <input
                placeholder="Search content header..."
                onChange={(e) =>
                  dispatch(actions.setSearchName(e.target.value))
                }
                value={searchName}
              />
            </form>
            <NavLink to="/create">Add new</NavLink>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.date}</td>
                <td>
                  <NavLink to={`/edit/${project.id}`} className="edit-btn">
                    Edit
                  </NavLink>
                </td>
                <td>
                  <Button
                    className="delete-btn"
                    onClick={() => deleteHandler(project.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
