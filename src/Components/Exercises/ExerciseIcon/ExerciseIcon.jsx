import styles from './ExerciseIcon.module.css'
import Label from "../../Label/Label.jsx";
import IconComponent from "../../Icon/IconComponent.jsx";
import Icon from "../../Icon/Icon.jsx"
import {useNavigate} from "react-router-dom";

function ExerciseIcon({exercise, activeExerciseState: {onUpdateActiveExercise, activeExercise}}) {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={ () => onUpdateActiveExercise(exercise)}
                    onDoubleClick={() => navigate(`/menu/${exercise.topic}/${exercise.num}`)}
                    className={`${styles.exercise} ${activeExercise === exercise ? styles.active : ''}` }>
                <div className={styles.background}/>
                <div className={`${styles.difficultyMarker} ${styles[exercise.difficulty]}`}></div>
                <IconComponent className={styles.icon} image={Icon[exercise.status]}/>
                <Label className={styles.label} text={exercise.num} size={"large"} weight={"bold"} />
            </button>
        </>
    )
}

export default ExerciseIcon