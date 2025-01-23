import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCodeSSlashLine, RiEditBoxLine } from "react-icons/ri";
import SimpleInputField from "./SimpleInputField";
import { ErrorMessage } from "formik";

function CkEditorComponent({ onChange, editorLoaded, name, value, values ,errorMessage}) {
  const [isCodeEditor, setIsCodeEditor] = useState(true);

  const { t } = useTranslation("common");
  const [editor, setEditor] = useState(null);
  const customConfig = {
    toolbar: {
      items: ["bold", "italic", "|", "heading", "|", "link", "imageUpload", "|", "fontColor", "fontBackgroundColor"],
    },
  };

  useEffect(() => {
    import("@ckeditor/ckeditor5-react").then(({ CKEditor }) => {
      import("@ckeditor/ckeditor5-build-classic").then(({ default: ClassicEditor }) => {
        setEditor({ CKEditor, ClassicEditor });
      });
    });
  }, []);

  return (
    <div>
      {editorLoaded && editor ? (
        <>
          <div className="custom-editor editor-checkbox">
            <div className="form-check form-switch">
              <input onChange={() => setIsCodeEditor((prev) => !prev)} className="form-check-input" id="ckcheck" type="checkbox" name="isCodeEditor" />

              <label htmlFor="ckcheck" className="cursor-pointer">
                <span className="edit">
                  <RiEditBoxLine />
                </span>
                <span className="code">
                  <RiCodeSSlashLine />
                </span>
              </label>
            </div>

            <div className={isCodeEditor ? "d-none" : "d-block"}>
              {" "}
              <editor.CKEditor
                type=""
                name={name}
                editor={editor.ClassicEditor}
                config={customConfig}
                data={value}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  onChange(data);
                }}
              />
            </div>
            <div className={!isCodeEditor ? "d-none" : "d-block"}>
              {" "}
              <div className="editor-textarea">
                <div className="ckeditor-title">
                  <p>*Only accept html tags</p>
                </div>
                <SimpleInputField nameList={[{ notitle: "true", name: name, type: "textarea", rows: 3 }]} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>{t("Editorloading")}</div>
      )}
      { isCodeEditor && <ErrorMessage name={"description"} render={(msg) => <div className="invalid-feedback d-block">{t(errorMessage)}</div>} />}
    </div>
  );
}

export default CkEditorComponent;
