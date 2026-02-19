import {useContext, useRef, useState} from "react";
import {CodingSpaceContext} from "./CodingSpaceContext.js";
import {ControlledTreeEnvironment, InteractionMode, Tree} from "react-complex-tree";
import styles from "./CodingSpace.module.css"
import {tree} from "./files.js";

export function FileTree() {
    const treeEnvRef = useRef(null);
    const [expandedItems, setExpandedItems] = useState([]);
    const [focusedItem, setFocusedItem] = useState('root');
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

    function focusItem(item) {
        console.log(`focus: ${item.index}`)
        setFocusedItem(item.index)
        if (item.isFolder) {
            console.log('folder')
            return
        }

        if (tabs.includes(item)) {
            primaryAction(item)
            return
        }
        setSingleTab(item)
        setFileName(item.index.toString())
    }

    function primaryAction(item) {
        console.log(`primary: ${item.index}`)
        if (!tabs.includes(item))
            setTabs([...tabs, item])
        if (singleTab === item)
            setSingleTab(null)
        setFileName(item.index.toString())
    }
    return <>
        <div className={styles.tree}>
            <ControlledTreeEnvironment
                getItemTitle={item => item.data}
                viewState={{
                    ['tree-2']: {
                        focusedItem,
                        expandedItems,
                        selectedItems,
                    },
                }}
                defaultInteractionMode={InteractionMode.DoubleClickItemToExpand}
                canDragAndDrop={false}
                canDropOnFolder={false}
                canReorderItems={false}
                disableMultiselect={true}
                onSelectItems={items => setSelectedItems(items)}
                onFocusItem={(item) => focusItem(item)}
                onPrimaryAction={(item) => primaryAction(item)}
                onExpandItem={item => setExpandedItems([...expandedItems, item.index])}
                onCollapseItem={item =>
                    setExpandedItems(expandedItems.filter(expandedItemIndex => expandedItemIndex !== item.index))
                }
                ref={treeEnvRef}
                items={tree}>
                <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" ref={treeRef}/>
            </ControlledTreeEnvironment>
        </div>
    </>
}