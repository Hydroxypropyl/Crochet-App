import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import styles from "../styles/project_list.module.css";
import {useTheme} from '@mui/material/styles';



const ProjectItem = ({name, projectImage, counters, id}) => {
    const deleteProject = (id) => {
        //TODO
    }
    const theme = useTheme();
    const c = '<img src={projectImage} alt="" className={styles.project_image} />'
    return(
        <div className={styles.project_container} >
            <div className={styles.project_box}>
                
                <div className={styles.project_label}>{name}</div>
                <div className={styles.project_row_count}>Rows: {counters[0]}</div>
            </div>
            <IconButton variant="contained" onClick={() => deleteProject(id)}>
                <DeleteOutlinedIcon />
            </IconButton>
        </div>
    )
}

export default ProjectItem
