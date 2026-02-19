import styles from "./CodingSpace.module.css"
import {useContext, useRef} from "react";
import {Editor as MonacoEditor} from "@monaco-editor/react"
import IconComponent from "../Icon/IconComponent.jsx";
import Label from "../Label/Label.jsx";
import icon from "../Icon/Icon.jsx";
import {tree} from "./files.js";
import {CodingSpaceContext} from "./CodingSpaceContext.js";

export function Editor() {
    const {
        selectedItems,
        setSelectedItems,
        fileName,
        setFileName,
        singleTab,
        setSingleTab,
        tabs,
        setTabs,
        treeRef
    } = useContext(CodingSpaceContext)
    const editorRef = useRef(null);
    const file = fileName !== null ? tree[fileName] : null;

    function selectFile(index) {
        if (index !== undefined) {
            treeRef.current.focusItem(index)
            treeRef.current.selectItems([index]);
        } else {
            setSelectedItems(null)
        }
    }

    function close(index) {
        if (index === singleTab?.index) {
            setSingleTab(null);
        }
        const newTabs = tabs.filter(i => i.index !== index)
        setTabs(newTabs)
        setFileName(newTabs[0]?.index?.toString())
        selectFile(newTabs[0]?.index?.toString())
    }

    return <>
        <div className={styles.code}>
            <NavBar setFileNameFunc={setFileName} activeFileName={fileName}/>
            {fileName !== undefined ?
                (<MonacoEditor
                    theme="vs-dark"
                    path={file?.index ?? ''}
                    defaultLanguage={file?.language}
                    defaultValue={file?.value}
                    onMount={(editor) => (editorRef.current = editor)}/>)
                : <div/>}
        </div>
    </>

    function NavBar() {

        return (
            <>
                <div className={styles.navBar}>
                    {
                        Object.values(tabs).map(e => (
                            <Tab status={fileName === e.index ? "selected" : "default"}
                                 fileIndex={e.index}
                                 fileName={e.data}/>
                        ))
                    }
                    {
                        singleTab !== null ? <Tab status={fileName === singleTab.index ? "selected" : "default"}
                                                  fileIndex={singleTab.index}
                                                  fileName={singleTab.data}
                                                  isSingle={true}/> : <></>
                    }
                </div>
            </>
        )
    }

    function Tab({fileName, fileIndex, status, isSingle = false}) {

        return (
            <>
                <div className={`${styles.tab} ${styles[status]} ${isSingle ? styles.single : ''}`} style={{}}>
                    <button
                        onClick={() => selectFile(fileIndex)}
                        className={styles.selectTabButton}
                    />
                    <div>
                        <Label text={fileName} size={'mini'}
                               className={`${styles.tabLabel} ${styles[status]} ${isSingle ? styles.single : ''}`}/>
                    </div>
                    <button
                        className={styles.closeTabButton}
                        onClick={() => close(fileIndex)}>
                        <IconComponent image={icon.x} className={styles.closeIcon}/>
                    </button>
                </div>

            </>
        )
    }
}

