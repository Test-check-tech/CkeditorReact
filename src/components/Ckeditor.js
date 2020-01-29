import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
class CKeditor extends Component {
    render() {
        return (
            <div className="App">
                <h2>CKEditor 5 using a custom build - DecoupledEditor</h2>
                <CKEditor
                    onInit={ editor => {
                        this.editorData = this.ckeditor.serviceData;

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data="Welcome to Ckeditor 5"
                   
                />
            </div>
        );
    }
}

export default CKeditor;
