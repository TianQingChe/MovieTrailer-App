function changeTitle(){
    window.$('#app').html('Parcel 打包包')
}

// console.log(typeof $);

setTimeout(function() {
    changeTitle()
}, 2000)

// changeTitle()