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
    },

    /**
     * 解析url中的host
     * @param {string} url 待解析的url
     * @return {string} url中的host
     **/
    parseHost(url) {
        var surl = url.split('?')[0];
        var result = surl.match(/[http|https]:\/\/(.*[\.com|\.cn|\.tv])\/.+/);
        if (result && result.length > 0) {
            return result[1];
        } else {
            var result = surl.match(/[http|https]:\/\/([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)\/.+/);
            return result && result.length > 0 ? result[1] : '';
        }
        return '';
    },

    parseUrlParams(url) {
        var surl = url.split('?')[1];
        if (!surl) {
            return null;
        }
        var surlList = surl.split('&');
        let result = {};
        for (let i = 0, len = surlList.length; i < len; i++) {
            let str = surlList[i];
            let paramList = str.split('=');
            result[paramList[0]] = paramList.length > 1 
                ? paramList[1] 
                : '';
        }
        return result;
    },

    /**
     * @desc 获取 UA
     */
    getUA() {
        let ua = navigator.userAgent.toLowerCase();

        let mobileSafari = /iPhone|iPad|iPod/i.test(ua)
                && /iPhone|iPod|iPad/i.test(navigator.platform) 
                && /Safari\/[\d\.]+$/.test(ua);

        return {
            isSafari: mobileSafari,
            isBaidu: /baidu/.test(ua),
            isUCBrowser: /ucbrowser/.test(ua),
            isQQBrowser: /qqbrowser/.test(ua),
            isWeixin: /micromessenger/.test(ua) || /weixin/.test(ua),
            isAndroid: /android/.test(ua),
            isIOS: /iphone/.test(ua) || /ipad/.test(ua) || /itouch/.test(ua) || /ipod/.test(ua),
            isFirefox: /firefox/.test(ua),
            isImgotv: /imgo/.test(ua),
            isBaiduBrowser: /baidubrowser/.test(ua),
            isChrome: /chrome/.test(ua)
        };
    },

    /**
     * @desc 尝试打开 APP
     * @param vid
     * @param time
     * @param callback
     */
    tryOpenApp(cb, time = 0, vid) {
        let url = vid ? `imgotv://player?videoId=${vid}&time=${parseInt(time)}` :
            "imgotv://player";

        let timeout1 = setTimeout(() => window.location.href = url, 10);

        let timeout2 = setTimeout(() => cb(), 1500);    // 1.5s 是经验值
    },

    /**
     * @desc 调起 APP
     * @param scheme app scheme
     * @param b download url
     */
    startApp(scheme, url) {
        let ua = navigator.userAgent;
        let t1 = +new Date();
        let iframe = document.querySelector('open_app_iframe');
        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.setAttribute("id", "open_app_iframe");
            iframe.setAttribute("width", "1px");
            iframe.setAttribute("height", "1px");

            let body = document.getElementsByTagName('body')[0];
            document.body.appendChild(iframe);
        }


        if (/Chrome/i.test(ua) && !/Version\/4/.test(ua)) {
            var i = /Chrome\/(\d{2})/i.exec(navigator.userAgent);
            if (i && parseInt(i[1]) < 35)
                location.href = scheme;
            else {
                var page = window.open(scheme);
                let m = setTimeout(function () {
                    clearTimeout(m);
                    page.close();
                }, 1 * 1000);
            }
        } else {
            if (/iPhone OS 9/i.test(ua)) {
                location.href = scheme;
            } else {
                iframe.setAttribute("src", scheme);
            }
        }

        let n = setTimeout(function () {
            clearTimeout(n);
            let t2 = +new Date();
            if ((t2 - t1 < 2 * 1000) && url) {
                let p = setTimeout(function () {
                    clearTimeout(p);
                    location.href = url;
                }, 200);
            }
        }, 1 * 1000);
    },

    /**
     * @desc 下载 APP
     * @param vid
     * @param time
     */
    downloadAPK(vid, time = 0) {

        let appUrl = {
            android: 'http://www.mgtv.com/v/m/v/2015/mandroid/',
            weixin: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.hunantv.imgo.activity',
            ios: 'https://itunes.apple.com/cn/app/id629774477?pt=355474&ct=mgtv&mt=8'
        };

        if (this.getUA().isWeixin || (this.getUA().isQQBrowser && this.getUA().isAndroid)) {
            window.location.href = appUrl.weixin;
            return;
        }

        let url = this.getUA().isIOS ? appUrl.ios : appUrl.android;

        let scheme = vid ? `imgotv://player?videoId=${vid}&time=${parseInt(time)}` :
            "imgotv://player";

        this.startApp(scheme, url);
    },

    /**
     * @desc 微信分享
     * @param info 分享信息
     */
    wxShare({
        title = "",
        link = "",
        imgUrl = "",
        desc = ""
        }) {

        let url = 'http://v.api.mgtv.com/weixin/sign';

        this.fetch(url, {
            url: location.href.split('#')[0]
        }).then(data => {

            if (data.status == 200) {

                Wx.config({
                    debug: false,
                    appId: data.data.appId,
                    timestamp: data.data.timestamp,
                    nonceStr: data.data.nonceStr,
                    signature: data.data.signature,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
                });

                Wx.ready((e) => {
                    // 分享到朋友圈
                    Wx.onMenuShareTimeline({title, link, imgUrl});

                    // 分享给朋友
                    Wx.onMenuShareAppMessage({title, desc, link, imgUrl});
                });

            }
        });

    },

    /**
     * @desc 获取系统信息
     * @returns {string}
     * @private
     */
    getOS() {
        let userAgent = navigator.userAgent.toLowerCase(),
            os = {
                ipad: /ipad/.test(userAgent),
                iphone: /iphone/.test(userAgent),
                android: /android/.test(userAgent),
                win: /windows/.test(userAgent),
            };

        for (let k in os) {
            if (os[k]) {
                return k;
            }
        }
        return 'other';
    },

    /**
     * @desc 获取时间戳
     * @returns {string}
     * @private
     */
    getTime() {
        let d = new Date();
        let format = 'yyyyMMddhhmmss';

        let o = {
            "M+": d.getMonth() + 1,
            "d+": d.getDate(),
            "h+": d.getHours(),
            "m+": d.getMinutes(),
            "s+": d.getSeconds()
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (let k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }

        }

        return format;
    }
}