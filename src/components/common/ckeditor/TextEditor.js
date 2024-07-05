import Editor from 'ckeditor5-custom-build/build/ckeditor'
import {CKEditor} from "@ckeditor/ckeditor5-react";

function TextEditor({setData}){
    const configuration = {
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'outdent',
                    'indent',
                    '|',
                    'imageUpload',
                    'insertTable',
                    'mediaEmbed',
                    'blockQuote',
                    'undo',
                    'redo'
                ]
            },
            language: 'ko',
            image: {
                toolbar: [
                    'imageTextAlternative',
                    'toggleImageCaption',
                    'imageStyle:inline',
                    'imageStyle:block',
                    'imageStyle:side'
                ]
            },
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                ]
            }
    }

    return (
        <CKEditor editor={Editor}
                  config={configuration}
                  data="<p>내용을 입력해주세요.</p>"
                  onChange={(event,editor) =>{
                      setData(editor.getData()); // 작성 내용 저장
                  }}
        />
    )
}

export default TextEditor