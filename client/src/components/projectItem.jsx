import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import styles from "../styles/project_list.module.css";
//import {useTheme} from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


const ProjectItem = ({name, projectImage, counters, id}) => {
    const navigate = useNavigate();
    const deleteProject = (id) => {
        //TODO<IconButton variant="contained" onClick={() => deleteProject(id)}>
           //     <DeleteOutlinedIcon />
           // </IconButton>
    }

    const handleProjectClick = () => {
        navigate(`/counters/${id}`);  // Redirect to /counters/:id
    }
    //const c = '<img src={projectImage} alt="" className={styles.project_image} />'
    return(
        <div className={styles.project_container} >
            <div className={styles.project_box} onClick={handleProjectClick}>
                <p className={styles.project_label}>{name}</p>
                <p className={styles.project_row_count}>Rows: {counters[0]}</p>
            </div>
            
        </div>
    )
}

export default ProjectItem
