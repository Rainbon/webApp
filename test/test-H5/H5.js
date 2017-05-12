/**
 * Created by jake on 2017/5/11.
 */

// 内容管理对象

var H5 = function () {

    this.id = ('h5_' + Math.random()).replace('.','_');
    this.el = $('<div class="h5" id="'+this.id+'">').hide();
    this.page = [];
    $('body').append(this.el);


    //添加一个页
    /**
     * @param {string} name 组件的名称，会加入到className中
     * @param {string} text 页面内的默认文本
     * @return ｛H5｝H5对象 ， 可以重复使用h5对象支持的方法
     */
    this.addPage = function (name,text) {
        var page = $('<div class="h5_page section">');

        if (name != undefined){
            page.addClass('h5_page_' + name);
        }

        if (text != undefined){
            page.text(text);
        }
        this.el.append(page);
        this.page.push(page);
        return this;
    }

    //添加一个组件
    this.addComponent = function (name,cfg) {
        var cfg = cfg || {};
        cfg = $.extend({
            type: 'base'
        },cfg)

        // console.log(cfg.type);

        var component;
        var page = this.page.slice(-1)[0];
        // console.log(page);

        switch (cfg.type){
            case 'base':
                component = new H5ComponentBase(name,cfg);
                break;
            default:
        }
        // console.log(component);
        page.append(component);

        return this;
    }

    //页面呈现
    this.loader = function () {
        this.el.fullpage({
            'onLeave':function (index,nextIndex,direction) {
                $(this).find('.h5_component').trigger('onLeave')
            },
            'afterLoad':function (anchorLink,index) {
                $(this).find('.h5_component').trigger('onLoad')
            }
        });
        this.page[0].find('.h5_component').trigger('onLoad');
        this.el.show();
    }
    return this;
}