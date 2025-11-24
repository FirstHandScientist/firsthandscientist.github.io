(TeX-add-style-hook
 "cv_Dong_zh"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "a4paper" "10pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("xcolor" "usenames" "dvipsnames") ("inputenc" "utf8") ("bibunits" "subsectionbib") ("ctex" "UTF8") ("tocbibind" "nottoc" "numbib")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art10"
    "setspace"
    "xcolor"
    "fullpage"
    "hyperref"
    "titlesec"
    "graphicx"
    "footnote"
    "inputenc"
    "longtable"
    "bibunits"
    "ctex"
    "textcomp"
    "tocbibind")
   (TeX-add-symbols
    "myname")
   (LaTeX-add-xcolor-definecolors
    "linkcolour"))
 :latex)

