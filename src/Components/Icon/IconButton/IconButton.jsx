import styles from "./IconButton.module.css"
import {Link} from "react-router-dom";
import {IconComponent} from "../IconComponent.jsx"

export function IconButton ({link, Icon, className})
{
    return <>
        <Link to={link} className={`${className} ${styles.button}`}><IconComponent Icon={Icon} className={styles.icon}/></Link>
    </>
}
