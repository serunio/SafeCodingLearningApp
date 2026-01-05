import styles from "./IconButton.module.css"
import {BookOpenText} from "lucide-react";
import {Link} from "react-router-dom";
import IconComponent from "../IconComponent.jsx"
import Icon from "../Icon.jsx";

function IconButton ({link, image, className})
{
    return <>
        <Link to={link} className={`${className} ${styles.button}`}><IconComponent image={image} className={styles.icon}/></Link>
    </>
}

export default IconButton