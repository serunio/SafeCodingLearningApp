import {Panel} from "react-resizable-panels";
import React from "react";
import style from "./CodingSpace.module.css"
import {FileTree} from "./FileTree.jsx";
import {useParams} from "react-router-dom";
import {Instructions} from "./Instructions.jsx";
import IconButton from "../Icon/IconButton/IconButton.jsx";

export function SidePanel({left, right}) {

    const panel =
        (<Panel minSize={'5%'} maxSize={'30%'} defaultSize={'20%'} collapsible>
            {/*<FileTree/>*/}
            {right ?? <FileTree/>}
            {left ?? <></>}
        </Panel>)

    return <>
        {left ?? panel}
        <div className={style.sidebar}>
            <IconButton/>
        </div>
        {right ?? panel}
    </>
}