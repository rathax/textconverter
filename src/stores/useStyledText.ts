function getWholeChar(_0x3d03x13: any, _0x3d03x14: any) {
    const _0x3d03x15 = _0x3d03x13['charCodeAt'](_0x3d03x14);
    if (Number['isNaN'](_0x3d03x15)) {
        return ''
    };
    if (_0x3d03x15 < 0xD800 || _0x3d03x15 > 0xDFFF) {
        return _0x3d03x13['charAt'](_0x3d03x14)
    };
    if (0xD800 <= _0x3d03x15 && _0x3d03x15 <= 0xDBFF) {
        if (_0x3d03x13['length'] <= (_0x3d03x14 + 1)) {
            throw 'High surrogate without following low surrogate'
        };
        const _0x3d03x16 = _0x3d03x13['charCodeAt'](_0x3d03x14 + 1);
        if (0xDC00 > _0x3d03x16 || _0x3d03x16 > 0xDFFF) {
            throw 'High surrogate without following low surrogate'
        };
        return _0x3d03x13['charAt'](_0x3d03x14) + _0x3d03x13['charAt'](_0x3d03x14 + 1)
    };
    if (_0x3d03x14 === 0) {
        throw 'Low surrogate without preceding high surrogate'
    };
    const _0x3d03x17 = _0x3d03x13['charCodeAt'](_0x3d03x14 - 1);
    if (0xD800 > _0x3d03x17 || _0x3d03x17 > 0xDBFF) {
        throw 'Low surrogate without preceding high surrogate'
    };
    return false
}


function createFancyStyleText() {
    const fancy_styles: any = {};
    fancy_styles['fancyStyle1'] = '\u03B1\u0432c\u2202\u03B5\u0493g\u043D\u03B9\u05E0\u043A\u2113\u043C\u03B7\u03C3\u03C1q\u044Fs\u0442\u03C5v\u03C9x\u04AFz';
    fancy_styles['fancyStyle2'] = '\u5342\u4E43\u531A\u15EA\u4E47\u5343\u13B6\u5344\u4E28\uFF8C\u049C\u3125\u722A\u51E0\u3116\u5369\u024A\u5C3A\u4E02\u3112\u3129\u142F\u5C71\u4E42\u311A\u4E59';
    fancy_styles['fancyStyle3'] = '\u0102\u03B2\u010C\u010E\u0114\u0166\u011E\u0124\u0128\u0134\u0136\u0139\u041C\u0143\u0150\u0420Q\u0154\u015A\u0164\xDAV\u0174\u0416\u0176\u0179';
    fancy_styles['fancyStyle4'] = '\u13AAb\u13DF\u13A0\u13ACf\u13B6h\u13A5j\u13E6\u13DEm\u13C1\u13BE\u13E2q\u13D2s\u13C6u\u13C9\u13B3x\u13BD\u13C3';
    fancy_styles['fancyStyle5'] = '\u13D7\u13F0\u1348\u13B4\u13CB\u13A6\u13B6\u13C2\u13A5\u13E0\u13E6\u13DD\u13B7\u13C1\u13A7\u13AE\u13A4\u13D2\u13D5\u13D6\u13EC\u13C9\u13C7\u1300\u13A9\u135A';
    fancy_styles['fancyStyle6'] = '\u0250q\u0254p\u01DD\u025F\u0183\u0265!\u027E\u029E\u05DF\u026Fuodb\u0279s\u0287n\u028C\u028Dx\u028Ez';
    fancy_styles['fancyStyle7'] = '\u0394\u03B2\u0106\u0110\u20AC\u20A3\u01E4\u0126\u0197\u0134\u049C\u0141\u039C\u0147\xD8\u01A4\u03A9\u0158\u015E\u0166\u1EEEV\u0174\u0416\xA5\u017D';
    fancy_styles['fancyStyle8'] = '\u03B1\u0253\u0AEE\u2202\u03B5\u0192\u0260\u0266\u0E40\u029D\u04A1\u2113\u0271\u0273\u03C3\u03C1\u03C6\u0AE8\u0E23\u01AD\xB5\u0475\u03C9\u05D0\u10E7\u01B6';
    fancy_styles['fancyStyle9'] = '\u15E9\u15F7\u1455\u15EA\u15F4\u15B4\u01E4\u157C\u13A5\u148E\u16D5\u14AA\u15F0\u144E\u15DD\u146D\u024A\u1587\u1515\u4E05\u144C\u142F\u15EF\u166D\u01B3\u4E59';
    fancy_styles['fancyStyle10'] = '\u0E04\u0E52\u03C2\u0E54\u0454\u0166\uFEEE\u0452\u0E40\u05DF\u043Al\u0E53\u0E20\u0E4F\u05E7\u1EE3\u0433\u0E23t\u0E22\u05E9\u0E2C\u05E5\u05D0z';
    fancy_styles['fancyStyle11'] = 'a\u0432cde\u0493g\u043D\u03B9j\u0138l\u043Cnopqr\u0455\u0442\u03C5vw\u0445yz';
    fancy_styles['fancyStyle12'] = '\uD83C\uDDE6\u200B\uD83C\uDDE7\u200B\uD83C\uDDE8\u200B\uD83C\uDDE9\u200B\uD83C\uDDEA\u200B\uD83C\uDDEB\u200B\uD83C\uDDEC\u200B\uD83C\uDDED\u200B\uD83C\uDDEE\u200B\uD83C\uDDEF\u200B\uD83C\uDDF0\u200B\uD83C\uDDF1\u200B\uD83C\uDDF2\u200B\uD83C\uDDF3\u200B\uD83C\uDDF4\u200B\uD83C\uDDF5\u200B\uD83C\uDDF6\u200B\uD83C\uDDF7\u200B\uD83C\uDDF8\u200B\uD83C\uDDF9\u200B\uD83C\uDDFA\u200B\uD83C\uDDFB\u200B\uD83C\uDDFC\u200B\uD83C\uDDFD\u200B\uD83C\uDDFE\u200B\uD83C\uDDFF\u200B';
    fancy_styles['fancyStyle13'] = '\xE5\u03B2\xE7\u010F\xA3\u0192\u011F\u021F\u020Bj\u0137\u023D\u0271\xF1\xA4\u05E7\u01ED\u0211\xA7\u021B\u0265\u221A\u03A8\xD7\xFF\u017E';
    fancy_styles['fancyStyle14'] = '\u0105\u03B2\u023C\u010F\u20AC\u0192\u01E5h\u0268j\u040C\u2113\u028D\u0272\u0E4F\u03C1\u01ED\u044F$\u0163\xB5\u02C5\u03CE\u0436\xA5\u01B6';
    fancy_styles['fancyStyle15'] = '\u10DB\u10E9\u10D4\u10EB\u10DEf\u10EAh\u1F36\u10E5\u03BAl\u10DD\u1FC6\xF5\u03C1\u10D2\u0393\u10F0\u0F53\u03C5\u1F57w\u10EF\u10E7\u0240';
    fancy_styles['fancyStyle16'] = '\xC3\u03B2\u010C\u010E\u1EB8\u0191\u011E\u0124\u012E\u0134\u040C\u0139\u03FB\u0147\u1ED6\u01A4\u01EA\u0158\u015C\u0164\u01D7\u03CB\u0174\u0416\u040E\u017B';
    fancy_styles['fancyStyle17'] = '\u15C5\u1658\u1464\u15EB\u164D\u15B4\u161C\u157C\u14FF\u1499\u15BD\u1438\u14AA\u1662\u1609\u14CE\u157F\u1574\u1587S\u15B6\u1457\u143B\u164E\u166D\u15BB\u1663';
    fancy_styles['fancyStyle18'] = 'a\u0432cde\u0493g\u043D\u03B9j\u0138l\u043Cnopqr\u0455\u0442\u03C5vw\u0445yz';
    fancy_styles['fancyStyle19'] = '\u03B1\u0432cd\u0454fgh\xEDjklmn\u03C3pqr\u0455tuvw\u0445\u0447z';
    fancy_styles['fancyStyle20'] = '\u03AC\u0432\u03C2\u0221\u03AD\u0493\u0123\u0127\u03AF\u0458\u0137\u013B\u043C\u03AE\u03CC\u03C1q\u0155\u015F\u0163\xF9\u03BD\u03CEx\u0447\u017E';
    fancy_styles['fancyStyle21'] = '\uA2EB\uA0C3\uA3F8\uA055\uA35F\uA118\uA04D\uA45B\uA091\uA02D\uA017\uA492\uA052\uA079\uA182\uA263\uA078\uA493\uA31A\uA4C5\uA407\uA3DD\uA150\uA1D3\uA41F\uA074';
    fancy_styles['fancyStyle22'] = '\u0414\u13F0\u2102\u2202\u018E\u0192\u13B6\u210D\xEE\u029D\u0198\u2113\u2133\u0418\xF8\u03C1\u01EA\u042F\u01A7\u271E\u03C5\u03D1\u13D4\u2718\u0423\u0540';
    fancy_styles['fancyStyle23'] = '\u0414\u0411CD\u039EFGHIJ\u049CLM\u0418\u0424P\u01EA\u042FS\u0393\u0426V\u0429\u0416\u0423Z';
    fancy_styles['fancyStyle24'] = '\u01DF\u026E\u0188\u0256\u025B\u0284\u0262\u0266\u0268\u029D\u13E6\u029F\u028D\u057C\u0585\u0584\u0566\u0280\u0586\u13C6\u028A\u028B\u0561x\u028F\u0290';
    fancy_styles['fancyStyle25'] = '\u0251\u048D\u03F2\u056A\u04BD\u0192\u0581\u0570\xED\u0575\u0198\u04C0\u028D\u0572\u0585\u0539\u0566\u027E\u054F\u0535\u0574\u0475\u0561\xD7\u057E\u0540';
    fancy_styles['fancyStyle26'] = '\uA34F\uA303\uA253\uA038\uA35F\uA387\uA045\uA0C5\uA024\uA02D\uA018\uA492\uA0B5\uA224\uA0A6\uA263\uA1B0\uA2EA\uA317\uA4C4\uA00E\uA0F4\uA14F\uA2BC\uA329\uA074';
    fancy_styles['fancyStyle27'] = '\u1D2C\u1D2E\u1D9C\u1D30\u1D31\u1DA0\u1D33\u1D34\u1D35\u1D36\u1D37\u1D38\u1D39\u1D3A\u1D3C\u1D3E\u1D5F\u1D3F\u02E2\u1D40\u1D41\u1D5B\u1D42\u02E3\u1D5E\u1DBB';
    fancy_styles['fancyStyle28'] = '\uA2EC\uA0F3\uA254\uA4AF\uA3C2\uA2B0\uA34C\uA05D\uA490\uA4BB\uA018\uA492\uA0B5\uA2CA\uA132\uA263\uA1B0\uA2EA\uA1D9\uA4C4\uA4A4\uA4A6\uA150\uA267\uA326\uA074';
    fancy_styles['fancyStyle29'] = '\u039B\u03E6\u3108\xD0\u0190F\u0193\u043D\u026A\uFF8C\u049A\u0141\u0BF1\u041B\xD8\xFE\u04A8\u5C3A\u3089\u0164\u0426\u0194\u019C\u03C7\u03E4\u1E94';
    fancy_styles['fancyStyle30'] = '\u019B\u0181\u0187\u018A\u0404\u0191\u0193\u04C7\u0196\u0286\u0198\u053CM\u019D\u01A0\u01A4\u01A2\u01A6\u01A7\u01AC\u01B2\u0194\u019C\u04B2\u01B3\u0224';
    fancy_styles['fancyStyle31'] = '\uA072\uA2F0\uA02F\uA0A0\uA23C\uA11E\uA045\uA369\uA091\uA4BB\uA017\uA492\uA0B5\uA2CA\uA0A6\uA263\uA077\uA305\uA31A\uA2D6\uA407\uA030\uA14F\uA1D2\uA41E\uA074';
    fancy_styles['fancyStyle32'] = '\uA2EC\uA357\uA3F3\uA09F\uA3C2\uA11F\uA34C\uA0EC\uA490\uA4BB\uA018\uA492\uA0B5\uA09A\uA27B\uA263\uA2E0\uA2EA\uA444\uA4C4\uA00E\uA4A6\uA150\uA27C\uA41E\uA453';
    fancy_styles['fancyStyle33'] = '\u0539\u0545\u0547\u053A\u021D\u0532\u0533\u0267\u027F\u029D\u0199\u0285\u028D\u054C\u053E\u03C1\u03C6\u0550\u054F\u0535\u0544\u05E2\u0561\u0543\u054E\u0540';
    fancy_styles['fancyStyle34'] = '\uFF91\u4E43\u1103\u308A\u4E47\uFF77\u30E0\u3093\uFF89\uFF8C\u30BA\uFF9A\uFFB6\u5200\u306E\uFF71\u3090\u5C3A\u4E02\uFF72\u3072\u221AW\uFF92\uFF98\u4E59';
    fancy_styles['fancyStyle35'] = '\u03B1\xDF\u03C2d\u03B5\u0192gh\xEF\u0575\u03BA\uFF9Am\u03B7\u2295p\u03A9r\u0161\u2020u\u2200\u03C9x\u03C8z';
    fancy_styles['fancyStyle36'] = '\u0E04\u0E56\xA2\u0ED3\u0113f\u0E87hi\u0E27kl\u0E53\u0E96\u0ED0p\u0E51r\u015Et\u0E19\u0E07\u0E9Fx\u0E2F\u0E8A';
    fancy_styles['fancyStyle37'] = '\u0105\u10EA\u0188\u0256\u025B\u0284\u0260\u0267\u0131\u029D\u0199\u0196\u0271\u014B\u01A1\u2118\u0566\u0F5E\u0282\u026C\u0173\u06F7\u1FF3\u04B3\u10E7\u0291';
    fancy_styles['fancyStyle38'] = '\u15E9\u15F7\u1462\u1572\u163F\u15B4\u161C\u157C\u14F0\u149A\u15BD\u1438\u14AA\u163B\u1609\u14CD\u1575\u1574\u1587S\u15B6\u1458\u143A\u163A\u166D\u15BB\u15F1';
    fancy_styles['fancyStyle39'] = '\uA072\uA0C3\uA1C3\uA0A1\uA3F9\uA119\uA04D\uA00D\uA024\uA02D\uA235\uA492\uA0B5\uA2CA\uA04F\uA263\uA1B0\uA2EA\uA31A\uA2D6\uA308\uA0F4\uA150\uA2DA\uA096\uA074';
    fancy_styles['fancyStyle40'] = '\u1571\u10EA\uA49D\u13A0\uA085\uA2B0g\u2645\u13A5\u03F3\u041A\u056C\u10DD\u0E20\u053E\u13B5\u0563\u13D2\u13D5\u03EEu\u13C9\u13B3\uA2BC\u13A9\u13C3';
    fancy_styles['fancyStyle41'] = '\uA072\uA0F3\uA3F3\uA037\uA440\uA2AF\uA045\uA05D\uA490\uA491\uA235\uA492\uA0B5\uA0D4\uA2BF\uA263\uA2E0\uA305\uA21C\uA2D6\uA308\uA4A6\uA150\uA264\uA414\uA452';
    fancy_styles['fancyStyle42'] = '\u03B1\u0432cde\u0493\u0262\u043D\u03B9j\u0138l\u043C\u0274opqr\u0455\u0442\u03C5vw\u0445yz';
    fancy_styles['fancyStyle43'] = '\u0E04\u10EA\u096E\u10EB\u0AEF\u0532\u0AED\u04BA\u027F\u0286\u049B\u0546\u0271\u0548\u0AE6\u01BF\u04A9\u0550\u03C2\u0A6E\u03C5\u0C6E\u03C9\u0AEA\u05E2\u0ABD';
    fancy_styles['fancyStyle44'] = '\u13AAb\u13DF\u13A0\u13ACf\u13B6h\u13A5j\u13E6\u13DEm\u13C1\u13BE\u13E2q\u13D2s\u13C6u\u13C9\u13B3x\u13BD\u13C3';
    fancy_styles['fancyStyle45'] = '\uA34F\uA303\uA253\uA038\uA35F\uA387\uA045\uA0C5\uA024\uA02D\uA018\uA492\uA3AD\uA224\uA0A6\u1598\uA1B0\uA2EA\uA317\uA4C4\uA00E\u142F\uA14F\uA2BC\uA329\uA074';
    fancy_styles['fancyStyle46'] = '\u120D\u130C\u122D\u12D5\u127F\u127B\u1297\u12D8\u130E\u130B\u1315\u1228\u1320\u12AD\u12D0\u12E8\u12D2\u12EA\u1290\u1355\u1201\u1200\u1220\u1238\u1203\u130A';
    fancy_styles['fancyStyle47'] = '\uA2EB\uA0F2\uA253\uA0F8\uA47E\uA118\uA045\uA0C4\uA490\uA491\uA017\uA492\uA0B5\uA079\uA131\uA263\uA2DF\uA2EA\uA1D8\uA4C5\uA307\uA4A6\uA14F\uA2CB\uA325\uA497';
    fancy_styles['fancyStyle48'] = '\uAA96\u200B\u1947\u200B\u1974\u200B\u1994\u200B\uAAC0\u200B\u183B\u200B\u19C1\u200B\uAADD\u200B\uD835\uDCF2\uD835\uDCF3\uD835\uDE2C\uAAB6\u200B\uAA91\u200B\uAA80\u200B\uAAAE\u200B\u03C1\u200B\uD835\uDE32\uD835\uDE33\uD835\uDE34\uD835\uDCFD\uAA8A\u200B\uAA9C\u200B\u1B59\u200B\u194A\u200B\uAA97\u200B\u0240\u200B';
    let _0x6460x16 = 'abcdefghijklmnopqrstuvwxyz';
    let _0x6460x17 = "$('#converting_text')['val']()['trim']();"
    _0x6460x17 = _0x6460x17['normalize']('NFD');
    if (_0x6460x17['length'] == 0) {
        _0x6460x17 = 'fancytexttool.net'
    }
    ;let _0x6460x13 = _0x6460x17['toLowerCase']();
    for (let styleIndex = 1; styleIndex <= Object['keys'](fancy_styles)['length']; styleIndex++) {
        const _0x6460x18 = 'fancyStyle' + styleIndex;
        const _0x6460x19 = fancy_styles[_0x6460x18];
        let _0x6460x1a = _0x6460x13;
        let  unicode_char
        for (let k = 0; k < _0x6460x16['length']; k++) {
            if (styleIndex == 17 || styleIndex == 38) {
                if (k < _0x6460x16['indexOf']('k')) {
                    unicode_char = getWholeChar(_0x6460x19, k)
                } else {
                    if (k > _0x6460x16['indexOf']('k')) {
                        unicode_char = getWholeChar(_0x6460x19, k + 1)
                    } else {
                        unicode_char = getWholeChar(_0x6460x19, k) + getWholeChar(_0x6460x19, k + 1)
                    }
                }
            } else {
                if (styleIndex == 12) {
                    unicode_char = getWholeChar(_0x6460x19, k * 3) + '\u200B'
                } else {
                    if (styleIndex == 48) {
                        unicode_char = getWholeChar(_0x6460x19, k * 2) + '\u200B'
                    } else {
                        unicode_char = getWholeChar(_0x6460x19, k)
                    }
                }
            }
            ;_0x6460x1a = _0x6460x1a['replace'](new RegExp(_0x6460x16['charAt'](k),'g'), unicode_char)
        }
    }
    ;_0x6460x16 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    _0x6460x13 = _0x6460x17;
    const named_fancy_styles = ['bridge_above', 'bridge_bellow', 'asterisk_bellow', 'plus_sign_bellow', 'x_above_bellow', 'upward_arrow_bellow', 'love', 'strikethrough', 'tildeStrikethrough', 'slash', 'underline', 'doubleUnderline', 'stinky', 'black-bracket', 'white-bracket', 'emoji-text', 'wideDaddy', 'invisibleInk'];
    const _0x6460x1b = ['\uD83C\uDD70', '\uD83C\uDD71', '\uD83C\uDF1C', '\uD83C\uDF1B', '\uD83C\uDF97', '\uD83C\uDF8F', '\uD83C\uDF00', '\u2653', '\uD83C\uDF90', '\uD83C\uDFB7', '\uD83C\uDF8B', '\uD83D\uDC62', '\u303D\uFE0F', '\uD83C\uDFB5', '\u26BD', '\uD83C\uDD7F\uFE0F', '\uD83C\uDF73', '\uD83C\uDF31', '\uD83D\uDCB2', '\uD83C\uDF34', '\u26CE', '\u2705', '\uD83D\uDD31', '\u274E', '\uD83C\uDF78', '\uD83D\uDCA4'];
    for (let nameStyleIndex = 0; nameStyleIndex <= named_fancy_styles['length']; nameStyleIndex++) {
        const _0x6460x19 = named_fancy_styles[nameStyleIndex];
        let _0x6460x1a = _0x6460x13;
        for (let k = 0; k < _0x6460x16['length']; k++) {
            let unicode_char = _0x6460x16[k];
            switch (_0x6460x19) {
            case 'bridge_above':
                unicode_char = _0x6460x16[k] + '\u0346';
                break;
            case 'bridge_bellow':
                unicode_char = _0x6460x16[k] + '\u033A';
                break;
            case 'asterisk_bellow':
                unicode_char = _0x6460x16[k] + '\u0359';
                break;
            case 'plus_sign_bellow':
                unicode_char = _0x6460x16[k] + '\u031F';
                break;
            case 'x_above_bellow':
                unicode_char = _0x6460x16[k] + '\u033D' + '\u0353';
                break;
            case 'upward_arrow_bellow':
                unicode_char = _0x6460x16[k] + '\u034E';
                break;
            case 'love':
                unicode_char = _0x6460x16[k] + '\u2665';
                break;
            case 'strikethrough':
                unicode_char = _0x6460x16[k] + '\u0336';
                break;
            case 'tildeStrikethrough':
                unicode_char = _0x6460x16[k] + '\u0334';
                break;
            case 'slash':
                unicode_char = _0x6460x16[k] + '\u0337';
                break;
            case 'underline':
                unicode_char = _0x6460x16[k] + '\u0332';
                break;
            case 'doubleUnderline':
                unicode_char = _0x6460x16[k] + '\u0333';
                break;
            case 'stinky':
                unicode_char = _0x6460x16[k] + '\u033E';
                break;
            case 'black-bracket':
                unicode_char = '\u3010' + _0x6460x16[k] + '\u3011';
                break;
            case 'white-bracket':
                unicode_char = '\u300E' + _0x6460x16[k] + '\u300F';
                break;
            case 'emoji-text':
                if (k <= 51) {
                    unicode_char = _0x6460x1b[k % 26]
                } else {
                    unicode_char = _0x6460x16[k]
                }
                ;break;
            case 'invisibleInk':
                unicode_char = _0x6460x16[k] + '\u0489';
                break
            }
            ;_0x6460x1a = _0x6460x1a['replace'](new RegExp(_0x6460x16[k],'g'), unicode_char)
        }
        ;switch (_0x6460x19) {
        case 'strikethrough':
            _0x6460x1a = _0x6460x1a['replace'](/ /g, ' ' + '\u0336');
            break;
        case 'tildeStrikethrough':
            _0x6460x1a = _0x6460x1a['replace'](/ /g, ' ' + '\u0334');
            break;
        case 'slash':
            _0x6460x1a = _0x6460x1a['replace'](/ /g, ' ' + '\u0337');
            break;
        case 'underline':
            _0x6460x1a = _0x6460x1a['replace'](/ /g, ' ' + '\u0332');
            break;
        case 'doubleUnderline':
            _0x6460x1a = _0x6460x1a['replace'](/ /g, ' ' + '\u0333');
            break;
        case 'emoji-text':
            _0x6460x1a = _0x6460x1a['replace'](/ /g, '  ');
            break
        }
    }
}

export function createStylishText(string: string) {
    const _0x6460x1d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const _0x6460x1e = '0123456789';
    const _0x6460x1f = new Array('\u15E9\u15F7\u1455\u15EAE\u15B4G\u157CI\u148DK\u14AA\u15F0\u144EO\u146D\u146B\u1587\u1515T\u144C\u142F\u15EF\u166DY\u1614\u15E9\u15F7\u1455\u15EAE\u15B4G\u157CI\u148DK\u14AA\u15F0\u144EO\u146D\u146B\u1587\u1515T\u144C\u142F\u15EF\u166DY\u1614','abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ','\u24D0\u24D1\u24D2\u24D3\u24D4\u24D5\u24D6\u24D7\u24D8\u24D9\u24DA\u24DB\u24DC\u24DD\u24DE\u24DF\u24E0\u24E1\u24E2\u24E3\u24E4\u24E5\u24E6\u24E7\u24E8\u24E9\u24B6\u24B7\u24B8\u24B9\u24BA\u24BB\u24BC\u24BD\u24BE\u24BF\u24C0\u24C1\u24C2\u24C3\u24C4\u24C5\u24C6\u24C7\u24C8\u24C9\u24CA\u24CB\u24CC\u24CD\u24CE\u24CF','\u03B1\u0432\xA2\u2202\u0454fg\u043D\u03B9\u05E0\u043A\u2113\u043C\u0438\u03C3\u03C1q\u044F\u0455\u0442\u03C5\u03BD\u03C9\u03C7\u0443z\u03B1\u0432\xA2\u2202\u0454fg\u043D\u03B9\u05E0\u043A\u2113\u043C\u0438\u03C3\u03C1q\u044F\u0455\u0442\u03C5\u03BD\u03C9\u03C7\u0443z','\u034Fa\u034Fb\u034Fc\u034Fd\u034Fe\u034Ff\u034Fg\u034Fh\u034Fi\u034Fj\u034Fk\u034Fl\u034Fm\u034Fn\u034Fo\u034Fp\u034Fq\u034Fr\u034Fs\u034Ft\u034Fu\u034Fv\u034Fw\u034Fx\u034Fy\u034Fz\u034Fa\u034Fb\u034Fc\u034Fd\u034Fe\u034Ff\u034Fg\u034Fh\u034Fi\u034Fj\u034Fk\u034Fl\u034Fm\u034Fn\u034Fo\u034Fp\u034Fq\u034Fr\u034Fs\u034Ft\u034Fu\u034Fv\u034Fw\u034Fx\u034Fy\u034Fz\u034F','\u20B3\u0E3F\u20B5\u0110\u0246\u20A3\u20B2\u2C67\u0142J\u20AD\u2C60\u20A5\u20A6\xD8\u20B1Q\u2C64\u20B4\u20AE\u0244V\u20A9\u04FE\u024E\u2C6B\u20B3\u0E3F\u20B5\u0110\u0246\u20A3\u20B2\u2C67\u0142J\u20AD\u2C60\u20A5\u20A6\xD8\u20B1Q\u2C64\u20B4\u20AE\u0244V\u20A9\u04FE\u024E\u2C6B','abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ','\xE4\u1E05\u010B\u010F\u1EC7\u1E1F\u0121\u1E27\xEFj\u1E33\u0140\u1E43\u0144\xF6\u1E57q\u0155\u1E69\u1E97\xFC\u1E7F\u1E85\u1E8D\xFF\u1E93\xC4\u1E04\u010A\u010E\u1EC6\u1E1E\u0120\u1E26\xCFJ\u1E32\u013F\u1E42\u0143\xD6\u1E56Q\u0154\u1E68\u1E6E\xDC\u1E7E\u1E84\u1E8C\u0178\u1E92','\u13D7\u13F0\u1348\u13B4\u13CB\u13A6\u13B6\u13C2\u13A5\u13E0\u13E6\u13DD\u13B7\u13C1\u13A7\u13AE\u13A4\u13D2\u13D5\u13D6\u13EC\u13C9\u13C7\u1300\u13A9\u135A\u13D7\u13F0\u1348\u13B4\u13CB\u13A6\u13B6\u13C2\u13A5\u13E0\u13E6\u13DD\u13B7\u13C1\u13A7\u13AE\u13A4\u13D2\u13D5\u13D6\u13EC\u13C9\u13C7\u1300\u13A9\u135A','\u03BB\u03D0\u03C2d\u03B5\u0493\u03D1\u043D\u03B9\u03F3\u03BAl\u03FB\u03C0\u03C3\u03C1\u03C6\u0433s\u03C4\u03C5v\u0448\u03F0\u03C8z\u0394\u0181CD\u03A3FGHIJ\u0198L\u039C\u220F\u0398\u01A4\u10B3\u0393\u0405\u01AC\u01B1\u01B2\u0428\u0416\u03A8Z','\u1E00\u1E03\u1E09\u1E0A\u1E15\u1E1F\u1E20\u1E27\u1E2Dj\u1E32\u1E36\u1E41\u1E46\u1E4F\u1E56q\u1E59\u1E60\u1E6E\u1E73\u1E7C\u1E87\u1E8C\u1E8F\u1E92\u1E00\u1E02\u1E08\u1E0A\u1E14\u1E1E\u1E20\u1E26\u1E2CJ\u1E32\u1E36\u1E40\u1E46\u1E4E\u1E56Q\u1E58\u1E60\u1E6E\u1E72\u1E7C\u1E86\u1E8C\u1E8E\u1E92','\u13AAb\u13DF\u13A0\u13ACf\u13B6h\u13A5j\u13E6\u13DEm\u13C1\u13BE\u13E2q\u13D2s\u13C6u\u13C9\u13B3x\u13BD\u13C3\u13AAb\u13DF\u13A0\u13ACf\u13B6h\u13A5j\u13E6\u13DEm\u13C1\u13BE\u13E2q\u13D2s\u13C6u\u13C9\u13B3x\u13BD\u13C3','\u03B1\u0432cd\u0454fgh\xEDjklmn\u03C3pqrstuvw\u0445\u0447z\u03B1\u0432cd\u0454fgh\xEDjklmn\u03C3pqrstuvw\u0445\u0447z','\u01DF\u026E\u0188\u0256\u025B\u0284\u0262\u0266\u0268\u029D\u04C4\u029F\u028D\u057C\u0585\u0584\u0566\u0280\u0586\u0236\u028A\u028B\u0561\u04FC\u028F\u0290\u01DF\u026E\u0188\u0256\u025B\u0284\u0262\u0266\u0268\u029D\u04C4\u029F\u028D\u057C\u0585\u0584\u0566\u0280\u0586\u0236\u028A\u028B\u0561\u04FC\u028F\u0290','\u033Ea\u033Eb\u033Ec\u033Ed\u033Ee\u033Ef\u033Eg\u033Eh\u033Ei\u033Ej\u033Ek\u033El\u033Em\u033En\u033Eo\u033Ep\u033Eq\u033Er\u033Es\u033Et\u033Eu\u033Ev\u033Ew\u033Ex\u033Ey\u033Ez\u033E\u033Ea\u033Eb\u033Ec\u033Ed\u033Ee\u033Ef\u033Eg\u033Eh\u033Ei\u033Ej\u033Ek\u033El\u033Em\u033En\u033Eo\u033Ep\u033Eq\u033Er\u033Es\u033Et\u033Eu\u033Ev\u033Ew\u033Ex\u033Ey\u033Ez\u033E','\uFF41\uFF42\uFF43\uFF44\uFF45\uFF46\uFF47\uFF48\uFF49\uFF4A\uFF4B\uFF4C\uFF4D\uFF4E\uFF4F\uFF50\uFF51\uFF52\uFF53\uFF54\uFF55\uFF56\uFF57\uFF58\uFF59\uFF5A\uFF21\uFF22\uFF23\uFF24\uFF25\uFF26\uFF27\uFF28\uFF29\uFF2A\uFF2B\uFF2C\uFF2D\uFF2E\uFF2F\uFF30\uFF31\uFF32\uFF33\uFF34\uFF35\uFF36\uFF37\uFF38\uFF39\uFF3A','\u1D00\u0299\u1D04\u1D05\u1D07\u0493\u0262\u029C\u026A\u1D0A\u1D0B\u029F\u1D0D\u0274\u1D0F\u1D18\u03D9\u0280\uA731\u1D1B\u1D1C\u1D20\u1D21x\u028F\u1D22ABCDEFGHIJKLMNOPQRSTUVWXYZ','\u0250q\u0254p\u01DD\u025F\u0183\u0265\u0131\u027E\u029El\u026Fuodb\u0279s\u0287n\u028C\u028Dx\u028Ez\u0250q\u0254p\u01DD\u025F\u0183\u0265\u0131\u027E\u029El\u026Fuodb\u0279s\u0287n\u028C\u028Dx\u028Ez','\u0723a\u0723\u0723b\u0723\u0723c\u0723\u0723d\u0723\u0723e\u0723\u0723f\u0723\u0723g\u0723\u0723h\u0723\u0723i\u0723\u0723j\u0723\u0723k\u0723\u0723l\u0723\u0723m\u0723\u0723n\u0723\u0723o\u0723\u0723p\u0723\u0723q\u0723\u0723r\u0723\u0723s\u0723\u0723t\u0723\u0723u\u0723\u0723v\u0723\u0723w\u0723\u0723x\u0723\u0723y\u0723\u0723z\u0723\u0723a\u0723\u0723b\u0723\u0723c\u0723\u0723d\u0723\u0723e\u0723\u0723f\u0723\u0723g\u0723\u0723h\u0723\u0723i\u0723\u0723j\u0723\u0723k\u0723\u0723l\u0723\u0723m\u0723\u0723n\u0723\u0723o\u0723\u0723p\u0723\u0723q\u0723\u0723r\u0723\u0723s\u0723\u0723t\u0723\u0723u\u0723\u0723v\u0723\u0723w\u0723\u0723x\u0723\u0723y\u0723\u0723z\u0723','\u2665a\u2665\u2665b\u2665\u2665c\u2665\u2665d\u2665\u2665e\u2665\u2665f\u2665\u2665g\u2665\u2665h\u2665\u2665i\u2665\u2665j\u2665\u2665k\u2665\u2665l\u2665\u2665m\u2665\u2665n\u2665\u2665o\u2665\u2665p\u2665\u2665q\u2665\u2665r\u2665\u2665s\u2665\u2665t\u2665\u2665u\u2665\u2665v\u2665\u2665w\u2665\u2665x\u2665\u2665y\u2665\u2665z\u2665\u2665a\u2665\u2665b\u2665\u2665c\u2665\u2665d\u2665\u2665e\u2665\u2665f\u2665\u2665g\u2665\u2665h\u2665\u2665i\u2665\u2665j\u2665\u2665k\u2665\u2665l\u2665\u2665m\u2665\u2665n\u2665\u2665o\u2665\u2665p\u2665\u2665q\u2665\u2665r\u2665\u2665s\u2665\u2665t\u2665\u2665u\u2665\u2665v\u2665\u2665w\u2665\u2665x\u2665\u2665y\u2665\u2665z\u2665','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz','\u1D00\u0299\u1D04\u1D05\u1D07\u0493\u0262\u029C\u026A\u1D0A\u1D0B\u029F\u1D0D\u0274\u1D0F\u1D18\u01EB\u0280s\u1D1B\u1D1C\u1D20\u1D21x\u028F\u1D22\u1D00\u0299\u1D04\u1D05\u1D07\u0493\u0262\u029C\u026A\u1D0A\u1D0B\u029F\u1D0D\u0274\u1D0F\u1D18\u01EB\u0280s\u1D1B\u1D1C\u1D20\u1D21x\u028F\u1D22','\uD83C\uDD50\uD83C\uDD51\uD83C\uDD52\uD83C\uDD53\uD83C\uDD54\uD83C\uDD55\uD83C\uDD56\uD83C\uDD57\uD83C\uDD58\uD83C\uDD59\uD83C\uDD5A\uD83C\uDD5B\uD83C\uDD5C\uD83C\uDD5D\uD83C\uDD5E\uD83C\uDD5F\uD83C\uDD60\uD83C\uDD61\uD83C\uDD62\uD83C\uDD63\uD83C\uDD64\uD83C\uDD65\uD83C\uDD66\uD83C\uDD67\uD83C\uDD68\uD83C\uDD69\uD83C\uDD50\uD83C\uDD51\uD83C\uDD52\uD83C\uDD53\uD83C\uDD54\uD83C\uDD55\uD83C\uDD56\uD83C\uDD57\uD83C\uDD58\uD83C\uDD59\uD83C\uDD5A\uD83C\uDD5B\uD83C\uDD5C\uD83C\uDD5D\uD83C\uDD5E\uD83C\uDD5F\uD83C\uDD60\uD83C\uDD61\uD83C\uDD62\uD83C\uDD63\uD83C\uDD64\uD83C\uDD65\uD83C\uDD66\uD83C\uDD67\uD83C\uDD68\uD83C\uDD69','\uD835\uDC1A\uD835\uDC1B\uD835\uDC1C\uD835\uDC1D\uD835\uDC1E\uD835\uDC1F\uD835\uDC20\uD835\uDC21\uD835\uDC22\uD835\uDC23\uD835\uDC24\uD835\uDC25\uD835\uDC26\uD835\uDC27\uD835\uDC28\uD835\uDC29\uD835\uDC2A\uD835\uDC2B\uD835\uDC2C\uD835\uDC2D\uD835\uDC2E\uD835\uDC2F\uD835\uDC30\uD835\uDC31\uD835\uDC32\uD835\uDC33\uD835\uDC00\uD835\uDC01\uD835\uDC02\uD835\uDC03\uD835\uDC04\uD835\uDC05\uD835\uDC06\uD835\uDC07\uD835\uDC08\uD835\uDC09\uD835\uDC0A\uD835\uDC0B\uD835\uDC0C\uD835\uDC0D\uD835\uDC0E\uD835\uDC0F\uD835\uDC10\uD835\uDC11\uD835\uDC12\uD835\uDC13\uD835\uDC14\uD835\uDC15\uD835\uDC16\uD835\uDC17\uD835\uDC18\uD835\uDC19','\uD835\uDE22\uD835\uDE23\uD835\uDE24\uD835\uDE25\uD835\uDE26\uD835\uDE27\uD835\uDE28\uD835\uDE29\uD835\uDE2A\uD835\uDE2B\uD835\uDE2C\uD835\uDE2D\uD835\uDE2E\uD835\uDE2F\uD835\uDE30\uD835\uDE31\uD835\uDE32\uD835\uDE33\uD835\uDE34\uD835\uDE35\uD835\uDE36\uD835\uDE37\uD835\uDE38\uD835\uDE39\uD835\uDE3A\uD835\uDE3B\uD835\uDE08\uD835\uDE09\uD835\uDE0A\uD835\uDE0B\uD835\uDE0C\uD835\uDE0D\uD835\uDE0E\uD835\uDE0F\uD835\uDE10\uD835\uDE11\uD835\uDE12\uD835\uDE13\uD835\uDE14\uD835\uDE15\uD835\uDE16\uD835\uDE17\uD835\uDE18\uD835\uDE19\uD835\uDE1A\uD835\uDE1B\uD835\uDE1C\uD835\uDE1D\uD835\uDE1E\uD835\uDE1F\uD835\uDE20\uD835\uDE21','\uD835\uDE56\uD835\uDE57\uD835\uDE58\uD835\uDE59\uD835\uDE5A\uD835\uDE5B\uD835\uDE5C\uD835\uDE5D\uD835\uDE5E\uD835\uDE5F\uD835\uDE60\uD835\uDE61\uD835\uDE62\uD835\uDE63\uD835\uDE64\uD835\uDE65\uD835\uDE66\uD835\uDE67\uD835\uDE68\uD835\uDE69\uD835\uDE6A\uD835\uDE6B\uD835\uDE6C\uD835\uDE6D\uD835\uDE6E\uD835\uDE6F\uD835\uDE3C\uD835\uDE3D\uD835\uDE3E\uD835\uDE3F\uD835\uDE40\uD835\uDE41\uD835\uDE42\uD835\uDE43\uD835\uDE44\uD835\uDE45\uD835\uDE46\uD835\uDE47\uD835\uDE48\uD835\uDE49\uD835\uDE4A\uD835\uDE4B\uD835\uDE4C\uD835\uDE4D\uD835\uDE4E\uD835\uDE4F\uD835\uDE50\uD835\uDE51\uD835\uDE52\uD835\uDE53\uD835\uDE54\uD835\uDE55','\uD835\uDCB6\uD835\uDCB7\uD835\uDCB8\uD835\uDCB9\u212F\uD835\uDCBB\u210A\uD835\uDCBD\uD835\uDCBE\uD835\uDCBF\uD835\uDCC0\uD835\uDCC1\uD835\uDCC2\uD835\uDCC3\u2134\uD835\uDCC5\uD835\uDCC6\uD835\uDCC7\uD835\uDCC8\uD835\uDCC9\uD835\uDCCA\uD835\uDCCB\uD835\uDCCC\uD835\uDCCD\uD835\uDCCE\uD835\uDCCF\uD835\uDCB6\uD835\uDCB7\uD835\uDCB8\uD835\uDCB9\u212F\uD835\uDCBB\u210A\uD835\uDCBD\uD835\uDCBE\uD835\uDCBF\uD835\uDCC0\uD835\uDCC1\uD835\uDCC2\uD835\uDCC3\u2134\uD835\uDCC5\uD835\uDCC6\uD835\uDCC7\uD835\uDCC8\uD835\uDCC9\uD835\uDCCA\uD835\uDCCB\uD835\uDCCC\uD835\uDCCD\uD835\uDCCE\uD835\uDCCF','\uD835\uDCEA\uD835\uDCEB\uD835\uDCEC\uD835\uDCED\uD835\uDCEE\uD835\uDCEF\uD835\uDCF0\uD835\uDCF1\uD835\uDCF2\uD835\uDCF3\uD835\uDCF4\uD835\uDCF5\uD835\uDCF6\uD835\uDCF7\uD835\uDCF8\uD835\uDCF9\uD835\uDCFA\uD835\uDCFB\uD835\uDCFC\uD835\uDCFD\uD835\uDCFE\uD835\uDCFF\uD835\uDD00\uD835\uDD01\uD835\uDD02\uD835\uDD03\uD835\uDCD0\uD835\uDCD1\uD835\uDCD2\uD835\uDCD3\uD835\uDCD4\uD835\uDCD5\uD835\uDCD6\uD835\uDCD7\uD835\uDCD8\uD835\uDCD9\uD835\uDCDA\uD835\uDCDB\uD835\uDCDC\uD835\uDCDD\uD835\uDCDE\uD835\uDCDF\uD835\uDCE0\uD835\uDCE1\uD835\uDCE2\uD835\uDCE3\uD835\uDCE4\uD835\uDCE5\uD835\uDCE6\uD835\uDCE7\uD835\uDCE8\uD835\uDCE9','\uD835\uDD52\uD835\uDD53\uD835\uDD54\uD835\uDD55\uD835\uDD56\uD835\uDD57\uD835\uDD58\uD835\uDD59\uD835\uDD5A\uD835\uDD5B\uD835\uDD5C\uD835\uDD5D\uD835\uDD5E\uD835\uDD5F\uD835\uDD60\uD835\uDD61\uD835\uDD62\uD835\uDD63\uD835\uDD64\uD835\uDD65\uD835\uDD66\uD835\uDD67\uD835\uDD68\uD835\uDD69\uD835\uDD6A\uD835\uDD6B\uD835\uDD38\uD835\uDD39\u2102\u200B\uD835\uDD3B\uD835\uDD3C\uD835\uDD3D\uD835\uDD3E\u210D\u200B\uD835\uDD40\uD835\uDD41\uD835\uDD42\uD835\uDD43\uD835\uDD44\u2115\u200B\uD835\uDD46\u2119\u200B\u211A\u200B\u211D\u200B\uD835\uDD4A\uD835\uDD4B\uD835\uDD4C\uD835\uDD4D\uD835\uDD4E\uD835\uDD4F\uD835\uDD50\u2124\u200B','\uD835\uDD1E\uD835\uDD1F\uD835\uDD20\uD835\uDD21\uD835\uDD22\uD835\uDD23\uD835\uDD24\uD835\uDD25\uD835\uDD26\uD835\uDD27\uD835\uDD28\uD835\uDD29\uD835\uDD2A\uD835\uDD2B\uD835\uDD2C\uD835\uDD2D\uD835\uDD2E\uD835\uDD2F\uD835\uDD30\uD835\uDD31\uD835\uDD32\uD835\uDD33\uD835\uDD34\uD835\uDD35\uD835\uDD36\uD835\uDD37\uD835\uDD04\uD835\uDD05\u212D\u200B\uD835\uDD07\uD835\uDD08\uD835\uDD09\uD835\uDD0A\u210C\u200B\u2111\u200B\uD835\uDD0D\uD835\uDD0E\uD835\uDD0F\uD835\uDD10\uD835\uDD11\uD835\uDD12\uD835\uDD13\uD835\uDD14\u211C\u200B\uD835\uDD16\uD835\uDD17\uD835\uDD18\uD835\uDD19\uD835\uDD1A\uD835\uDD1B\uD835\uDD1C\u2128\u200B','\uD835\uDD86\uD835\uDD87\uD835\uDD88\uD835\uDD89\uD835\uDD8A\uD835\uDD8B\uD835\uDD8C\uD835\uDD8D\uD835\uDD8E\uD835\uDD8F\uD835\uDD90\uD835\uDD91\uD835\uDD92\uD835\uDD93\uD835\uDD94\uD835\uDD95\uD835\uDD96\uD835\uDD97\uD835\uDD98\uD835\uDD99\uD835\uDD9A\uD835\uDD9B\uD835\uDD9C\uD835\uDD9D\uD835\uDD9E\uD835\uDD9F\uD835\uDD6C\uD835\uDD6D\uD835\uDD6E\uD835\uDD6F\uD835\uDD70\uD835\uDD71\uD835\uDD72\uD835\uDD73\uD835\uDD74\uD835\uDD75\uD835\uDD76\uD835\uDD77\uD835\uDD78\uD835\uDD79\uD835\uDD7A\uD835\uDD7B\uD835\uDD7C\uD835\uDD7D\uD835\uDD7E\uD835\uDD7F\uD835\uDD80\uD835\uDD81\uD835\uDD82\uD835\uDD83\uD835\uDD84\uD835\uDD85','\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32\uD83C\uDD33\uD83C\uDD34\uD83C\uDD35\uD83C\uDD36\uD83C\uDD37\uD83C\uDD38\uD83C\uDD39\uD83C\uDD3A\uD83C\uDD3B\uD83C\uDD3C\uD83C\uDD3D\uD83C\uDD3E\uD83C\uDD3F\uD83C\uDD40\uD83C\uDD41\uD83C\uDD42\uD83C\uDD43\uD83C\uDD44\uD83C\uDD45\uD83C\uDD46\uD83C\uDD47\uD83C\uDD48\uD83C\uDD49\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32\uD83C\uDD33\uD83C\uDD34\uD83C\uDD35\uD83C\uDD36\uD83C\uDD37\uD83C\uDD38\uD83C\uDD39\uD83C\uDD3A\uD83C\uDD3B\uD83C\uDD3C\uD83C\uDD3D\uD83C\uDD3E\uD83C\uDD3F\uD83C\uDD40\uD83C\uDD41\uD83C\uDD42\uD83C\uDD43\uD83C\uDD44\uD83C\uDD45\uD83C\uDD46\uD83C\uDD47\uD83C\uDD48\uD83C\uDD49','\uD83C\uDD70\uD83C\uDD71\uD83C\uDD72\uD83C\uDD73\uD83C\uDD74\uD83C\uDD75\uD83C\uDD76\uD83C\uDD77\uD83C\uDD78\uD83C\uDD79\uD83C\uDD7A\uD83C\uDD7B\uD83C\uDD7C\uD83C\uDD7D\uD83C\uDD7E\uD83C\uDD7F\uD83C\uDD80\uD83C\uDD81\uD83C\uDD82\uD83C\uDD83\uD83C\uDD84\uD83C\uDD85\uD83C\uDD86\uD83C\uDD87\uD83C\uDD88\uD83C\uDD89\uD83C\uDD70\uD83C\uDD71\uD83C\uDD72\uD83C\uDD73\uD83C\uDD74\uD83C\uDD75\uD83C\uDD76\uD83C\uDD77\uD83C\uDD78\uD83C\uDD79\uD83C\uDD7A\uD83C\uDD7B\uD83C\uDD7C\uD83C\uDD7D\uD83C\uDD7E\uD83C\uDD7F\uD83C\uDD80\uD83C\uDD81\uD83C\uDD82\uD83C\uDD83\uD83C\uDD84\uD83C\uDD85\uD83C\uDD86\uD83C\uDD87\uD83C\uDD88\uD83C\uDD89','\uD835\uDCB6\uD835\uDCB7\uD835\uDCB8\uD835\uDCB9\uD835\uDC52\uD835\uDCBB\uD835\uDC54\uD835\uDCBD\uD835\uDCBE\uD835\uDCBF\uD835\uDCC0\uD835\uDCC1\uD835\uDCC2\uD835\uDCC3\uD835\uDC5C\uD835\uDCC5\uD835\uDCC6\uD835\uDCC7\uD835\uDCC8\uD835\uDCC9\uD835\uDCCA\uD835\uDCCB\uD835\uDCCC\uD835\uDCCD\uD835\uDCCE\uD835\uDCCF\uD835\uDC9C\uD835\uDC35\uD835\uDC9E\uD835\uDC9F\uD835\uDC38\uD835\uDC39\uD835\uDCA2\uD835\uDC3B\uD835\uDC3C\uD835\uDCA5\uD835\uDCA6\uD835\uDC3F\uD835\uDC40\uD835\uDCA9\uD835\uDCAA\uD835\uDCAB\uD835\uDCAC\uD835\uDC45\uD835\uDCAE\uD835\uDCAF\uD835\uDCB0\uD835\uDCB1\uD835\uDCB2\uD835\uDCB3\uD835\uDCB4\uD835\uDCB5','\u03B1\u10A6\u0188\u0503\u04BD\u03DD\u0260\u050B\u03B9\u029D\u0199\u0285\u0271\u0273\u03C3\u03C1\u03D9\u027E\u0282\u019A\u03C5\u028B\u026Fx\u10E7\u0225ABCDEFGHIJKLMNOPQRSTUVWXYZ','\uD835\uDE8A\uD835\uDE8B\uD835\uDE8C\uD835\uDE8D\uD835\uDE8E\uD835\uDE8F\uD835\uDE90\uD835\uDE91\uD835\uDE92\uD835\uDE93\uD835\uDE94\uD835\uDE95\uD835\uDE96\uD835\uDE97\uD835\uDE98\uD835\uDE99\uD835\uDE9A\uD835\uDE9B\uD835\uDE9C\uD835\uDE9D\uD835\uDE9E\uD835\uDE9F\uD835\uDEA0\uD835\uDEA1\uD835\uDEA2\uD835\uDEA3\uD835\uDE70\uD835\uDE71\uD835\uDE72\uD835\uDE73\uD835\uDE74\uD835\uDE75\uD835\uDE76\uD835\uDE77\uD835\uDE78\uD835\uDE79\uD835\uDE7A\uD835\uDE7B\uD835\uDE7C\uD835\uDE7D\uD835\uDE7E\uD835\uDE7F\uD835\uDE80\uD835\uDE81\uD835\uDE82\uD835\uDE83\uD835\uDE84\uD835\uDE85\uD835\uDE86\uD835\uDE87\uD835\uDE88\uD835\uDE89','\uA34F\u266D\u263E\u25D7\u20AC\u03DC\u2761\u2644\u2657\u266A\u03F0\u21B3\u2654\u266B\u2299\u03C1\u262D\u2608\u24E2\u2602\u260B\u2713\u03C9\u2318\u263F\u2621\uA34F\u266D\u263E\u25D7\u20AC\u03DC\u2761\u2644\u2657\u266A\u03F0\u21B3\u2654\u266B\u2299\u03C1\u262D\u2608\u24E2\u2602\u260B\u2713\u03C9\u2318\u263F\u2621','\u0430\u0431c\u0434\u0451fg\u043D\u0457j\u043A\u0433\u046B\u043F\u0473p\u0444\u044F$\u0442\u0446\u0475\u0449\u0436\u0447\u0437\u0410\u0411C\u0414\u0404FGH\u0407J\u041A\u0413\u046A\u0419\u0472P\u0424\u042F$T\u0426\u0474\u0428\u0416\u0427\u0417','48(d3f9h!jk1mn0pqr57uvwxy248(D3F9H!JK1MN0PQR57UVWXY2');
    const _0x6460x20 = _0x6460x1d['length'];
    const _0x6460x21 = _0x6460x1f['length'];
    let _0x6460x13 = string;
    _0x6460x13 = _0x6460x13['normalize']('NFD');
    const _0x6460x23 = new Array();
    const _0x6460x24 = new Array();
    for (let k = 1; k <= _0x6460x21; k++) {
        if (k == 1) {
            _0x6460x23[k] = 'special'
        }
        ;if (k == 2) {
            _0x6460x23[k] = 'boxed'
        }
        ;if (k == 3) {
            _0x6460x23[k] = 'bubble'
        }
        ;if (k == 4) {
            _0x6460x23[k] = 'antrophobia'
        }
        ;if (k == 5) {
            _0x6460x23[k] = 'blurry'
        }
        ;if (k == 6) {
            _0x6460x23[k] = 'currency'
        }
        ;if (k == 7) {
            _0x6460x23[k] = 'diamond'
        }
        ;if (k == 8) {
            _0x6460x23[k] = 'dirty'
        }
        ;if (k == 9) {
            _0x6460x23[k] = 'fairy'
        }
        ;if (k == 10) {
            _0x6460x23[k] = 'greek_style'
        }
        ;if (k == 11) {
            _0x6460x23[k] = 'knight'
        }
        ;if (k == 12) {
            _0x6460x23[k] = 'magic'
        }
        ;if (k == 13) {
            _0x6460x23[k] = 'paranormal'
        }
        ;if (k == 14) {
            _0x6460x23[k] = 'sorcerer'
        }
        ;if (k == 16) {
            _0x6460x23[k] = 'thin'
        }
        ;if (k == 17) {
            _0x6460x23[k] = 'tiny'
        }
        ;if (k == 18) {
            _0x6460x23[k] = 'upsideDown'
        }
        ;if (k == 22) {
            _0x6460x23[k] = 'smallCaps'
        }
        ;if (k == 23) {
            _0x6460x23[k] = 'blackBubble'
        }
        ;if (k == 24) {
            _0x6460x23[k] = 'bold'
        }
        ;if (k == 25) {
            _0x6460x23[k] = 'italic'
        }
        ;if (k == 26) {
            _0x6460x23[k] = 'boldItalic'
        }
        ;if (k == 27) {
            _0x6460x23[k] = 'script'
        }
        ;if (k == 28) {
            _0x6460x23[k] = 'boldScript'
        }
        ;if (k == 29) {
            _0x6460x23[k] = 'doubleStruck'
        }
        ;if (k == 30) {
            _0x6460x23[k] = 'fraktur'
        }
        ;if (k == 31) {
            _0x6460x23[k] = 'boldFraktur'
        }
        ;if (k == 32) {
            _0x6460x23[k] = 'square'
        }
        ;if (k == 33) {
            _0x6460x23[k] = 'blackSquare'
        }
        ;if (k == 34) {
            _0x6460x23[k] = 'handWriting1'
        }
        ;if (k == 35) {
            _0x6460x23[k] = 'handWriting2'
        }
        ;if (k == 36) {
            _0x6460x23[k] = 'monospace'
        }
        ;if (k == 37) {
            _0x6460x23[k] = 'fancySymbols'
        }
        ;if (k == 38) {
            _0x6460x23[k] = 'rusify'
        }
        ;if (k == 39) {
            _0x6460x23[k] = 'h4k3r'
        }
        ;_0x6460x24[k] = _0x6460x13;
        const _0x6460x26 = '\uD835\uDFD8\uD835\uDFD9\uD835\uDFDA\uD835\uDFDB\uD835\uDFDC\uD835\uDFDD\uD835\uDFDE\uD835\uDFDF\uD835\uDFE0\uD835\uDFE1';
        const _0x6460x27 = '\u24EA\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468';
        const _0x6460x28 = '\u24FF\u278A\u278B\u278C\u278D\u278E\u278F\u2790\u2791\u2792';
        const _0x6460x29 = '0123456789';
        const _0x6460x2a = '\uD835\uDFF6\uD835\uDFF7\uD835\uDFF8\uD835\uDFF9\uD835\uDFFA\uD835\uDFFB\uD835\uDFFC\uD835\uDFFD\uD835\uDFFE\uD835\uDFFF';
        const _0x6460x2b = '\uD835\uDFF6\uD835\uDFF7\uD835\uDFF8\uD835\uDFF9\uD835\uDFFA\uD835\uDFFB\uD835\uDFFC\uD835\uDFFD\uD835\uDFFE\uD835\uDFFF';
        const _0x6460x2c = '\uFF10\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17\uFF18\uFF19';
        const _0x6460x2d = '\u0585\u0575\u0577\u0545\u056F\u054F\u0573\u0534\u0551\u0563';
        const _0x6460x2e = '\uD835\uDFCE\uD835\uDFCF\uD835\uDFD0\uD835\uDFD1\uD835\uDFD2\uD835\uDFD3\uD835\uDFD4\uD835\uDFD5\uD835\uDFD6\uD835\uDFD7';
        const _0x6460x2f = '\u24EA\u278A\u278B\u278C\u278D\u278E\u278F\u2790\u2791\u2792';
        for (let i = 0; i < _0x6460x20; i++) {
            if (k == 2) {
                _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), '[\u0332\u0305' + _0x6460x1f[k - 1]['charAt'](i) + '\u0332\u0305]');
                if (i < _0x6460x1e['length']) {
                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), '[\u0332\u0305' + _0x6460x29['charAt'](i) + '\u0332\u0305]')
                }
            } else {
                if (k == 3) {
                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x1f[k - 1]['charAt'](i));
                    if (i < _0x6460x1e['length']) {
                        _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x27['charAt'](i))
                    }
                } else {
                    if (k == 5) {
                        _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), '\u034F' + _0x6460x1f[k - 1]['charAt'](2 * i + 1))
                    } else {
                        if (k == 7) {
                            _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), '\u06F0\u06EA\u06EB' + _0x6460x1f[k - 1]['charAt'](i) + '\u06EA\u06EB\u06F0')
                        } else {
                            if (k == 16) {
                                _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x1f[k - 1]['charAt'](i));
                                if (i < _0x6460x1e['length']) {
                                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x2c['charAt'](i))
                                }
                            } else {
                                if (k == 18) {
                                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x1f[k - 1]['charAt'](i)['split']('')['join'](''))
                                } else {
                                    if (k == 22) {
                                        _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x1f[k - 1]['charAt'](i));
                                        if (i < _0x6460x1e['length']) {
                                            const _0x6460x30 = getWholeChar(_0x6460x2b, i * 2);
                                            _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x30)
                                        }
                                    } else {
                                        if (k == 23) {
                                            const _0x6460x31 = getWholeChar(_0x6460x1f[k - 1], i * 2);
                                            _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x31);
                                            if (i < _0x6460x1e['length']) {
                                                _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x28['charAt'](i))
                                            }
                                        } else {
                                            if (k == 24) {
                                                const _0x6460x31 = getWholeChar(_0x6460x1f[k - 1], i * 2);
                                                _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x31);
                                                if (i < _0x6460x1e['length']) {
                                                    const _0x6460x30 = getWholeChar(_0x6460x2e, i * 2);
                                                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x30)
                                                }
                                            } else {
                                                if (k == 29) {
                                                    const _0x6460x31 = getWholeChar(_0x6460x1f[k - 1], i * 2);
                                                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x31);
                                                    if (i < _0x6460x1e['length']) {
                                                        const _0x6460x30 = getWholeChar(_0x6460x26, i * 2);
                                                        _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x30)
                                                    }
                                                } else {
                                                    if (k == 30 || k == 31) {
                                                        const _0x6460x31 = getWholeChar(_0x6460x1f[k - 1], i * 2);
                                                        _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x31);
                                                        if (i < _0x6460x1e['length']) {
                                                            _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x2d['charAt'](i))
                                                        }
                                                    } else {
                                                        if (k == 36) {
                                                            const _0x6460x31 = getWholeChar(_0x6460x1f[k - 1], i * 2);
                                                            _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x31);
                                                            if (i < _0x6460x1e['length']) {
                                                                const _0x6460x30 = getWholeChar(_0x6460x2a, i * 2);
                                                                _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x30)
                                                            }
                                                        } else {
                                                            if (k == 37) {
                                                                _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x1f[k - 1]['charAt'](i));
                                                                if (i < _0x6460x1e['length']) {
                                                                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1e['charAt'](i),'g'), _0x6460x2f['charAt'](i))
                                                                }
                                                            } else {
                                                                if (k >= 23 && k <= 36 && k != 35) {
                                                                    const _0x6460x31 = getWholeChar(_0x6460x1f[k - 1], i * 2);
                                                                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x31)
                                                                } else {
                                                                    _0x6460x24[k] = _0x6460x24[k]['replace'](new RegExp(_0x6460x1d['charAt'](i),'g'), _0x6460x1f[k - 1]['charAt'](i))
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(_0x6460x24)
    console.log(_0x6460x23)
}