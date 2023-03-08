var slugify = require('slugify');
var result = slugify("BUgün İstanbul için güneşli bir hava bekleniyor.", {
    lower:true,
    replacement: '*'
});

console.log(result);