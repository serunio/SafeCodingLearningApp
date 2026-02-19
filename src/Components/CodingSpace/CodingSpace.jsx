import React, {useState, useEffect, useRef} from "react";
import 'react-complex-tree/lib/style-modern.css';
import styles from './CodingSpace.module.css'
import TopBar from "../TopBar/TopBar.jsx";
import {useParams} from "react-router-dom";
import {Group, Panel} from "react-resizable-panels";
import {CodingSpaceContext} from "./CodingSpaceContext.js";
import {SidePanel} from "./SidePanel.jsx";
import {Editor} from "./Editor.jsx";

export function CodingSpace() {
    const treeRef = useRef(null)
    const [fileName, setFileName] = useState(undefined);
    const [tabs, setTabs] = useState([])
    const [singleTab, setSingleTab] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const {topic, id} = useParams()

    // useEffect(() => {
    //     editorRef.current?.focus();
    // }, [file?.name]);

    return (
        <>
            <CodingSpaceContext
                value={{
                    selectedItems,
                    setSelectedItems,
                    fileName,
                    setFileName,
                    singleTab,
                    setSingleTab,
                    tabs,
                    setTabs,
                    treeRef
                }}>
                <TopBar small={true} topic={topic}/>
                <section className={styles.pageBackground}>
                    <Group>
                        <SidePanel left/>
                        <Panel>
                            <Editor/>
                        </Panel>
                        <SidePanel right/>
                    </Group>
                </section>
            </CodingSpaceContext>
        </>
    );
}