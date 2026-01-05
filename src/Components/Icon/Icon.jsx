import {
    BookOpenText,
    CircleCheckBig,
    Eye,
    NotebookPen,
    Pen,
    Play,
    RotateCcw,
    Undo2,
    SquareChartGantt,
    Settings,
    UserRound,
    XIcon
} from "lucide-react";

const Icon = {
    inProgress: ({...props}) => (<Pen {...props}/>),
    done: ({...props}) => (<CircleCheckBig {...props}/>),
    start: ({...props}) => (<Play {...props}/>),
    continue: ({...props}) => (<Play {...props}/>),
    restart: ({...props}) => (<RotateCcw {...props}/>),
    view: ({...props}) => (<Eye {...props}/>),
    book: ({...props}) => (<BookOpenText {...props}/>),
    exercise: ({...props}) => (<NotebookPen {...props}/>),
    undo: ({...props}) => (<Undo2 {...props}/>),
    menu: ({...props}) => (<SquareChartGantt {...props}/>),
    user: ({...props}) => (<UserRound {...props}/>),
    settings: ({...props}) => (<Settings {...props}/>),
    x: ({...props}) => (<XIcon {...props}/>),
    default: () => (<div/>)
}

export default Icon