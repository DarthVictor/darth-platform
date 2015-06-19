/**
 * Created by DarthVictor on 13.06.2015.
 */
function Entity(id) {
    if (id == 1) {
        return new AnimalsData;
    }
    else {
        throw new Error("Unimplemented");
    }
}
var AnimalsData = (function () {
    function AnimalsData() {
        this.fields = [{
            Name: "Type",
            DataType: "STRING",
            TextPattern: "SIMPLE",
            Required: true,
        }, {
            Name: "Name",
            DataType: "STRING",
            TextPattern: "SIMPLE",
            Required: true,
        }, {
            Name: "Age",
            DataType: "INTEGER",
            Required: false,
        }, {
            Name: "BirthDate",
            DataType: "DATE",
            Required: false,
        }];
        this.data = [
            {
                "Type": "monkey",
                "Name": "Abu",
                "Age": 6,
                "BirthDate": "1145-05-17"
            },
            {
                "Type": "ork",
                "Name": "Schrek",
                "Age": 36,
                "BirthDate": "1326-08-07"
            },
            {
                "Type": "girafe",
                "Name": "Melman",
                "Age": 12,
                "BirthDate": "1996-11-21"
            }
        ];
    }
    AnimalsData.prototype.row = function (id) {
        return new Promise(function (resolve, reject) {
            resolve({
                fields: this.fields,
                msg: [],
                displayType: "Row",
                entityTypeId: 1,
                data: this.data[id]
            });
        });
    };
    AnimalsData.prototype.list = function () {
        return new Promise(function (resolve, reject) {
            resolve({
                fields: this.fields,
                msg: [],
                displayType: "Row",
                entityTypeId: 1,
                data: this.data
            });
        });
    };
    return AnimalsData;
})();

var DataTypes;
(function (DataTypes) {
    DataTypes[DataTypes["ATTACHMENT"] = 0] = "ATTACHMENT";
    DataTypes[DataTypes["STRING"] = 1] = "STRING";
    DataTypes[DataTypes["TEXT"] = 2] = "TEXT";
    DataTypes[DataTypes["DATE"] = 3] = "DATE";
    DataTypes[DataTypes["DATETIME"] = 4] = "DATETIME";
    DataTypes[DataTypes["TIME"] = 5] = "TIME";
    DataTypes[DataTypes["INTEGER"] = 6] = "INTEGER";
    DataTypes[DataTypes["FLOAT"] = 7] = "FLOAT";
    DataTypes[DataTypes["BOOLEAN"] = 8] = "BOOLEAN";
    DataTypes[DataTypes["LABEL"] = 9] = "LABEL";
    DataTypes[DataTypes["VIRTUAL"] = 10] = "VIRTUAL";
    DataTypes[DataTypes["DICTIONARY"] = 11] = "DICTIONARY";
    DataTypes[DataTypes["COMPLEX"] = 12] = "COMPLEX";
})(DataTypes || (DataTypes = {}));
;
var Scalarity;
(function (Scalarity) {
    Scalarity[Scalarity["SCALAR"] = 0] = "SCALAR";
    Scalarity[Scalarity["VECTOR"] = 1] = "VECTOR";
})(Scalarity || (Scalarity = {}));
;
var TextPatterns;
(function (TextPatterns) {
    TextPatterns[TextPatterns["SIMPLE"] = 0] = "SIMPLE";
    TextPatterns[TextPatterns["CODE"] = 1] = "CODE";
    TextPatterns[TextPatterns["RICHTEXT"] = 2] = "RICHTEXT";
})(TextPatterns || (TextPatterns = {}));
;
var StringPatterns;
(function (StringPatterns) {
    StringPatterns[StringPatterns["SIMPLE"] = 0] = "SIMPLE";
    StringPatterns[StringPatterns["PASSWORD"] = 1] = "PASSWORD";
    StringPatterns[StringPatterns["EMAIL"] = 2] = "EMAIL";
    StringPatterns[StringPatterns["URL"] = 3] = "URL";
    StringPatterns[StringPatterns["PHONE"] = 4] = "PHONE";
})(StringPatterns || (StringPatterns = {}));
;
var DictionaryPatterns;
(function (DictionaryPatterns) {
    DictionaryPatterns[DictionaryPatterns["ADDABLE_AUTOMPLETE"] = 0] = "ADDABLE_AUTOMPLETE";
    DictionaryPatterns[DictionaryPatterns["ADDABLE_COMBOBOX"] = 1] = "ADDABLE_COMBOBOX";
    DictionaryPatterns[DictionaryPatterns["AUTOMPLETE"] = 2] = "AUTOMPLETE";
    DictionaryPatterns[DictionaryPatterns["COMBOBOX"] = 3] = "COMBOBOX";
})(DictionaryPatterns || (DictionaryPatterns = {}));
;
var VirtualStyles;
(function (VirtualStyles) {
    VirtualStyles[VirtualStyles["GRID_TABLE"] = 0] = "GRID_TABLE";
    VirtualStyles[VirtualStyles["SIMPLE_TABLE"] = 1] = "SIMPLE_TABLE";
    VirtualStyles[VirtualStyles["TREE_TABLE"] = 2] = "TREE_TABLE";
    VirtualStyles[VirtualStyles["PIVOT_TABLE"] = 3] = "PIVOT_TABLE";
    VirtualStyles[VirtualStyles["SCHEDULER"] = 4] = "SCHEDULER";
    VirtualStyles[VirtualStyles["SCHEDULER_TIMELINE"] = 5] = "SCHEDULER_TIMELINE";
    VirtualStyles[VirtualStyles["BAR_CHART"] = 6] = "BAR_CHART";
    VirtualStyles[VirtualStyles["LINE_CHART"] = 7] = "LINE_CHART";
    VirtualStyles[VirtualStyles["PIE_CHART"] = 8] = "PIE_CHART";
})(VirtualStyles || (VirtualStyles = {}));



var DarthPlatform;
(function (DarthPlatform) {
    var HelloWorld = (function () {
        function HelloWorld() {
            alert('Hello World');
        }
        return HelloWorld;
    })();
    DarthPlatform.HelloWorld = HelloWorld;
})(DarthPlatform || (DarthPlatform = {}));
