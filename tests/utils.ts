export function getTapResults(result) {
    var newLine = '\r\n';
    var template = '1..' + (result.passes.length + result.errors.length).toString() + newLine;

    for (var i = 0; i < result.errors.length; i++) {
        template += 'not ok ' + result.errors[i].message + ' ' + result.errors[i].testName + "." + result.errors[i].funcName + newLine;
    }

    for (var i = 0; i < result.passes.length; i++) {
        template += 'ok ' + result.passes[i].testName + "." + result.passes[i].funcName + newLine;
    }

    return template;
}