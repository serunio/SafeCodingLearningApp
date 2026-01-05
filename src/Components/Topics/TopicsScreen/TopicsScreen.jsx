import TopicPanel from "../TopicPanel/TopicPanel.jsx"
import styles from "./TopicsScreen.module.css"
import {exercises} from "../../../Utility/Exercises.js";
import TopBar from "../../TopBar/TopBar.jsx";

function TopicsScreen() {
    const topics = [...new Set(exercises.map(e => e.topic))]
    return (
        <>
            <TopBar/>
            <div className={styles.wrapper}>
                {
                    topics.map(e => (
                        <TopicPanel topic={e}/>
                    ))
                }
            </div>
        </>
    )
}

export default TopicsScreen