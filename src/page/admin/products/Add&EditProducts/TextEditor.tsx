// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import dynamic from 'next/dynamic';
// const Editor = dynamic(() => import('./TextEditor'), { ssr: false });
interface props {
  value: string;
  onChange: (x:string) => void;
}
const TextEditor = ({ value, onChange }: props) => {
  return (
    // <CKEditor
    //   editor={ClassicEditor}
    //   data={value}
    //   onChange={(event, editor) => {
    //     const data = editor.getData();
    //     onChange(data);
    //   }}
    // />
    ""
  );
};

export default TextEditor;
