// Safe parsing of JS objects, returns {} if failure
const parsex = (obj, keys, returner) => {
    let holder = obj;
    keys.forEach(key => {
        if (!holder[key]) { return typeof(returner) !== 'undefined' ? holder = returner : holder = {} }
        return holder = holder[key];
    }); 
    return holder;
}

module.exports = parsex;
