function monaco_editor(lang,value) {
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        monaco.editor.defineTheme('monokai', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: '', foreground: 'f8f8f2', background: '272822' },
                { token: 'invalid', foreground: 'f92672' },
                { token: 'emphasis', fontStyle: 'italic' },
                { token: 'strong', fontStyle: 'bold' },
                { token: 'variable', foreground: 'f8f8f2' },
                { token: 'variable.predefined', foreground: 'fd971f' },
                { token: 'constant', foreground: 'ae81ff' },
                { token: 'comment', foreground: '75715e' },
                { token: 'number', foreground: 'ae81ff' },
                { token: 'number.hex', foreground: 'ae81ff' },
                { token: 'regexp', foreground: 'e6db74' },
                { token: 'annotation', foreground: 'd9f528' },
                { token: 'type', foreground: '66d9ef' },
                { token: 'delimiter', foreground: 'f8f8f2' },
                { token: 'delimiter.html', foreground: 'f8f8f2' },
                { token: 'tag', foreground: 'f92672' },
                { token: 'tag.id.jade', foreground: 'f8f8f2' },
                { token: 'tag.class.jade', foreground: 'f8f8f2' },
                { token: 'meta.scss', foreground: 'f8f8f2' },
                { token: 'meta.tag', foreground: 'f8f8f2' },
                { token: 'metatag', foreground: 'f8f8f2' },
                { token: 'metatag.content.html', foreground: 'e6db74' },
                { token: 'metatag.html', foreground: 'f92672' },
                { token: 'metatag.xml', foreground: 'f92672' },
                { token: 'attribute.name', foreground: 'a6e22e' },
                { token: 'attribute.value', foreground: 'e6db74' },
                { token: 'attribute.value.number', foreground: 'ae81ff' },
                { token: 'attribute.value.unit', foreground: 'ae81ff' },
                { token: 'attribute.value.html', foreground: 'e6db74' },
                { token: 'attribute.value.xml', foreground: 'e6db74' },
                { token: 'string', foreground: 'e6db74' },
                { token: 'keyword', foreground: '66d9ef' },
                { token: 'storage', foreground: '66d9ef' },
                { token: 'keyword.operator', foreground: 'f92672' },
                { token: 'operator.scss', foreground: 'f92672' },
                { token: 'operator.sql', foreground: 'f92672' },
                { token: 'operator.swift', foreground: 'f92672' },
                { token: 'operator', foreground: 'f92672' },
                { token: 'punctuation.definition.comment', foreground: '75715e' },
                { token: 'punctuation.definition.parameters', foreground: 'f8f8f2' },
                { token: 'punctuation.definition.string.begin', foreground: 'e6db74' },
                { token: 'punctuation.definition.string.end', foreground: 'e6db74' },
                { token: 'punctuation.definition.tag', foreground: 'f92672' },
                { token: 'punctuation.separator.key-value', foreground: 'f8f8f2' },
                { token: 'punctuation.separator.parameter', foreground: 'f8f8f2' },
                { token: 'punctuation.separator.statement', foreground: 'f8f8f2' },
                { token: 'punctuation.terminator.expression', foreground: 'f8f8f2' },
                { token: 'invalid.illegal', foreground: 'f8f8f2', background: 'f92672' },
                { token: 'source.json meta.structure.dictionary.json > string.quoted.json', foreground: '66d9ef' },
                { token: 'source.json meta.structure.dictionary.value.json > string.quoted.json', foreground: 'e6db74' },
                { token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json', foreground: 'e6db74' },
                { token: 'source.json meta.structure.dictionary.value.json > string.quoted.json', foreground: 'e6db74' }
            ],
            colors: {
                'editor.foreground': '#f8f8f2',
                'editor.background': '#272822',
                'editor.selectionBackground': '#49483e',
                'editor.lineHighlightBackground': '#3e3d32',
                'editorCursor.foreground': '#f8f8f0',
                'editorWhitespace.foreground': '#3b3a32',
                'editorIndentGuide.activeBackground': '#9d550fb0',
                'editor.selectionHighlightBorder': '#222218'
            }
        });

        monaco.editor.create(document.getElementById('editor-box'), {
            value: value,
            language: lang,
            theme: 'monokai', // Ya koi aur theme jo aap chahte hain
            automaticLayout: true,
            suggestOnTriggerCharacters: true, // Auto-suggestions on trigger characters like `.` etc.
            quickSuggestions: {
                other: true,
                comments: true,
                strings: true,
            },
            parameterHints: { enabled: true }, // Function parameter hints dikhane ke liye
            wordBasedSuggestions: true, // Existing words ke suggestions
            snippetSuggestions: 'top', // Boilerplate/snippet suggestions ko top par dikhana
            tabCompletion: 'on', // Tab completion ko enable karne ke liye
        });
    });
}
monaco_editor("html",`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hellow World!</h1>
</body>
</html>`);