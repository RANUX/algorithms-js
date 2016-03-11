function getObjectName(obj) {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((obj).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
}
exports.getObjectName = getObjectName;
;

//# sourceMappingURL=ObjectHelpers.js.map
