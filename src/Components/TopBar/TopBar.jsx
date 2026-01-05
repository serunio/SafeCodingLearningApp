import styles from "./TopBar.module.css"
import {Settings, UserRound, Undo2, BookOpenText} from "lucide-react";
import Label from "../Label/Label.jsx";
import IconButton from "../Icon/IconButton/IconButton.jsx";
import Icon from "../Icon/Icon.jsx";
import {textConvert} from "../../Utility/textConvert.js";
import IconComponent from "../Icon/IconComponent.jsx";

function TopBar({topic, small}) {
    return <>
        <div className={`${styles.body} ${small ? styles.small : null}`}>
            <div className={styles.bar}>
                <div className={styles.menuButton}>
                    <IconComponent image={Icon.menu} className={styles.icon} style={{rotate: "180deg"}}/>
                    <Label text={'Menu'} size={'medium'} className={styles.label}/>
                </div>
                <div className={styles.settingsUserGroup}>
                    <IconComponent image={Icon.settings} className={styles.icon}/>
                    <IconComponent image={Icon.user} className={styles.icon}/>
                </div>
            </div>
            {topic != null ? (<div className={styles.underBar}>
                <IconButton image={Icon.undo} link={small ? `/menu/${topic}` : '/menu'} className={styles.icon}/>
                <Label text={textConvert(topic)} size={'medium'} weight={'bold'}/>
                <IconButton image={Icon.book} link={small ? `/menu/${topic}` : '/menu'} className={styles.icon}/>
            </div>) : (<></>)}

        </div>

    </>
}


export default TopBar