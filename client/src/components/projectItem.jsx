import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';

const ProjectItem = ({label, image, rowCount, id}) => {
    const deleteProject = (id) => {
        //TODO
    }

    return(
        <div className="project_container">
            <div className="project_box">
                <img src={image} alt="Project image" className="project_image" />
                <div className="project_label">{label}</div>
                <div className="project_row_count">Rows: {rowCount}</div>
            </div>
            <IconButton variant="contained" onClick={() => deleteProject(id)}>
                <DeleteOutlinedIcon />
            </IconButton>
        </div>
    )
}

export default ProjectItem
