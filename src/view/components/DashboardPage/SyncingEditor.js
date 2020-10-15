import React, { useEffect, useMemo, useRef, useState } from "react";
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import Mitt from 'mitt'
import { Operation } from "slate";

const emitter = new Mitt();

const SyncingEditor = () => {
    const editor = useMemo(() => (withReact(createEditor())), []);
    const id = useRef(`${Date.now()}`)
    const remote = useRef(false);
    const currentEditor = useRef(null);
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])


    useEffect(() => {
        emitter.on('*', (_id, _operations) => {
            
            if(id.current !== _id) {
                console.log("change happened in other editor", _operations.length)
                remote.current = true;
                _operations.forEach(op => {
                    editor.apply(op)
                });
                remote.current = false;
            } 
        })
    })


  return (
    <Slate 
        editor={editor} 
        value={value} 
        onChange={value => {
            //console.log("onChange");
            setValue(value)
        
            console.log(editor.operations);
            console.log(editor.operations.length) 
            const filteredOperations = editor.operations.filter(
                    o => o.type !== "set_selection" &&
                        o.type !== "set_value"
            )
            if(filteredOperations.length != 0 && !remote.current){
                console.log("not 0")
                emitter.emit(id.current, filteredOperations)
            } else console.log("is 0")
        }}>
        <Editable
            onKeyDown={event => {
                   
                
                
                
            }}
        />
    </Slate>
  )
}


export default SyncingEditor