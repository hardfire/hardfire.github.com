/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={languages:{insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);Object.prototype.toString.call(e)==="[object Object]"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent.trim();if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data));l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r){return n.stringify(t.tokenize(e,r))},tokenize:function(e,n){var r=t.Token,i=[e],s=n.rest;if(s){for(var o in s)n[o]=s[o];delete n.rest}e:for(var o in n){if(!n.hasOwnProperty(o)||!n[o])continue;var u=n[o],a=u.inside,f=!!u.lookbehind||0;u=u.pattern||u;for(var l=0;l<i.length;l++){var c=i[l];if(i.length>e.length)break e;if(c instanceof r)continue;u.lastIndex=0;var h=u.exec(c);if(h){f&&(f=h[1].length);var p=h.index-1+f,h=h[0].slice(f),d=h.length,v=p+d,m=c.slice(0,p+1),g=c.slice(v+1),y=[l,1];m&&y.push(m);var b=new r(o,a?t.tokenize(h,a):h);y.push(b);g&&y.push(g);Array.prototype.splice.apply(i,y)}}}return i},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]"){for(var r=0;r<e.length;r++)e[r]=n.stringify(e[r]);return e.join("")}var i={type:e.type,content:n.stringify(e.content),tag:"span",classes:["token",e.type],attributes:{}};i.type=="comment"&&(i.attributes.spellcheck="true");t.hooks.run("wrap",i);var s="";for(var o in i.attributes)s+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();
Prism.languages.javascript={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0},keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,number:/\b-?(0x)?\d*\.?\d+\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});

Prism.languages.php = {
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},
	'deliminator': /(\?>|\?&gt;|&lt;\?php|<\?php|=&gt;|=>)/ig,
	'variable': /(\$\w+)\b/ig,
	'string': /("|')(\\?.)*?\1/g,
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
		lookbehind: true
	},
	'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|throw)\b/g,
	'function': /\b(abs|acos|acosh|addcslashes|addslashes|array_change_key_case|array_chunk|array_combine|array_count_values|array_diff|array_diff_assoc|array_diff_key|array_diff_uassoc|array_diff_ukey|array_fill|array_filter|array_flip|array_intersect|array_intersect_assoc|array_intersect_key|array_intersect_uassoc|array_intersect_ukey|array_key_exists|array_keys|array_map|array_merge|array_merge_recursive|array_multisort|array_pad|array_pop|array_product|array_push|array_rand|array_reduce|array_reverse|array_search|array_shift|array_slice|array_splice|array_sum|array_udiff|array_udiff_assoc|array_udiff_uassoc|array_uintersect|array_uintersect_assoc|array_uintersect_uassoc|array_unique|array_unshift|array_values|array_walk|array_walk_recursive|atan|atan2|atanh|base64_decode|base64_encode|base_convert|basename|bcadd|bccomp|bcdiv|bcmod|bcmul|bindec|bindtextdomain|bzclose|bzcompress|bzdecompress|bzerrno|bzerror|bzerrstr|bzflush|bzopen|bzread|bzwrite|ceil|chdir|checkdate|checkdnsrr|chgrp|chmod|chop|chown|chr|chroot|chunk_split|class_exists|closedir|closelog|copy|cos|cosh|count|count_chars|date|decbin|dechex|decoct|deg2rad|delete|ebcdic2ascii|echo|empty|end|ereg|ereg_replace|eregi|eregi_replace|error_log|error_reporting|escapeshellarg|escapeshellcmd|eval|exec|exit|exp|explode|extension_loaded|feof|fflush|fgetc|fgetcsv|fgets|fgetss|file_exists|file_get_contents|file_put_contents|fileatime|filectime|filegroup|fileinode|filemtime|fileowner|fileperms|filesize|filetype|floatval|flock|floor|flush|fmod|fnmatch|fopen|fpassthru|fprintf|fputcsv|fputs|fread|fscanf|fseek|fsockopen|fstat|ftell|ftok|getallheaders|getcwd|getdate|getenv|gethostbyaddr|gethostbyname|gethostbynamel|getimagesize|getlastmod|getmxrr|getmygid|getmyinode|getmypid|getmyuid|getopt|getprotobyname|getprotobynumber|getrandmax|getrusage|getservbyname|getservbyport|gettext|gettimeofday|gettype|glob|gmdate|gmmktime|ini_alter|ini_get|ini_get_all|ini_restore|ini_set|interface_exists|intval|ip2long|is_a|is_array|is_bool|is_callable|is_dir|is_double|is_executable|is_file|is_finite|is_float|is_infinite|is_int|is_integer|is_link|is_long|is_nan|is_null|is_numeric|is_object|is_readable|is_real|is_resource|is_scalar|is_soap_fault|is_string|is_subclass_of|is_uploaded_file|is_writable|is_writeable|mkdir|mktime|nl2br|parse_ini_file|parse_str|parse_url|passthru|pathinfo|readlink|realpath|rewind|rewinddir|rmdir|round|str_ireplace|str_pad|str_repeat|str_replace|str_rot13|str_shuffle|str_split|str_word_count|strcasecmp|strchr|strcmp|strcoll|strcspn|strftime|strip_tags|stripcslashes|stripos|stripslashes|stristr|strlen|strnatcasecmp|strnatcmp|strncasecmp|strncmp|strpbrk|strpos|strptime|strrchr|strrev|strripos|strrpos|strspn|strstr|strtok|strtolower|strtotime|strtoupper|strtr|strval|substr|substr_compare)\b/g,
	'constant': /\b(__FILE__|__LINE__|__METHOD__|__FUNCTION__|__CLASS__)\b/g,
	'boolean': /\b(true|false)\b/g,
	'number': /\b-?(0x)?\d*\.?\d+\b/g,
	'operator': /[-+]{1,2}|!|=?\<|=?\>;|={1,2}(?!>)|(\&){1,2}|\|?\||\?|\*|\//g,
	'punctuation': /[{}[\];(),.:]/g
};


// StyleFix 1.0.1 & PrefixFree 1.0.4 / by Lea Verou / MIT license
(function(){function h(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var b=window.StyleFix={link:function(a){try{if(!/\bstylesheet\b/i.test(a.rel)||!a.sheet.cssRules)return}catch(c){return}var d=a.href||a.getAttribute("data-href"),f=d.replace(/[^\/]+$/,""),g=a.parentNode,e=new XMLHttpRequest;e.open("GET",d);e.onreadystatechange=function(){if(4===e.readyState){var c=e.responseText;if(c&&a.parentNode){c=b.fix(c,!0,a);f&&(c=c.replace(/url\((?:'|")?(.+?)(?:'|")?\)/gi,
function(a,c){return!/^([a-z]{3,10}:|\/|#)/i.test(c)?'url("'+f+c+'")':a}),c=c.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+f,"gi"),"$1"));var d=document.createElement("style");d.textContent=c;d.media=a.media;d.disabled=a.disabled;d.setAttribute("data-href",a.getAttribute("href"));g.insertBefore(d,a);g.removeChild(a)}}};e.send(null);a.setAttribute("data-inprogress","")},styleElement:function(a){var c=a.disabled;a.textContent=b.fix(a.textContent,!0,a);a.disabled=c},styleAttribute:function(a){var c=
a.getAttribute("style"),c=b.fix(c,!1,a);a.setAttribute("style",c)},process:function(){h('link[rel~="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);h("style").forEach(StyleFix.styleElement);h("[style]").forEach(StyleFix.styleAttribute)},register:function(a,c){(b.fixers=b.fixers||[]).splice(void 0===c?b.fixers.length:c,0,a)},fix:function(a,c){for(var d=0;d<b.fixers.length;d++)a=b.fixers[d](a,c)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()}).replace("-",
"")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}};(function(){setTimeout(function(){h('link[rel~="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()}})();
(function(h){if(window.StyleFix&&window.getComputedStyle){var b=window.PrefixFree={prefixCSS:function(a,c){function d(c,d,f,g){c=b[c];c.length&&(c=RegExp(d+"("+c.join("|")+")"+f,"gi"),a=a.replace(c,g))}var f=b.prefix;d("functions","(\\s|:|,)","\\s*\\(","$1"+f+"$2(");d("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+f+"$2$3");d("properties","(^|\\{|\\s|;)","\\s*:","$1"+f+"$2:");if(b.properties.length){var g=RegExp("\\b("+b.properties.join("|")+")(?!:)","gi");d("valueProperties","\\b",":(.+?);",function(a){return a.replace(g,
f+"$1")})}c&&(d("selectors","","\\b",b.prefixSelector),d("atrules","@","\\b","@"+f+"$1"));return a=a.replace(RegExp("-"+f,"g"),"-")},prefixSelector:function(a){return a.replace(/^:{1,2}/,function(a){return a+b.prefix})},prefixProperty:function(a,c){var d=b.prefix+a;return c?StyleFix.camelCase(d):d}};(function(){var a={},c=[],d=getComputedStyle(document.documentElement,null),f=document.createElement("div").style,g=function(b){if("-"===b.charAt(0)){c.push(b);var b=b.split("-"),d=b[1];for(a[d]=++a[d]||
1;3<b.length;)b.pop(),d=b.join("-"),StyleFix.camelCase(d)in f&&-1===c.indexOf(d)&&c.push(d)}};if(0<d.length)for(var e=0;e<d.length;e++)g(d[e]);else for(var i in d)g(StyleFix.deCamelCase(i));var e=0,j,h;for(h in a)d=a[h],e<d&&(j=h,e=d);b.prefix="-"+j+"-";b.Prefix=StyleFix.camelCase(b.prefix);b.properties=[];for(e=0;e<c.length;e++)i=c[e],0===i.indexOf(b.prefix)&&(j=i.slice(b.prefix.length),StyleFix.camelCase(j)in f||b.properties.push(j));"Ms"==b.Prefix&&!("transform"in f)&&!("MsTransform"in f)&&"msTransform"in
f&&b.properties.push("transform","transform-origin");b.properties.sort()})();(function(){function a(a,b){f[b]="";f[b]=a;return!!f[b]}var c={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"}};c["repeating-linear-gradient"]=c["repeating-radial-gradient"]=c["radial-gradient"]=c["linear-gradient"];var d={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display"};
b.functions=[];b.keywords=[];var f=document.createElement("div").style,g;for(g in c){var e=c[g],i=e.property,e=g+"("+e.params+")";!a(e,i)&&a(b.prefix+e,i)&&b.functions.push(g)}for(var h in d)i=d[h],!a(h,i)&&a(b.prefix+h,i)&&b.keywords.push(h)})();(function(){function a(a){f.textContent=a+"{}";return!!f.sheet.cssRules.length}var c={":read-only":null,":read-write":null,":any-link":null,"::selection":null},d={keyframes:"name",viewport:null,document:'regexp(".")'};b.selectors=[];b.atrules=[];var f=h.appendChild(document.createElement("style")),
g;for(g in c){var e=g+(c[g]?"("+c[g]+")":"");!a(e)&&a(b.prefixSelector(e))&&b.selectors.push(g)}for(var i in d)e=i+" "+(d[i]||""),!a("@"+e)&&a("@"+b.prefix+e)&&b.atrules.push(i);h.removeChild(f)})();b.valueProperties=["transition","transition-property"];h.className+=" "+b.prefix;StyleFix.register(b.prefixCSS)}})(document.documentElement);

