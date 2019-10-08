var s = document.createElement("style")
s.type = "text/css"
s.innerHTML = 
`
::selection{
    background: red !important;
}
input{
    caret-color: #eeeeee !important;
}
#header{
    background-color: #383838 !important;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
}
#save_widget{
    color: #eeeeee;
}
.header-bar{
    background: #212121 !important;
}
#ipython_notebook img {
	filter: invert(100%);
}
.navbar-collapse.collapse{
    background-color: #2b2b2b !important;
}
.navbar-default .navbar-nav > li > a{
    color: #eeeeee !important;
}
.btn, #cell_type{
    background-color: #2b2b2b !important;
    border: 1px solid #000000;
    color: #eeeeee !important;
}
.input_area{
    background-color: #1e1e1e !important;
    border: 0px !important;
}
.CodeMirror{
    color: white !important;
}
#notebook{
    background-color: #2b2b2b;
}
#notebook-container{
    background-color: #383838;
    border: 1px solid #111111;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
}
.prompt.input_prompt{
    color: #eeeeee !important;
}
div.output_area pre {
	color: #d5d5d5 !important;
}
div.text_cell_render {
	color: #d5d5d5 !important;
}
code{
    background-color: #bbbbbb !important;
}
.cm-keyword{
    color: #f92672 !important;
}
.cm-variable{
    color: #f8f8f2 !important;
}
.cm-def{
    color: #fd971f !important;
}
.cm-variable-2{
    color: #9effff !important;
}
.cm-builtin{
    color: #66d9ef !important;
}
.cm-number{
    color: #ae81ff !important;
}
.cm-string{
    color: #e6db74 !important;
}
.cm-operator{
    color: #d5d5d5 !important;
}
.cm-property{
    color: #a6e22e !important;
}
.cm-comment{
    color: #afafae !important;
}

.modal-body{
    background-color: #383838 !important;
}
input[type="search"]{
    background-color: #1e1e1e !important;
    color: #eeeeee;
}
button[type="submit"]{
    filter: invert(100%);
    background-color: #111111;
}
.typeahead-list{
    background-color: #2b2b2b;
    color: #eeeeeee;
}
ul.typeahead-list > li > a{
    color: #eeeeee;
}
a[data-group="jupyter-notebook"]:hover{
    background-color: #1e1e1e !important;
    color: #cccccc !important;
}
`

document.body.after(s)