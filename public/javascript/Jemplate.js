Usage:

    jemplate --runtime [runtime-opt]

    jemplate --compile [compile-opt] <template-list>

    jemplate --runtime [runtime-opt] --compile [compile-opt] <template-list>

    jemplate --list <template-list>

Where "--runtime" and "runtime-opt" can include:

    --runtime           Equivalent to --ajax=ilinsky --json=json2
    --runtime=standard

    --runtime=lite      Same as --ajax=none --json=none
    --runtime=jquery    Same as --ajax=jquery --json=none
    --runtime=yui       Same as --ajax=yui --json=yui
    --runtime=legacy    Same as --ajax=gregory --json=json2

    --json              By itself, equivalent to --json=json2
    --json=json2        Include http://www.json.org/json2.js for parsing/stringifying
    --json=yui          Use YUI: YAHOO.lang.JSON (requires external YUI)
    --json=none         Doesn't provide any JSON functionality except a warning
    
    --ajax              By itself, equivalent to --ajax=xhr
    --ajax=jquery       Use jQuery for Ajax get and post (requires external jQuery)
    --ajax=yui          Use YUI: yui/connection/connection.js (requires external YUI)
    --ajax=xhr          Use XMLHttpRequest (will automatically use --xhr=ilinsky if --xhr is not set)
    --ajax=none         Doesn't provide any Ajax functionality except a warning

    --xhr               By itself, equivalent to --xhr=ilinsky
    --xhr=ilinsky       Include http://code.google.com/p/xmlhttprequest/
    --xhr=gregory       Include http://www.scss.com.au/family/andrew/webdesign/xmlhttprequest/

    --xxx               Include XXX and JJJ helper functions

    --compact           Use the YUICompressor compacted version of the runtime

Where "compile-opt" can include:

    --start-tag
    --end-tag
    --pre-chomp
    --post-chomp
    --trim
    --any-case
    --eval
    --noeval
    -s, --source

For more information use:
    perldoc jemplate
