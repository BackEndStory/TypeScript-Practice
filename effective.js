function shouldUpdate(oldProps, newProps) {
    var k;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k]) {
            if (k !== 'onClick')
                return true;
        }
    }
    return false;
}

shouldUpdate()