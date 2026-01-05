const indexHTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>reactapp</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
const AppJS = `import './App.css'

function App() {
    return <>
    </>
}

export default App
`
const AppCSS = `.grid {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 0;
}

.grid > div {
    margin: 10px;
}`
const LabelJS = `import styles from "./Label.module.css"

function Label({className, text, size, weight, color}) {
    return (
        <>
            <p className={\`\${styles.p} 
                           \${styles[size]} 
                           \${styles[weight]} 
                           \${styles[color]} 
                           \${className}\`}>
                {text}
            </p>
        </>
    )
}

export default Label`
const LabelCSS = `
.p {
    font-family: var(--main-font), sans-serif;
    color: var(--stroke-color);
    margin: 0;
}

    .p.mini {
        font-size: var(--font-mini);
        height: var(--font-mini);
    }

    .p.small {
        font-size: var(--font-small);
        height: var(--font-small);
    }

    .p.medium {
        font-size: var(--font-medium);
        height: var(--font-medium);
    }

    .p.large {
        font-size: var(--font-large);
        height: var(--font-large);
    }

    .p.bold {
        font-weight: bold;
    }

    .p.stroke {
        color: var(--stroke-color);
    }

    .p.strokeGray {
        color: var(--stroke-gray-color)
    }`
const TopicJS = `import styles from "./TopicPanel.module.css"
import Label from "../Label/Label.jsx";
import {BookOpenText} from "lucide-react";
import {NotebookPen} from "lucide-react"

function TopicPanel({topic}) {
    return (
        <>
            <div className={styles.component}>
                <div className={styles.header}>
                    <Label className={styles.title} size={"large"} text={topic.name}/>
                </div>
                <div className={styles.body}>
                    <div className={styles.iconsContainer}>
                        <BookOpenText className={styles.icon}/>
                        <NotebookPen className={styles.icon}/>
                    </div>
                    <div className={styles.progressBarContainer}>
                        <ProgresBar color={'theory'} completion={topic.theoryCompletion}/>
                        <ProgresBar color={'easy'} completion={topic.easyCompletion}/>
                        <ProgresBar color={'medium'} completion={topic.mediumCompletion}/>
                        <ProgresBar color={'hard'} completion={topic.hardCompletion}/>
                    </div>
                </div>
            </div>
        </>
    )
}

function ProgresBar({color, completion}) {

    const label = color.charAt(0).toUpperCase() + color.slice(1)
    const [done, all] = completion.split('/')
    const percentage = 100*done/all
    return (
        <>

            <div className={styles.progressBar}>
                <div className={styles.barTitle}><Label text={label} size={'small'}/></div>
                <div className={styles.barBackground}>
                    <div className={\`\${styles.barProgres} \${styles[color]}\`} style={{right: 100-percentage + '%'}}/>
                </div>
                <div className={styles.barNum}><Label text={completion} size={'small'}/></div>

            </div>

        </>
    )
}

export default TopicPanel`
const TopicCSS = `:root {
    --bar-height: 10px;
}

.header {
    background-color: var(--common-color);
    height: 25%;
    position: relative;
    /*z-index: -1;*/
    border-radius: 17px 17px 0 0;
    box-shadow: -4px 4px 4px -2px rgb(0,0,0,0.25) inset;
}

.body {
    background-color: var(--strong-color);
    height: 75%;
    position: relative;
    /*z-index: -1;*/
    overflow: hidden;
    box-shadow: -4px 0 4px -2px rgb(0,0,0,0.25) inset;
    border-radius: 0 0 17px 17px;
}

.component {
    width: 330px;
    height: 200px;
    /*box-shadow: -4px 4px 4px rgb(0,0,0,0.25) inset;*/
    border-radius: 17px;
    overflow: hidden;
    border-style: solid;
    border-color: rgb(0,0,0,0);
}

.iconsContainer {
    height: 100%;
    width: 30%;
    float: left;
}

.icon {

    border-style: solid;
    border-width: 4px;
    border-radius: 8px;
    padding: 2%;
    margin-top: 10%;
    color: var(--stroke-color);
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    height: 30%;
    width: auto;
}

.icon:hover {
    color: var(--stroke-gray-color);
    border-style: solid;
}

.progressBarContainer {
    float: left;
    width: 70%;
    height: 100%;
}

.progressBar {
    position: relative;
    height: 21%;
    width: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
}

.barBackground {
    position: relative;
    float: left;
    height: var(--bar-height);
    width: 76%;
    background-color: var(--stroke-color);
    border-radius: 20px;
    overflow: hidden;
    margin-top: 4px;
    margin-right: 1%;
}

.barProgres {
    height: 100%;
    border-radius: 200px;
    position: relative;
    overflow: hidden;
}
    .barProgres.easy {
        background-color: var(--easy-color);
    }
    .barProgres.hard {
        background-color: var(--hard-color);
    }
    .barProgres.medium {
        background-color: var(--medium-color);
    }
    .barProgres.theory {
        background-color: var(--theory-color);
    }

.barTitle {
    position: relative;
    width: 100%;
    float: left;
}

.barNum {
    position: relative;
    width: 23%;
    float: left;
}

.title {
    position:relative;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
}`




const files = [
    {
        path: 'root/index.html',
        language: "html",
        value: indexHTML
    },
    {
        path: 'root/src/App.jsx',
        language: "javascript",
        value: AppJS
    },
    {
        path: 'root/src/App.css',
        language: "css",
        value: AppCSS
    },
    {
        path: 'root/src/Components/Label/Label.jsx',
        language: "javascript",
        value: LabelJS
    },
    {
        path: 'root/src/Components/Label/Label.css',
        language: "css",
        value: LabelCSS
    },
    {
        path: 'root/src/Components/Topics/TopicPanel.jsx',
        language: "javascript",
        value: TopicJS
    },
    {
        path: 'root/src/Components/Topics/TopicPanel.css',
        language: "css",
        value: TopicCSS
    }
]

function makeTree(items) {
    let tree = {}
    for (let item of items) {
        let location = []
        const pathSeperated = item.path.split('/')
        const name = pathSeperated[pathSeperated.length - 1]
        for (let part of pathSeperated) {
            let parent = location.join('/')
            location.push(part)
            let locationString = location.join('/')
            if(!Object.prototype.hasOwnProperty.call(tree, locationString)) {
                tree[locationString] = {data: part, index: locationString, children: []}
                if(part === name) {
                    tree[locationString]['value'] = item.value
                    tree[locationString]['language'] = item.language
                }
                if(parent !== '')
                {
                    tree[parent].children.push(locationString)
                    tree[parent]['isFolder'] = true
                }
            }
        }
    }
    return tree
}

export let tree = makeTree(files)