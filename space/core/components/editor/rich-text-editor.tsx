import React, { forwardRef } from "react";
// editor
import { EditorRefApi, IMentionHighlight, IRichTextEditor, RichTextEditorWithRef } from "@plane/editor";
// types
// helpers
import { cn } from "@/helpers/common.helper";
import { getEditorFileHandlers } from "@/helpers/editor.helper";

interface RichTextEditorWrapperProps extends Omit<IRichTextEditor, "fileHandler" | "mentionHandler"> {
  uploadFile: (file: File) => Promise<string>;
}

export const RichTextEditor = forwardRef<EditorRefApi, RichTextEditorWrapperProps>((props, ref) => {
  const { containerClassName, uploadFile, ...rest } = props;
  // store hooks

  // use-mention

  // file size

  return (
    <RichTextEditorWithRef
      mentionHandler={{
        highlights: function (): Promise<IMentionHighlight[]> {
          throw new Error("Function not implemented.");
        },
        suggestions: undefined,
      }}
      ref={ref}
      fileHandler={getEditorFileHandlers({
        uploadFile,
        workspaceId: "",
        anchor: "",
      })}
      {...rest}
      containerClassName={cn("relative pl-3 pb-3", containerClassName)}
    />
  );
});

RichTextEditor.displayName = "RichTextEditor";