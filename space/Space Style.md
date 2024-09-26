```space-style
::-webkit-scrollbar {
	width: 15px;
	background: rgba(0, 0, 0, 0.15);
}

::-webkit-scrollbar-track {
	background: transparent;
	border-radius: 15px;
}

::-webkit-scrollbar-thumb {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
	background: hsla(0,0%,100%,.14);
} 

html {
  --main-font-family: 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
  --editor-font: 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
  --editor-font-size: 22px;
  --ui-accent-color: #29c0ed;
  --highlight-color: rgba(41, 192, 237, 0.2);
  --link-color: #29c0ed;
  --link-missing-color: #9e4705;
  --meta-color: #BE88FF;
  --meta-subtle-color: #838E4E;
  --subtle-color: #84D9F0;/
  --subtle-background-color: rgba(41, 192, 237, 0.2);
  --root-background-color: #20242D;
  --root-color: #CACACA;
  --top-color: #fff;
  --top-background-color: #20242D;
  --top-border-color: #20242D;
  --top-sync-error-color: var(--top-color);
  --top-sync-error-background-color: #622626;
  --top-saved-color: #29c0ed;
  --top-unsaved-color: #c7c7c7;
  --top-loading-color: #c7c7c7;
  --panel-background-color: #fff;
  --panel-border-color: #fff;
  --bhs-background-color: #fff;
  --bhs-border-color: #c1c1c1;
  --modal-color: #29c0ed;
  --modal-background-color: #20242D;
  --modal-border-color: #6c6c6c;
  --modal-header-label-color: var(--ui-accent-color);
  --modal-help-background-color: #000;
  --modal-help-color: #ccc;
  --modal-selected-option-background-color: var(--highlight-color);
  --modal-selected-option-color: #eee;
  --modal-hint-background-color: #212476;
  --modal-hint-color: #eee;
  --modal-description-color: #aaa;
  --notifications-background-color: #333;
  --notifications-border-color: #c5c5c5;
  --notification-info-background-color: #1b76bb;
  --notification-error-background-color: #a32121;
  --action-button-background-color: transparent;
  --action-button-color: #29c0ed;
  --action-button-hover-color: #adadad;
  --action-button-active-color: #adadad;
  --editor-caret-color: #4cffbc;
  --editor-selection-background-color: #d7e1f630;
  --editor-panels-bottom-color: #40BA66;
  --editor-panels-bottom-background-color: #1A1D22;
  --editor-panels-bottom-border-color: #3e3e3e;
  --editor-completion-detail-color: #555;
  --editor-completion-detail-selected-color: #d2d2d2;
  --editor-list-bullet-color: #969696;
  --editor-heading-color: var(--ui-accent-color);
  --editor-heading-meta-color: var(--ui-accent-color);
  --editor-hashtag-background-color: #004bbb;
  --editor-hashtag-color: #e2e9ff;
  --editor-hashtag-border-color: #007bff6b;
  --editor-ruler-color: #4c4b4b;
  --editor-naked-url-color: var(--link-color);
  --editor-link-color: var(--link-color);
  --editor-link-url-color: var(--link-color);
  --editor-link-meta-color: var(--meta-subtle-color);
  --editor-wiki-link-page-background-color: #a3bce712;
  --editor-wiki-link-page-color: var(--link-color);
  --editor-wiki-link-page-missing-color: var(--link-missing-color);
  --editor-wiki-link-color: #8f96c2;
  --editor-width: 1100px !important;
  --editor-named-anchor-color: var(--meta-subtle-color);
  --editor-command-button-color: #fff;
  --editor-command-button-background-color: #555;
  --editor-command-button-hover-background-color: #777;
  --editor-command-button-meta-color: var(--meta-subtle-color);
  --editor-command-button-border-color: #666;
  --editor-line-meta-color: var(--meta-subtle-color);
  --editor-meta-color: var(--meta-color);
  --editor-table-head-background-color: rgba(41,192,237,0.5);
  --editor-table-head-color: #eee;
  --editor-table-even-background-color: rgba(41,192,237,0.5);
  --editor-blockquote-background-color: var(--subtle-background-color);
  --editor-blockquote-color: var(--subtle-color);
  --editor-blockquote-border-color: #4a4a4a;
  --editor-code-background-color: var(--subtle-background-color);
  --editor-struct-color: #B40F12;
  --editor-highlight-background-color: var(--highlight-color);
  --editor-code-comment-color: var(--meta-subtle-color);
  --editor-code-variable-color: #41a3ce;
  --editor-code-typename-color: #98C379;
  --editor-code-string-color: #986db9;
  --editor-code-number-color: #986db9;
  --editor-code-info-color: var(--subtle-color);
  --editor-code-atom-color: #61AFEF;
  --editor-admonition-note-border-color: #00b8d4;
  --editor-admonition-note-background-color: rgba(0, 184, 212, 0.2);
  --editor-admonition-warning-border-color: #ff9100;
  --editor-admonition-warning-background-color: rgba(255, 145, 0, 0.2);
  --editor-frontmatter-background-color: rgba(41, 40, 35, 0.5);
  --editor-frontmatter-color: var(--subtle-color);
  --editor-frontmatter-marker-color: #fff;
  --editor-widget-background-color: rgba(41, 192, 237, 0.2);
  --editor-task-marker-color: var(--subtle-color);
}

#sb-main .cm-textfield {
  background-color: #181A1B;
}

#sb-main .cm-button {
  background-image: linear-gradient(rgb(42, 46, 47), rgb(44, 47, 49));
}

#sb-main ::-webkit-scrollbar {
    background-color: #202324;
    color: #aba499;
}

@font-face {
    font-family: 'Segoe UI Web';
    font-display: swap;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    src: local('Segoe UI'), local('Helvetica'), local('Arial');
}

#sb-main .cm-editor {
   font-family: var(--editor-font) !important;
   font-size: var(--editor-font-size) !important;
   line-height: 2.0 !important; 
   height: 100% !important;
}

#sb-main .cm-editor.cm-focused {
   font-family: var(--editor-font) !important;
   font-size: var(--editor-font-size) !important;
   height: 100% !important;
}

.space-style #sb-main .cm-editor .sb-markdown-top-widget h1, 
.space-style #sb-main .cm-editor .sb-markdown-bottom-widget h1 {
  margin: 0 0 5px 0;
  padding: 10px !important;
  background-color: rgba(162, 75, 75, 0.5); 
  font-size: 1.2em;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto; 
}

!.no-frontmatter .sb-frontmatter {
    display: none;
}

.center-h .sb-line-h1, 
.center-h .sb-line-h2, 
.center-h .sb-line-h3, 
.center-h .sb-line-h4, 
.center-h .sb-line-h5, 
.center-h .sb-line-h6 {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  #sb-top .sb-actions {
    position: fixed;
    bottom: 0;
    left: 0;
    padding-left: 4px;
    background: #20242D;
    width: 120vw;
    overflow-x: auto;
    box-shadow: 0px 4px 8px black;
  }
  .sb-actions button svg {
    height: 2.5rem;
    width: 2.5rem;
    margin: 0.7rem 0;
    color: #29c0ed;
  }
}
```