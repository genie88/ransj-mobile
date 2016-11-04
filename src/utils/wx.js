export default {
    
    /**
     * @desc 修复微信下更新 title 的 bug
     * @param title
     */
    setTitle (title) {
        document.title = title;
        let body = document.getElementsByTagName('body')[0];
        let iframe = document.createElement("iframe");
        iframe.setAttribute("width", "1px");
        iframe.setAttribute("height", "1px");
        iframe.setAttribute("src", "/images/icon.png");    // 这里写死了地址

        iframe.addEventListener('load', e => {
            let time = setTimeout(e => {
                document.body.removeChild(iframe);
                clearTimeout(time);
                time = null;
            }, 0);
        });
        document.body.appendChild(iframe);
    },

    /**
     * @desc 百度统计pv上报
     * @param title
     */
    statPV(url) {
        _hmt.push(['_trackPageview', url]);
    }
}