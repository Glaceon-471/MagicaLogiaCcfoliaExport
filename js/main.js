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