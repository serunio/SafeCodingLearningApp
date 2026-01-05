import React, {useState, useEffect, useRef} from "react";
import {Editor} from "@monaco-editor/react";
import {UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider, InteractionMode} from 'react-complex-tree';
import 'react-complex-tree/lib/style-modern.css';
import styles from './CodingSpace.module.css'
import {tree} from "./files.js";
import TopBar from "../TopBar/TopBar.jsx";
import {useParams} from "react-router-dom";
import IconComponent from "../Icon/IconComponent.jsx";
import icon from "../Icon/Icon.jsx";
import Label from "../Label/Label.jsx";

function CodingSpace() {

    const editorRef = useRef(null);
    const treeEnvRef = useRef(null);
    const [fileName, setFileName] = useState('root');
    const [tabs, setTabs] = useState([])
    const [singleTab, setSingleTab] = useState(null);

    const file = tree[fileName];

    const {topic, id} = useParams()

    useEffect(() => {
        editorRef.current?.focus();
    }, [file.name]);

    function primaryAction(item) {
        if (!tabs.includes(item))
            setTabs([...tabs, item])
        if (singleTab === item)
            setSingleTab(null)
        setFileName(item.index.toString())
    }

    function focusItem(item) {
        if (item.isFolder)
            return
        if (tabs.includes(item)) {
            primaryAction(item)
            return
        }
        setSingleTab(item)
        setFileName(item.index.toString())
    }

    function close(index) {
        if (index === singleTab?.index) {
            setSingleTab(null);
            return;
        }
        setTabs(tabs.filter(i => i.index !== index))
    }

    const dataProvider =
        new StaticTreeDataProvider(tree, (item, newName) => ({
            ...item, data: newName
        }));

    return (
        <><TopBar small={true} topic={topic}/>
            <section className={styles.pageBackground}>
                <div className={styles.tree}>
                    <UncontrolledTreeEnvironment
                        dataProvider={dataProvider}
                        getItemTitle={item => item.data}
                        viewState={{}}
                        defaultInteractionMode={InteractionMode.DoubleClickItemToExpand}
                        canDragAndDrop={false}
                        canDropOnFolder={false}
                        canReorderItems={false}
                        disableMultiselect={true}
                        // onSelectItems={(i) => console.log(`select: ${i}}`)}
                        onFocusItem={(item) => focusItem(item)}
                        onPrimaryAction={(item) => primaryAction(item)}
                        ref={treeEnvRef}
                    >
                        <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example"/>
                    </UncontrolledTreeEnvironment>
                </div>

                <div className={styles.code}>
                    <NavBar setFileNameFunc={setFileName} activeFileName={fileName}/>
                    <Editor
                        theme="vs-dark"
                        path={file.index}
                        defaultLanguage={file.language}
                        defaultValue={file.value}
                        onMount={(editor) => (editorRef.current = editor)}/>
                </div>
            </section>
        </>

    );

    function NavBar() {

        return (
            <>
                <div className={styles.navBar}>
                    {
                        Object.values(tabs).map(e => (
                            <Tab status={fileName === e.index ? "selected" : "default"}
                                 fileIndex={e.index}
                                 fileName={e.data}
                                 setFileNameFunc={setFileName}/>
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
                        className={styles.selectTabButton}
                        onClick={() => setFileName(fileIndex)}>
                        <Label text={fileName} size={'mini'} className={styles.tabLabel}/>
                    </button>

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

export default CodingSpace