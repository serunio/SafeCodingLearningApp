import styles from "./TopBar.module.css"
import {Settings, SquareChartGantt, UserRound, Undo2, BookOpenText} from "lucide-react";
import Label from "../Label/Label.jsx";
import {IconLink} from "../Icon/IconButton/IconButton.jsx";
import {textConvert} from "../../Utility/textConvert.js";
import {IconComponent} from "../Icon/IconComponent.jsx";

function TopBar({topic, small}) {
    return <>
        <div className={`${styles.body} ${small ? styles.small : null}`}>
            <div className={styles.bar}>
                <div className={styles.menuButton}>
                    <IconComponent Icon={SquareChartGantt} className={styles.icon} style={{rotate: "180deg"}}/>
                    <Label text={'Menu'} size={'medium'} className={styles.label}/>
                </div>
                <div className={styles.settingsUserGroup}>
                    <IconComponent Icon={Settings} className={styles.icon}/>
                    <IconComponent Icon={UserRound} className={styles.icon}/>
                </div>
            </div>
            {topic != null ? (<div className={styles.underBar}>
                <IconLink Icon={Undo2} link={small ? `/menu/${topic}` : '/menu'} className={styles.icon}/>
                <Label text={textConvert(topic)} size={'medium'} weight={'bold'}/>
                <IconLink Icon={BookOpenText} link={small ? `/menu/${topic}` : '/menu'} className={styles.icon}/>
            </div>) : (<></>)}
        </div>
    </>
}


export default TopBar