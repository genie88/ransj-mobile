var MessageBox = {
    show: function() {
        var mMessage = (typeof(arguments[0]) != "undefined") ? arguments[0] : "恭喜您，商品已成功加入购物车";
        var autotime = (typeof(arguments[1]) != "undefined") ? arguments[1] : 3500;
        var effect = (typeof(arguments[2]) != "undefined") ? arguments[2] : "scroll";
        var isOK = (typeof(arguments[3]) != "undefined") ? arguments[3] : true;
        if (isOK) {
            var el = $('<div class="m-global-tips-box"><dl class="clearfix" style="font-size:14.4px;color:white;"><dd><img style="display:block;width:35px;height:35px;margin:0px auto 5px;" src="' + root() + '/common/img/others/happy.png" />' + mMessage + "</dd></dl></div>")
        } else {
            var el = $('<div class="m-global-tips-box"><dl class="clearfix" style="font-size:14.4px;color:white;"><dd><img style="display:block;width:35px;height:35px;margin:0px auto 5px;"  src="' + root() + '/common/img/others/surprised.png" />' + mMessage + "</dd></dl></div>")
        }
        $("body").append(el);
        switch (effect) {
        case "downslide":
            el.addClass("m-ani-in").delay(autotime).show(200,
            function() {
                var $this = $(this);
                $this.removeClass("m-ani-in").addClass("m-ani-out").delay(1000).hide(0,
                function() {
                    $this.remove()
                })
            });
            break;
        default:
            el.delay(autotime).fadeOut(200,
            function() {
                $(this).remove()
            });
            break
        }
    },
    warning: function() {},
    notice: function() {},
    error: function() {
        var mMessage = (typeof(arguments[0]) != "undefined") ? arguments[0] : "亲，您的商品没有成功加入购物车，刷新一下试试哦~";
        var confirmCallback = arguments[1];
        var warning = (typeof(arguments[2]) != "undefined") ? arguments[2] : "操作失败！";
        var mboxel = $("body").data("mbox:error");
        if (!$.isEmptyObject(mboxel)) {
            mboxel.remove()
        }
        var el = $('<div class="m-global-tips"><dl class="clearfix"><dt class="m-global-failtips"></dt><dd><p>' + warning + "</p>" + mMessage + '</dd></dl><div class="text-center m-global-btngroup"></div></div>');
        var confirmBtn = $("<button>", {
            "type": "button",
            "class": "btn btn-default confirm",
            "text": "确 定",
            "click": function() {
                el.fadeOut(200,
                function() {
                    $(this).remove();
                    if ($.isFunction(confirmCallback)) {
                        confirmCallback()
                    }
                    $("body").removeData("mbox:error")
                })
            }
        });
        el.find(".m-global-btngroup").append(confirmBtn);
        $("body").append(el);
        $("body").data("mbox:error", el)
    },
    errorFadeout: function() {
        var mMessage = (typeof(arguments[0]) != "undefined") ? arguments[0] : "错误";
        var mboxel = $("body").data("mbox:errorFadeout");
        if (!$.isEmptyObject(mboxel)) {
            mboxel.remove()
        }
        var el = $('<div class="m-global-tips"><dl class="clearfix"><dt class="m-global-failtips"></dt><dd><p>操作失败！</p>' + mMessage + "</dd></dl></div>");
        $("body").append(el);
        $("body").data("mbox:errorFadeout", el);
        el.delay(2000).fadeOut(200,
        function() {
            $(this).remove();
            $("body").removeData("mbox:errorFadeout")
        })
    },
    confirm: function() {
        var mMessage = (typeof(arguments[0]) != "undefined") ? arguments[0] : "真的要删除？";
        var confirmCallback = arguments[1];
        var cancelCallback = arguments[2];
        var temp1 = "";
        var temp2 = "";
        var temp3 = "";
        if (confirmCallback == "deleteItem") {
            temp1 = arguments[3];
            temp2 = arguments[4];
            temp3 = arguments[5]
        }
        if (confirmCallback == "deleteAddr") {
            temp1 = arguments[3]
        }
        if (confirmCallback == "cancleTgOrder") {
            temp1 = arguments[3]
        }
        var mboxel = $("body").data("mbox:confirm");
        if (!$.isEmptyObject(mboxel)) {
            mboxel.remove()
        }
        var el = $('<div class="m-global-tips-box" style="left:10%;width:80%;padding-bottom:8px;letter-spacing:2px;"><dl class="clearfix"><dd ><img style="display:block;width:35px;height:35px;margin:0px auto 10px;"  src="' + root() + '/common/img/others/sad.png" />' + mMessage + '</dd></dl><div class="text-center m-global-btngroup"></div></div>');
        var confirmBtn = $("<button>", {
            "type": "button",
            "class": "btn btn-default cancel",
            "style": ";letter-spacing:3px;float:left;margin:.95rem 0px .95rem 5px ;padding:3px 6px;font-size:14.4px;background:#afc5cd;height:35px;width:40%;margin-right:5%;color:#FFF;border: none;",
            "text": "取消",
            "click": function() {
                el.fadeOut(200,
                function() {
                    $(this).remove();
                    if ($.isFunction(cancelCallback)) {
                        cancelCallback()
                    }
                    $("body").removeData("mbox:confirm")
                })
            }
        });
        var cancelBtn = $("<button>", {
            "type": "button",
            "class": "btn btn-default confirm",
            "style": ";letter-spacing:3px;float:right;padding:3px 6px;margin:.95rem 5px .95rem 0px; font-size:14.4px;background:#8bb7a0;height:35px;width:40%;color:#FFF;border: none;",
            "text": "确定",
            "click": function() {
                el.fadeOut(200,
                function() {
                    $(this).remove();
                    if (confirmCallback == "deleteItem") {
                        deleteItem(temp1, temp2, temp3)
                    } else {
                        if (confirmCallback == "cancelOrder") {
                            cancelOrder()
                        } else {
                            if (confirmCallback == "deleteAddr") {
                                deleteAddr(temp1)
                            } else {
                            	if(confirmCallback =="cancleTgOrder"){
                            		
                            		cancleTgOrder(temp1)
                            	}else if ($.isFunction(confirmCallback)) {
                                    confirmCallback()
                                }
                            }
                        }
                    }
                    $("body").removeData("mbox:confirm")
                })
            }
        });
        el.find(".m-global-btngroup").append(confirmBtn);
        el.find(".m-global-btngroup").append("&nbsp;&nbsp;&nbsp;&nbsp;");
        el.find(".m-global-btngroup").append(cancelBtn);
        $("body").append(el);
        $("body").data("mbox:confirm", el)
    },
    loading: function() {
        var mboxel = $("body").data("mbox:loading");
        if (!$.isEmptyObject(mboxel)) {
            mboxel.remove()
        }
        var el = $('<div class="m-component-loading"><span class="glyphicon fdayicon fdayicon-loading"></span></div>');
        $("body").append(el);
        $("body").data("mbox:loading", el)
    },
    unloading: function() {
        var mboxel = $("body").data("mbox:loading");
        if (!$.isEmptyObject(mboxel)) {
            mboxel.remove()
        }
    }
};