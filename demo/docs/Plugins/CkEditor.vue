<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// export default {
//   name: "CkEditor",
//   data() {
//     return {
//       editor: ClassicEditor,
//       editorData: "<p>Content of the editor.</p>",
//       editorConfig: {
//         // The configuration of the editor.
//       },
//     };
//   },
// };
export default {
  name: "CkEditor",
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
};
</script>
