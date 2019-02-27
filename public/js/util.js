function findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


function reloadNumberBtn() {
    $(".numInput").bootstrapNumber({
        upClass: 'primary',
        downClass: 'danger',
        center: true
    });
}