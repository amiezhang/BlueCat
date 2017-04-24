//取文章的图片
function pickImgs(post) {
    var content = post.content.toString();
    var imgRe = /<img.*?src=['|"].*?['|"].*?>/gim;
    var urlRe = /['|"](.*?)['|"]/i;
    var imgUrlsArr = content.match(imgRe);
    var data = [];
    imgUrlsArr&&imgUrlsArr.forEach(function (item) {
        data.push(item.match(urlRe)[0].replace(/"/g,""));
    });
    return data;
}

//最新置顶
function sortPostsFunc(posts,config,page) {

    var datas = posts.data.sort(function(a, b){
            return b.date - a.date;
    });
    var begin = page.prev*config.per_page;
    return datas.slice(begin, begin + config.per_page);
}

hexo.extend.helper.register('pickImgs',pickImgs);
hexo.extend.helper.register('sortPosts',sortPostsFunc);