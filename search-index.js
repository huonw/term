var searchIndex = {};
searchIndex['term'] = {"items":[[0,"","term","Terminal formatting library."],[1,"WriterWrapper","","A hack to work around the fact that `Box<Writer + Send>` does not\ncurrently implement `Writer`."],[2,"Attr","","Terminal attributes for use with term.attr()."],[12,"Bold","","Bold (or possibly bright) mode",0],[12,"Dim","","Dim mode, also called faint or half-bright. Often not supported",0],[12,"Italic","","Italics mode. Often not supported",0],[12,"Underline","","Underline mode",0],[12,"Blink","","Blink mode",0],[12,"Standout","","Standout mode. Often implemented as Reverse, sometimes coupled with Bold",0],[12,"Reverse","","Reverse mode, inverts the foreground and background colors",0],[12,"Secure","","Secure mode, also called invis mode. Hides the printed text",0],[12,"ForegroundColor","","Convenience attribute to set the foreground color",0],[12,"BackgroundColor","","Convenience attribute to set the background color",0],[3,"stdout","","Return a Terminal wrapping stdout, or None if a terminal couldn't be\nopened."],[3,"stderr","","Return a Terminal wrapping stderr, or None if a terminal couldn't be\nopened."],[0,"terminfo","","Terminfo database interface."],[1,"TermInfo","term::terminfo","A parsed terminfo database entry."],[11,"names","","Names for the terminal",1],[11,"bools","","Map of capability name to boolean value",1],[11,"numbers","","Map of capability name to numeric value",1],[11,"strings","","Map of capability name to raw (unexpanded) string",1],[1,"TerminfoTerminal","","A Terminal that knows how many colors it supports, with a reference to its\nparsed Terminfo database record."],[0,"searcher","","ncurses-compatible database discovery"],[3,"get_dbpath_for_term","term::terminfo::searcher","Return path to database entry for `term`"],[3,"open","","Return open file for `term`"],[0,"parser","term::terminfo","TermInfo format parsing.\nncurses-compatible compiled terminfo format parsing (term(5))"],[0,"compiled","term::terminfo::parser","ncurses-compatible compiled terminfo format parsing (term(5))"],[3,"parse","term::terminfo::parser::compiled","Parse a compiled terminfo entry, using long capability names if `longnames` is true"],[3,"msys_terminfo","","Create a dummy TermInfo struct for msys terminals"],[5,"boolfnames","",""],[5,"boolnames","",""],[5,"numfnames","",""],[5,"numnames","",""],[5,"stringfnames","",""],[5,"stringnames","",""],[0,"parm","term::terminfo","Parameterized string expansion"],[1,"Variables","term::terminfo::parm","Container for static and dynamic variable arrays"],[2,"Param","","Types of parameters a capability can use"],[12,"Words","","",2],[12,"Number","","",2],[3,"expand","","Expand a parameterized capability"],[10,"clone","","",2],[10,"new","","Return a new zero-initialized Variables",3],[10,"fmt","term::terminfo","",1],[10,"fg","","",4],[10,"bg","","",4],[10,"attr","","",4],[10,"supports_attr","","",4],[10,"reset","","",4],[10,"get_ref","","",4],[10,"get_mut","","",4],[10,"unwrap","","",4],[10,"new","","Returns `None` whenever the terminal cannot be created for some\nreason.",4],[10,"write","","",4],[10,"flush","","",4],[0,"color","term","Terminal color definitions"],[4,"Color","term::color","Number for a terminal color"],[18,"BLACK","",""],[18,"RED","",""],[18,"GREEN","",""],[18,"YELLOW","",""],[18,"BLUE","",""],[18,"MAGENTA","",""],[18,"CYAN","",""],[18,"WHITE","",""],[18,"BRIGHT_BLACK","",""],[18,"BRIGHT_RED","",""],[18,"BRIGHT_GREEN","",""],[18,"BRIGHT_YELLOW","",""],[18,"BRIGHT_BLUE","",""],[18,"BRIGHT_MAGENTA","",""],[18,"BRIGHT_CYAN","",""],[18,"BRIGHT_WHITE","",""],[6,"Terminal","term","A terminal with similar capabilities to an ANSI Terminal\n(foreground/background colors etc)."],[9,"fg","","Sets the foreground color to the given color.",5],[9,"bg","","Sets the background color to the given color.",5],[9,"attr","","Sets the given terminal attribute, if supported.  Returns `Ok(true)`\nif the attribute was supported, `Ok(false)` otherwise, and `Err(e)` if\nthere was an I/O error.",5],[9,"supports_attr","","Returns whether the given terminal attribute is supported.",5],[9,"reset","","Resets all terminal attributes and color to the default.\nReturns `Ok()`.",5],[9,"get_ref","","Gets an immutable reference to the stream inside",5],[9,"get_mut","","Gets a mutable reference to the stream inside",5],[6,"UnwrappableTerminal","","A terminal which can be unwrapped."],[9,"unwrap","","Returns the contained stream, destroying the `Terminal`",6],[10,"write","","",7],[10,"flush","","",7]],"paths":[[2,"Attr"],[1,"TermInfo"],[2,"Param"],[1,"Variables"],[1,"TerminfoTerminal"],[6,"Terminal"],[6,"UnwrappableTerminal"],[1,"WriterWrapper"]]};
searchIndex['log'] = {"items":[[0,"","log","Utilities for program-wide and customizable logging"],[1,"LogLevel","","Wraps the log level with fmt implementations."],[1,"LogRecord","","A LogRecord is created by the logging macros, and passed as the only\nargument to Loggers."],[11,"module_path","","The module path of where the LogRecord originated.",0],[11,"level","","The LogLevel of this record.",0],[11,"args","","The arguments from the log line.",0],[11,"file","","The file of where the LogRecord originated.",0],[11,"line","","The line number of where the LogRecord originated.",0],[3,"set_logger","","Replaces the task-local logger with the specified logger, returning the old\nlogger."],[0,"macros","","Logging macros"],[18,"MAX_LOG_LEVEL","","Maximum logging level of a module that can be specified. Common logging\nlevels are found in the DEBUG/INFO/WARN/ERROR constants."],[18,"DEBUG","","Debug log level"],[18,"INFO","","Info log level"],[18,"WARN","","Warn log level"],[18,"ERROR","","Error log level"],[6,"Logger","","A trait used to represent an interface to a task-local logger. Each task\ncan have its own custom logger which can respond to logging messages\nhowever it likes."],[9,"log","","Logs a single message described by the `record`.",1],[10,"partial_cmp","","",2],[10,"lt","","",2],[10,"le","","",2],[10,"gt","","",2],[10,"ge","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"fmt","","",2],[10,"fmt","","",0],[15,"log!","","The standard logging macro"],[15,"error!","","A convenience macro for logging at the error log level."],[15,"warn!","","A convenience macro for logging at the warning log level."],[15,"info!","","A convenience macro for logging at the info log level."],[15,"debug!","","A convenience macro for logging at the debug log level. This macro can also\nbe omitted at compile time by passing `--cfg ndebug` to the compiler. If\nthis option is not passed, then debug statements will be compiled."],[15,"log_enabled!","","A macro to test whether a log level is enabled for the current module."]],"paths":[[1,"LogRecord"],[6,"Logger"],[1,"LogLevel"]]};

searchIndex['regex'] = {"items":[[0,"","regex","This crate provides a native implementation of regular expressions that is\nheavily based on RE2 both in syntax and in implementation. Notably,\nbackreferences and arbitrary lookahead/lookbehind assertions are not\nprovided. In return, regular expression searching provided by this package\nhas excellent worst case performance. The specific syntax supported is\ndocumented further down."],[1,"Error","","Error corresponds to something that can go wrong while parsing\na regular expression."],[11,"pos","","The *approximate* character index of where the error occurred.",0],[11,"msg","","A message describing the error.",0],[1,"Captures","","Captures represents a group of captured strings for a single match."],[1,"SubCaptures","","An iterator over capture groups for a particular match of a regular\nexpression."],[1,"SubCapturesPos","","An iterator over capture group positions for a particular match of a\nregular expression."],[1,"FindCaptures","","An iterator that yields all non-overlapping capture groups matching a\nparticular regular expression."],[1,"FindMatches","","An iterator over all non-overlapping matches for a particular string."],[1,"NoExpand","","NoExpand indicates literal string replacement."],[1,"RegexSplits","","Yields all substrings delimited by a regular expression match."],[1,"RegexSplitsN","","Yields at most `N` substrings delimited by a regular expression match."],[2,"Regex","","A compiled regular expression"],[3,"quote","","Escapes all regular expression meta characters in `text`."],[3,"is_match","","Tests if the given regular expression matches somewhere in the text given."],[10,"fmt","","",0],[10,"clone","","",1],[10,"fmt","","Shows the original regular expression.",1],[10,"new","","Compiles a dynamic regular expression. Once compiled, it can be\nused repeatedly to search, split or replace text in a string.",1],[10,"is_match","","Returns true if and only if the regex matches the string given.",1],[10,"find","","Returns the start and end byte range of the leftmost-first match in\n`text`. If no match exists, then `None` is returned.",1],[10,"find_iter","","Returns an iterator for each successive non-overlapping match in\n`text`, returning the start and end byte indices with respect to\n`text`.",1],[10,"captures","","Returns the capture groups corresponding to the leftmost-first\nmatch in `text`. Capture group `0` always corresponds to the entire\nmatch. If no match is found, then `None` is returned.",1],[10,"captures_iter","","Returns an iterator over all the non-overlapping capture groups matched\nin `text`. This is operationally the same as `find_iter` (except it\nyields information about submatches).",1],[10,"split","","Returns an iterator of substrings of `text` delimited by a match\nof the regular expression.\nNamely, each element of the iterator corresponds to text that *isn't*\nmatched by the regular expression.",1],[10,"splitn","","Returns an iterator of at most `limit` substrings of `text` delimited\nby a match of the regular expression. (A `limit` of `0` will return no\nsubstrings.)\nNamely, each element of the iterator corresponds to text that *isn't*\nmatched by the regular expression.\nThe remainder of the string that is not split will be the last element\nin the iterator.",1],[10,"replace","","Replaces the leftmost-first match with the replacement provided.\nThe replacement can be a regular string (where `$N` and `$name` are\nexpanded to match capture groups) or a function that takes the matches'\n`Captures` and returns the replaced string.",1],[10,"replace_all","","Replaces all non-overlapping matches in `text` with the\nreplacement provided. This is the same as calling `replacen` with\n`limit` set to `0`.",1],[10,"replacen","","Replaces at most `limit` non-overlapping matches in `text` with the\nreplacement provided. If `limit` is 0, then all non-overlapping matches\nare replaced.",1],[10,"as_str","","Returns the original string of this regex.",1],[10,"reg_replace","","",2],[10,"next","","",3],[10,"next","","",4],[10,"pos","","Returns the start and end positions of the Nth capture group.\nReturns `None` if `i` is not a valid capture group or if the capture\ngroup did not match anything.\nThe positions returned are *always* byte indices with respect to the\noriginal string matched.",5],[10,"at","","Returns the matched string for the capture group `i`.  If `i` isn't\na valid capture group or didn't match anything, then `None` is\nreturned.",5],[10,"name","","Returns the matched string for the capture group named `name`.  If\n`name` isn't a valid capture group or didn't match anything, then\n`None` is returned.",5],[10,"iter","","Creates an iterator of all the capture groups in order of appearance\nin the regular expression.",5],[10,"iter_pos","","Creates an iterator of all the capture group positions in order of\nappearance in the regular expression. Positions are byte indices\nin terms of the original string matched.",5],[10,"expand","","Expands all instances of `$name` in `text` to the corresponding capture\ngroup `name`.",5],[10,"len","","Returns the number of captured groups.",5],[10,"is_empty","","Returns if there are no captured groups.",5],[10,"next","","",6],[10,"next","","",7],[10,"next","","",8],[10,"next","","",9],[6,"Replacer","","Replacer describes types that can be used to replace matches in a string."],[9,"reg_replace","","Returns a possibly owned string that is used to replace the match\ncorresponding to the `caps` capture group.",10]],"paths":[[1,"Error"],[2,"Regex"],[1,"NoExpand"],[1,"RegexSplits"],[1,"RegexSplitsN"],[1,"Captures"],[1,"SubCaptures"],[1,"SubCapturesPos"],[1,"FindCaptures"],[1,"FindMatches"],[6,"Replacer"]]};

initSearch(searchIndex);
