import React, { useState, useRef, useMemo, forwardRef } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false }); // Import JoditEditor dynamically with ssr: false



// const ReachTexsEditor = forwardRef(({ placeholder },ref) => {
//     const editor = useRef(null);
//     const [content, setContent] = useState('');

//     const config = useMemo(() => ({
//         readonly: false, // Ensure this is set to false if you want to allow editing
//         placeholder: placeholder || 'Start typing...',
//         // buttons: 'bold,italic,underline,strikethrough,source,indent',
//         buttons: 'bold,italic,underline,strikethrough,source,superscript,subscript',
//     }), [placeholder]);

//     return (
//         <JoditEditor
//             ref={editor}
//             value={content}
//             config={config}
//             tabIndex={1} // tabIndex of textarea
//             onBlur={newContent => setContent(newContent)} // Preferred to use only this option to update the content for performance reasons
//             onChange={newContent => setContent(newContent)} // Handle content changes
//         />
//     );
// });

// export default ReachTexsEditor;







const ReachTexsEditor = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false, // Ensure this is set to false if you want to allow editing
        placeholder: placeholder || 'Start typing...',
        // buttons: 'bold,italic,underline,strikethrough,source,indent',
        buttons: 'bold,italic,underline,strikethrough,source,superscript,subscript',
    }), [placeholder]);

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // Preferred to use only this option to update the content for performance reasons
            onChange={newContent => setContent(newContent)} // Handle content changes
        />
    );
};

export default ReachTexsEditor;
