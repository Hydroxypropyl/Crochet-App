import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import styles from "../styles/project_list.module.css";
import {useTheme} from '@mui/material/styles';



const ProjectItem = ({name, image, rowCount, id}) => {
    const deleteProject = (id) => {
        //TODO
    }
    const theme = useTheme();
    return(
        <div className={styles.project_container} >
            <div className={styles.project_box} style={{backgroundColor: theme.palette.lightBlue, borderColor: theme.palette.darkBlue,}}>
                <img src={image} alt="" className={styles.project_image} />
                <div className={styles.project_label}>{name}</div>
                <div className={styles.project_row_count}>Rows: {rowCount}</div>
            </div>
            <IconButton variant="contained" onClick={() => deleteProject(id)}>
                <DeleteOutlinedIcon />
            </IconButton>
        </div>
    )
}

export default ProjectItem
