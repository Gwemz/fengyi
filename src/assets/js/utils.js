function formatDate(value){
    if (value == null) {
        return '';
    } else {
        return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    }
}
// module.exports = {
//     formatDate
// }