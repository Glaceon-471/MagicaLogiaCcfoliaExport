/**
 * @param  {...String} args
 * @returns {String}
 */
String.prototype.format = function(...args) {
    var base = this;
    for (const [i, arg] of args.entries()) {
        base = base.replace(new RegExp(`\\{${i}\\}`, "g"), arg);
    }
    return base;
}

/**
 * @param {String} text 
 * @returns {Boolean}
 */
function CheckBlank(text) {
    return typeof text != "string" || text.length <= 0;
}

// 設定系
/**
 * @param {JQuery.htmlString} html 
 */
function AllOption(html) {
    return $(`#option > #all ${html}`);
}

/**
 * @param {JQuery.htmlString} html 
 */
function LibraryOption(html) {
    return $(`#option > #library ${html}`);
}

/**
 * @param {JQuery.htmlString} html 
 */
function AnchorOption(html) {
    return $(`#option > #anchor ${html}`);
}

/**
 * @param {JQuery.htmlString} html 
 */
function MemoOption(html) {
    return $(`#option > #memo ${html}`);
}

/**
 * @param {JQuery.htmlString} html 
 */
function ChatPaletteOption(html) {
    return $(`#option > #chat_palette ${html}`);
}

// 全体の形式
const all_format_type = AllOption("#format_type");
const all_add_brackets_magic_name = AllOption("#add_brackets_magic_name");
const all_add_brackets_designated_specialties = AllOption("#add_brackets_designated_specialties");
const all_add_p_reference_page = AllOption("#add_p_reference_page");
const all_mention_character_sheets_url = AllOption("#mention_character_sheets_url");

// 蔵書の形式
const library_custom_library_format = LibraryOption("custom_library_format");
const library_mention_magic_name = LibraryOption("#mention_magic_name");
const library_mention_magic_type = LibraryOption("#mention_magic_type");
const library_mention_designated_specialties = LibraryOption("#mention_designated_specialties");
const library_mention_goals = LibraryOption("#mention_goals");
const library_mention_mana = LibraryOption("#mention_mana");
const library_mention_effect_true_form = LibraryOption("#mention_effect_true_form");
const library_mention_reference_page = LibraryOption("#mention_reference_page");

// アンカーの形式
const anchor_mention_name = AnchorOption("#mention_name");
const anchor_mention_destiny = AnchorOption("#mention_destiny");
const anchor_mention_attribute = AnchorOption("#mention_attribute");

// メモの形式
const memo_mention_magic_name = MemoOption("#mention_magic_name");
const memo_mention_gender = MemoOption("#mention_gender");
const memo_mention_age = MemoOption("#mention_age");
const memo_mention_stage = MemoOption("#mention_stage");
const memo_mention_field = MemoOption("#mention_field");
const memo_mention_attribute = MemoOption("#mention_attribute");
const memo_mention_background_and_institution = MemoOption("#mention_background_and_institution");
const memo_mention_belief = MemoOption("#mention_belief");
const memo_mention_public_face = MemoOption("#mention_public_face");
const memo_mention_memo = MemoOption("#mention_memo");
const memo_mention_true_form = MemoOption("#mention_true_form");
const memo_mention_effect_true_form = MemoOption("#mention_effect_true_form");
const memo_mention_library = MemoOption("#mention_library");

// チャットパレットの形式
const chat_palette_mention_magic_name = ChatPaletteOption("#mention_magic_name");
const chat_palette_mention_true_form = ChatPaletteOption("#mention_true_form");
const chat_palette_mention_library = ChatPaletteOption("#mention_library");

all_format_type.on("change", () => {
    switch (all_format_type.val()) {
        case "standard":
            // 蔵書の形式
            library_mention_magic_name.prop("checked", true);
            library_mention_magic_type.prop("checked", false);
            library_mention_designated_specialties.prop("checked", true);
            library_mention_goals.prop("checked", false);
            library_mention_mana.prop("checked", true);
            library_mention_reference_page.prop("checked", false);
            
            // アンカーの形式
            anchor_mention_name.prop("checked", true);
            anchor_mention_destiny.prop("checked", true);
            anchor_mention_attribute.prop("checked", true);
            
            // メモの形式
            memo_mention_magic_name.prop("checked", true);
            memo_mention_gender.prop("checked", true);
            memo_mention_age.prop("checked", true);
            memo_mention_stage.prop("checked", true);
            memo_mention_field.prop("checked", false);
            memo_mention_attribute.prop("checked", false);
            memo_mention_background_and_institution.prop("checked", true);
            memo_mention_belief.prop("checked", false);
            memo_mention_public_face.prop("checked", true);
            memo_mention_memo.prop("checked", false);
            memo_mention_true_form.prop("checked", false);
            memo_mention_effect_true_form.prop("checked", false);
            memo_mention_library.prop("checked", false);
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.prop("checked", false);
            chat_palette_mention_true_form.prop("checked", true);
            chat_palette_mention_library.prop("checked", true);
            break;
        case "brief":
            // 蔵書の形式
            library_mention_magic_name.prop("checked", true);
            library_mention_magic_type.prop("checked", false);
            library_mention_designated_specialties.prop("checked", true);
            library_mention_goals.prop("checked", false);
            library_mention_mana.prop("checked", false);
            library_mention_reference_page.prop("checked", false);
            
            // メモの形式
            memo_mention_magic_name.prop("checked", true);
            memo_mention_gender.prop("checked", false);
            memo_mention_age.prop("checked", false);
            memo_mention_stage.prop("checked", true);
            memo_mention_field.prop("checked", false);
            memo_mention_attribute.prop("checked", false);
            memo_mention_background_and_institution.prop("checked", true);
            memo_mention_belief.prop("checked", false);
            memo_mention_public_face.prop("checked", true);
            memo_mention_memo.prop("checked", false);
            memo_mention_true_form.prop("checked", false);
            memo_mention_effect_true_form.prop("checked", false);
            memo_mention_library.prop("checked", false);
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.prop("checked", false);
            chat_palette_mention_true_form.prop("checked", false);
            chat_palette_mention_library.prop("checked", true);
            break;
        case "expansion":
            // 蔵書の形式
            library_mention_magic_name.prop("checked", true);
            library_mention_magic_type.prop("checked", true);
            library_mention_designated_specialties.prop("checked", true);
            library_mention_goals.prop("checked", true);
            library_mention_mana.prop("checked", true);
            library_mention_reference_page.prop("checked", false);
            
            // メモの形式
            memo_mention_magic_name.prop("checked", true);
            memo_mention_gender.prop("checked", true);
            memo_mention_age.prop("checked", true);
            memo_mention_stage.prop("checked", true);
            memo_mention_field.prop("checked", true);
            memo_mention_attribute.prop("checked", true);
            memo_mention_background_and_institution.prop("checked", true);
            memo_mention_belief.prop("checked", true);
            memo_mention_public_face.prop("checked", true);
            memo_mention_memo.prop("checked", false);
            memo_mention_true_form.prop("checked", true);
            memo_mention_effect_true_form.prop("checked", true);
            memo_mention_library.prop("checked", true);
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.prop("checked", true);
            chat_palette_mention_true_form.prop("checked", true);
            chat_palette_mention_library.prop("checked", true);
            break;
    }
});

$("#option div:not(#all) input[type=\"checkbox\"]").on("change", () => {
    all_format_type.val("custom");
});

all_format_type.trigger("change");

// 出力部分
/**
 * @param {JQuery.htmlString} type 
 * @returns 
 */
function GetOutput(type) {
    return [$(`#output > ${type} > #result`), $(`#output > ${type} > #copy`)];
}

function CheckURL(url) {
    if (/^https:\/\/character-sheets\.appspot\.com\/mglg\/edit\.html\?key=[\w-]+$/.test(url)) return 1;
    if (/^https:\/\/character-sheets\.appspot\.com\/mglg\/display\?key=[\w-]+$/.test(url)) return 2;
    if (/^https:\/\/character-sheets\.appspot\.com\/mglg\/display\?key=[\w-]+&ajax=1$/.test(url)) return 3;
    if (/^https:\/\/character-sheets\.appspot\.com\/mglg\/display\?key=[\w-]+&ajax=1&callback=ResultGenerate$/.test(url)) return 4;
    return 0;
}

function StartGenerate(isClick) {
    var url = character_sheets_url.val();
    switch (CheckURL(url)) {
        case 1:
            url = `${url.replace("edit.html", "display")}&ajax=1&callback=ResultGenerate`
            break;
        case 2:
            url += "&ajax=1&callback=ResultGenerate"
            break;
        case 3:
            url += "&callback=ResultGenerate"
            break;
        case 0:
            console.error(`"${url}"は対応していないリンクです`);
            if (isClick) alert(`"${url}"は対応していないリンクです`)
            return;
    }
    
    $.ajax({
        url: url,
        dataType: "jsonp",
        callback: "ResultGenerate",
        jsonp: false
    });
}

const BracketsMagicName = /^【.+】$/
/**
 * @param {String} name 
 */
function AddBracketsMagicName(name) {
    if (all_add_brackets_magic_name.prop("checked")) {
        if (BracketsMagicName.test(name)) return name;
        else return `【${name}】`;
    }
    else if (BracketsMagicName.test(name)) return name.match(BracketsMagicName)[0].substring(1, -1);
    else return name;
}

const BracketsDesignatedSpecialties = /^《.+》$/
const ExclusionBracketsDesignatedSpecialties = /可変/
/**
 * @param {String} name 
 */
function AddBracketsDesignatedSpecialties(name) {
    if (ExclusionBracketsDesignatedSpecialties.test(name)) return "可変";
    else if (all_add_brackets_designated_specialties.prop("checked")) {
        if (BracketsDesignatedSpecialties.test(name)) return name;
        else return `《${name}》`;
    }
    else if (BracketsDesignatedSpecialties.test(name)) return name.match(BracketsDesignatedSpecialties)[0].substring(1, -1);
    else return name;
}

const PReferencePage = /^.+P$/i
function AddPReferencePage(name) {
    if (all_add_p_reference_page.prop("checked")) {
        if (PReferencePage.test(name)) return name;
        else return `${name}P`;
    }
    else if (PReferencePage.test(name)) return name.match(PReferencePage)[0].substring(0, -1);
    else return name;
}

function ResultGenerate(data) {
    const url = character_sheets_url.val();
    const url_type = CheckURL(url);
    const library = [];
    const status = [];
    const params = [];
    const memo = [];
    const chat_palette = [];
    
    /**
     * @param {String} base 
     * @param  {...String} args 
     */
    function add_memo(base, ...args) {
        if (args.findIndex(x => CheckBlank(x)) != -1) {
            return;
        }
        memo.push(base.format(...args));
    }
    
    status.push({
        label: "魔力",
        value: 0,
        max: 0
    });
    status.push({
        label: "一時的魔力",
        value: 0,
        max: 0
    });
    
    for (const book of data.library) {
        const book_data = [];
        const status_label = [];
        if (!CheckBlank(book.name)) {
            if (library_mention_magic_name.prop("checked")) book_data.push(AddBracketsMagicName(book.name).replace("\n", " "));
            status_label.push(AddBracketsMagicName(book.name).replace("\n", " "));
        }
        if (library_mention_magic_type.prop("checked") && !CheckBlank(book.type)) book_data.push(book.type.replace("\n", " "));
        if (library_mention_designated_specialties.prop("checked") && !CheckBlank(book.skill)) book_data.push(AddBracketsDesignatedSpecialties(book.skill).replace("\n", " "));
        if (library_mention_goals.prop("checked") && !CheckBlank(book.target)) book_data.push(book.target.replace("\n", " "));
        if (!CheckBlank(book.cost)) {
            if (library_mention_mana.prop("checked")) book_data.push(book.cost.replace("\n", " "));
            status_label.push(book.cost.replace("\n", " "));
        }
        if (library_mention_reference_page.prop("checked") && !CheckBlank(book.page)) book_data.push(AddPReferencePage(book.page).replace("\n", " "));
        library.push(book_data.join(" "));
        
        status.push({
            label: status_label.join(" "),
            value: 0,
            max: !CheckBlank(data.base.source) ? Number.parseInt(data.base.source) : 0
        });
    }
    
    if (!CheckBlank(data.base.attack)) {
        params.push({
            "label": "攻撃力",
            value: data.base.attack
        });
    }
    if (!CheckBlank(data.base.defense)) {
        params.push({
            "label": "防御力",
            value: data.base.defense
        });
    }
    if (!CheckBlank(data.base.source)) {
        params.push({
            "label": "根源力",
            value: data.base.source
        });
    }
    
    if (memo_mention_magic_name.prop("checked") && !CheckBlank(data.base.magicname)) add_memo("魔法名 : {0}", data.base.magicname);
    if (memo_mention_gender.prop("checked") && !CheckBlank(data.base.sex)) add_memo("性別 : {0}", data.base.sex);
    if (memo_mention_age.prop("checked") && !CheckBlank(data.base.age)) add_memo("年齢 : {0}", data.base.age);
    if (memo_mention_stage.prop("checked") && !CheckBlank(data.base.level) && !CheckBlank(data.base.levelname)) add_memo("第{0}階梯{1}", data.base.level, data.base.levelname);
    if (memo_mention_field.prop("checked")) {
        var field;
        switch(data.base.domain) {
            case "a":
                field = "星";
                break;
            case "ab":
                field = "獣";
                break;
            case "bc":
                field = "力";
                break;
            case "cd":
                field = "歌";
                break;
            case "de":
                field = "夢";
                break;
            case "e":
                field = "闇";
                break;
        }
        add_memo("領域 : {0}", field);
    }
    if (memo_mention_attribute.prop("checked") && !CheckBlank(data.base.attack) && !CheckBlank(data.base.defense) && !CheckBlank(data.base.source))
        add_memo("攻撃力 : {0}, 防御力 : {1}, 根源力 : {2}", data.base.attack, data.base.defense, data.base.source);
    if (memo_mention_background_and_institution.prop("checked") && !CheckBlank(data.base.career)) add_memo("経歴/機関 : {0}", data.base.career);
    if (memo_mention_belief.prop("checked") && !CheckBlank(data.base.belief)) add_memo("信念 : {0}", data.base.belief);
    if (memo_mention_public_face.prop("checked") && !CheckBlank(data.base.cover)) add_memo("表の顔 : {0}", data.base.cover);
    if (memo_mention_memo.prop("checked") && !CheckBlank(data.base.memo)) add_memo("メモ :\n{0}", data.base.memo);
    if (memo_mention_true_form.prop("checked") && !CheckBlank(data.trueform.name)) add_memo("真の姿 : {0}", data.trueform.name);
    if (memo_mention_effect_true_form.prop("checked") && !CheckBlank(data.trueform.effect)) add_memo("真の姿の効果 : {0}", data.trueform.effect);
    if (memo_mention_library.prop("checked") && library.length > 0) {
        add_memo("蔵書 :\n{0}", library.join("\n"));
    }
    
    if (chat_palette_mention_magic_name.prop("checked") && !CheckBlank(data.base.magicname)) chat_palette.push(`@魔法名\n${data.base.magicname}`);
    if (chat_palette_mention_true_form.prop("checked") && !CheckBlank(data.trueform.name) && !CheckBlank(data.trueform.effect)) chat_palette.push(`@真の姿\n${data.trueform.name} ${data.trueform.effect}`);
    if (chat_palette_mention_library.prop("checked") && library.length > 0) chat_palette.push(`@蔵書\n${library.join("\n")}`);
    
    const json = {
        kind: "character",
        data: {
            name: data.base.covername,
            memo: memo.join("\n"),
            initiative: -1,
            externalUrl: all_mention_character_sheets_url.prop("checked") && url_type == 1 ? url : "",
            status: status,
            params: params,
            secret: true,
            commands: chat_palette.join("\n\n")
        }
    };
    ccfolia_result.val(JSON.stringify(json));
    dice_spec_result.val(JSON.stringify(json.data));
    memo_result.val(json.data.memo);
    chat_palette_result.val(json.data.commands);
}

const character_sheets_url = $("#character_sheets_url");
const conversion = $("#conversion");
const [ccfolia_result, ccfolia_copy] = GetOutput("#ccfolia");
const [dice_spec_result, dice_spec_copy] = GetOutput("#dice_spec");
const [memo_result, memo_copy] = GetOutput("#memo");
const [chat_palette_result, chat_palette_copy] = GetOutput("#chat_palette");

character_sheets_url.on("change", () => {
    StartGenerate(false);
});
conversion.on("click", () => {
    StartGenerate(true);
});
ccfolia_copy.on("click", () => {
    navigator.clipboard.writeText(ccfolia_result.val());
});
dice_spec_copy.on("click", () => {
    navigator.clipboard.writeText(dice_spec_result.val());
});
memo_copy.on("click", () => {
    navigator.clipboard.writeText(memo_result.val());
});
chat_palette_copy.on("click", () => {
    navigator.clipboard.writeText(chat_palette_result.val());
});

/*
$(document).ready(function () {
    $('#lastupdate').append('5Jan2025');
    
    $("#btnProcess").on('click', function () {
        var url = $('#inputURL').val().replace('http://', 'https://').replace('edit.html', 'display') + '&ajax=1&callback=doProfileGenerate';
        
        // JSONP call
        $.ajax({
            url: url,
            dataType: "jsonp",
            callback: "doProfileGenerate",
            jsonp: false
        });
    });
    
    // for Tekey Character Creation
    $("#btnTekey").on('click', function () {
        callCreateTekeyPC();
    });
    
    // Tekey Column Change
    var colData = {
        columns: "魔力:false:false,一時:false:true,呪句:false:false,攻撃力:false:true,防御力:false:true,根源力:false:true"
    };
    $("#btnTekeyCol").on('click', function () {
        callTekeyColChange(colData);
    });
    
    GenerateBackLink("tool");
});

function doProfileGenerate(data) {
    $("label[for='ccfChara']").text("ココフォリアのコマ作成");
    pcData = {}; // reset Tekey PC Create
    
    var profile = "";
    var equations = "";
    var lhs = "2D6>=";
    var library = "";
    
    profile = "『" + data["base"]["magicname"] + "』";
    profile += data["base"]["covername"] + "\n";
    profile += data["base"]["sex"] + "・" + data["base"]["age"] + "歳／第" + data["base"]["level"] + "階梯・" + data["base"]["career"] + "・" + data["base"]["cover"] + "\n";
    profile += "攻撃力" + data["base"]["attack"] + "・防御力" + data["base"]["defense"] + "・根源力" + data["base"]["source"] + "\n";
    profile += "真の姿：" + data["trueform"]["name"] + "／" + data["trueform"]["effect"] + "\n特技：";
    for (i = 0; i < data["learned"].length; i++) {
        if (data["learned"][i]["id"] != null) {
            profile += SkillConvert(data["learned"][i]["id"]) + "、";
            equations += lhs + "5 《" + SkillConvert(data["learned"][i]["id"]) + "》\n";
        }
    }
    profile = profile.slice(0, -1);
    profile += "\n魂の特技：" + data["soul"]["skill"] + "／領域：";
    equations += lhs + "6 《魂の特技：" + data["soul"]["skill"] + "》";
    switch(data["base"]["domain"]) {
        case "a":
            profile += "星";
            break;
        case "ab":
            profile += "獣";
            break;
        case "bc":
            profile += "力";
            break;
        case "cd":
            profile += "歌";
            break;
        case "de":
            profile += "夢";
            break;
        case "e":
            profile += "闇";
    }
    profile += "\nアンカー："
    for (i = 0; i < data["anchor"].length; i++) {
        profile += (data["anchor"][i]["name"] == null) ? "" : data["anchor"][i]["name"].split('\n').join('');
        profile += "（";
        profile += (data["anchor"][i]["destiny"] == null) ? "" : data["anchor"][i]["destiny"].split('\n').join('');
        profile += "・";
        profile += (data["anchor"][i]["attribute"] == null) ? ""　: data["anchor"][i]["attribute"].split('\n').join('');
        profile += "）、";
    }
    profile = profile.slice(0, -1);
    
    var libraryOption = $('#LibrarySelect').val();
    if (libraryOption == 1) {
        profile += "\n\n蔵書【魔法名（タイプ：指定特技）ページ・目標・コスト・効果】：\n";
        for (i = 0; i < data["library"].length; i++) {
            if ($('#nameB').prop('checked'))
                profile += (data["library"][i]["name"] == null) ? "" : "【" + data["library"][i]["name"].split('\n').join('') + "】";
            else
                profile += (data["library"][i]["name"] == null) ? "" : data["library"][i]["name"].split('\n').join('')
            profile += "（" + data["library"][i]["type"] + "：";
            if ($('#skillB').prop('checked'))
                profile += (data["library"][i]["skill"] == null) ? "" : "《" + data["library"][i]["skill"].split('\n').join('') + "》";
            else
                profile += (data["library"][i]["skill"] == null) ? "" : data["library"][i]["skill"].split('\n').join('');
            profile += "）";
            profile += (data["library"][i]["page"] == null) ? "" : ($('#page').prop('checked') ? "P" + data["library"][i]["page"].split('\n').join('') + "・" : data["library"][i]["page"].split('\n').join('') + "・");
            profile += (data["library"][i]["target"] == null) ? "" : data["library"][i]["target"].split('\n').join('');
            profile += "・";
            profile += (data["library"][i]["cost"] == null) ? "" : data["library"][i]["cost"].split('\n').join('');
            profile += "・";
            profile += (data["library"][i]["effect"] == null) ? "" : data["library"][i]["effect"].split('\n').join('');
            profile += "\n";
            
            if (data["library"][i]["name"] != null && data["library"][i]["name"] != "" && !(data["library"][i]["cost"] == null || data["library"][i]["cost"] == "なし")){
                library += ',{"label":"' + data["library"][i]["name"].split('\n').join('') + '","value":0,"max":0}';
            }
        }
    }
    else {
        profile += "\n\n蔵書：\n";
        for (i = 0; i < data["library"].length; i++) {
            if ($('#nameB').prop('checked'))
                profile += (data["library"][i]["name"] == null) ? "" : "【" + data["library"][i]["name"].split('\n').shift('') + "】";
            else
                profile += (data["library"][i]["name"] == null) ? "" : data["library"][i]["name"].split('\n').shift('');
            profile += "　" + data["library"][i]["type"] + "　";
            if ($('#skillB').prop('checked'))
                profile += (data["library"][i]["skill"] == null) ? "" : (data["library"][i]["skill"] == "可変" || data["library"][i]["skill"] == "なし") ? data["library"][i]["skill"] : "《" + data["library"][i]["skill"].split('\n').join('') + "》";
            else
                profile += (data["library"][i]["skill"] == null) ? "" : data["library"][i]["skill"].split('\n').join('');
            profile += "　";
            profile += (data["library"][i]["page"] == null) ? "" : ($('#page').prop('checked') ? "P" + data["library"][i]["page"].split('\n').join('') + "　" : data["library"][i]["page"].split('\n').join('') + "　");
            profile += (data["library"][i]["target"] == null) ? "" : data["library"][i]["target"].split('\n').join('');
            profile += "・";
            profile += (data["library"][i]["cost"] == null) ? "" : data["library"][i]["cost"].split('\n').join('');
            profile += "\n";
            
            if (data["library"][i]["name"] != null && data["library"][i]["name"] != "" && !(data["library"][i]["cost"] == null || data["library"][i]["cost"] == "なし")){
                library += ',{"label":"' + data["library"][i]["name"].split('\n').join('') + '","value":0,"max":0}';
            }
        }
    }
    
    var urlStr = $('#inputURL').val();
    if ($('#ccfChara').prop('checked')) {
        var ccfCreate = '{"kind":"character","data":{"name":"' + data["base"]["covername"].replaceAll('\\', '\\\\').replaceAll('\"', '\\\"') + '","memo":"' + profile.replaceAll('\\', '\\\\').replaceAll('\"', '\\\"') + '","externalUrl":"' + urlStr + '","commands":":魔力+\n:魔力-\n:一時+\n:一時-\n' + equations + '","status":[{"label":"魔力","value":0,"max":0},{"label":"一時","value":0,"max":0}' + library + '],"params":[{"label":"攻撃力","value":"' + data["base"]["attack"] + '"},{"label":"防御力","value":"' + data["base"]["defense"] + '"},{"label":"根源力","value":"' + data["base"]["source"] + '"}]}}';
        
        ccfCreate = ccfCreate.replaceAll('\n', '\\n');
        copyText(ccfCreate);
    }
    
    // for tekey create PC
    var tekeyValStr = "攻撃力:" + data["base"]["attack"] + ",防御力:" + data["base"]["defense"] + ",根源力:" + data["base"]["source"];
    pcData = {
        name: data["base"]["covername"],
        url: urlStr,
        values: tekeyValStr,
        //initiative: ""
    };
    
    var formula = $('#formula').prop('checked');
    if (formula) {
        profile += "\n----------\n\n" + equations;
    }
    
    // output result
    $('#PCProfile').val(profile);
}

function SkillConvert (skill) {
    var result = "";
    if (skill.indexOf("row0") > -1) {
        switch(skill) {
            case "skills.row0.name0":
                result = "黄金";
                break;
            case "skills.row0.name1":
                result = "肉";
                break;
            case "skills.row0.name2":
                result = "重力";
                break;
            case "skills.row0.name3":
                result = "物語";
                break;
            case "skills.row0.name4":
                result = "追憶";
                break;
            case "skills.row0.name5":
                result = "深淵";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row10") > -1) {
        switch(skill) {
            case "skills.row10.name0":
                result = "異界";
                break;
            case "skills.row10.name1":
                result = "エロス";
                break;
            case "skills.row10.name2":
                result = "円環";
                break;
            case "skills.row10.name3":
                result = "時";
                break;
            case "skills.row10.name4":
                result = "未来";
                break;
            case "skills.row10.name5":
                result = "死";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row1") > -1) {
        switch(skill) {
            case "skills.row1.name0":
                result = "大地";
                break;
            case "skills.row1.name1":
                result = "蟲";
                break;
            case "skills.row1.name2":
                result = "風";
                break;
            case "skills.row1.name3":
                result = "旋律";
                break;
            case "skills.row1.name4":
                result = "謎";
                break;
            case "skills.row1.name5":
                result = "腐敗";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row2") > -1) {
        switch(skill) {
            case "skills.row2.name0":
                result = "森";
                break;
            case "skills.row2.name1":
                result = "花";
                break;
            case "skills.row2.name2":
                result = "流れ";
                break;
            case "skills.row2.name3":
                result = "涙";
                break;
            case "skills.row2.name4":
                result = "嘘";
                break;
            case "skills.row2.name5":
                result = "裏切り";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row3") > -1) {
        switch(skill) {
            case "skills.row3.name0":
                result = "道";
                break;
            case "skills.row3.name1":
                result = "血";
                break;
            case "skills.row3.name2":
                result = "水";
                break;
            case "skills.row3.name3":
                result = "別れ";
                break;
            case "skills.row3.name4":
                result = "不安";
                break;
            case "skills.row3.name5":
                result = "迷い";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row4") > -1) {
        switch(skill) {
            case "skills.row4.name0":
                result = "海";
                break;
            case "skills.row4.name1":
                result = "鱗";
                break;
            case "skills.row4.name2":
                result = "波";
                break;
            case "skills.row4.name3":
                result = "微笑み";
                break;
            case "skills.row4.name4":
                result = "眠り";
                break;
            case "skills.row4.name5":
                result = "怠惰";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row5") > -1) {
        switch(skill) {
            case "skills.row5.name0":
                result = "静寂";
                break;
            case "skills.row5.name1":
                result = "混沌";
                break;
            case "skills.row5.name2":
                result = "自由";
                break;
            case "skills.row5.name3":
                result = "想い";
                break;
            case "skills.row5.name4":
                result = "偶然";
                break;
            case "skills.row5.name5":
                result = "歪み";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row6") > -1) {
        switch(skill) {
            case "skills.row6.name0":
                result = "雨";
                break;
            case "skills.row6.name1":
                result = "牙";
                break;
            case "skills.row6.name2":
                result = "衝撃";
                break;
            case "skills.row6.name3":
                result = "勝利";
                break;
            case "skills.row6.name4":
                result = "幻";
                break;
            case "skills.row6.name5":
                result = "不幸";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row7") > -1) {
        switch(skill) {
            case "skills.row7.name0":
                result = "嵐";
                break;
            case "skills.row7.name1":
                result = "叫び";
                break;
            case "skills.row7.name2":
                result = "雷";
                break;
            case "skills.row7.name3":
                result = "恋";
                break;
            case "skills.row7.name4":
                result = "狂気";
                break;
            case "skills.row7.name5":
                result = "バカ";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row8") > -1) {
        switch(skill) {
            case "skills.row8.name0":
                result = "太陽";
                break;
            case "skills.row8.name1":
                result = "怒り";
                break;
            case "skills.row8.name2":
                result = "炎";
                break;
            case "skills.row8.name3":
                result = "情熱";
                break;
            case "skills.row8.name4":
                result = "祈り";
                break;
            case "skills.row8.name5":
                result = "悪意";
                break;
            default:
                result = "";
        }
    }
    else if (skill.indexOf("row9") > -1) {
        switch(skill) {
            case "skills.row9.name0":
                result = "天空";
                break;
            case "skills.row9.name1":
                result = "翼";
                break;
            case "skills.row9.name2":
                result = "光";
                break;
            case "skills.row9.name3":
                result = "癒し";
                break;
            case "skills.row9.name4":
                result = "希望";
                break;
            case "skills.row9.name5":
                result = "絶望";
                break;
            default:
                result = "";
        }
    }
    
    return result;
}

function copyText(text) {
    var textArea = document.createElement("textarea");
    
    // temp text area
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        var success = document.execCommand('copy');
        if (success) {
            $("label[for='ccfChara']").text("コピーしました");
        }
    }
    catch (err) {
        alert('コマ作りのコードをコピーできませんでした。');
    }
    
    document.body.removeChild(textArea);
}
*/