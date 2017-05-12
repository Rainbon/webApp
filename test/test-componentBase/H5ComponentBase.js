/**
 * Created by jake on 2017/5/10.
 */
var H5ComponentBase = function (name,cfg) {
    var cfg = cfg || {};
    var id = ('h5_c'+ Math.random()).replace('.','_');

//    将当前的组件类添加到样式中进行标记
    var cls = 'h5_component_'+cfg.type;
    var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');

    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);
    component.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');

    if (cfg.center === true){
        component.css({
            marginLeft: (cfg.width/4 * -1) + 'px',
            left: '50%'
        })
    }

    component.on({
        'onLoad':function () {
            component.addClass(cls + '_load').removeClass(cls + '_leave');
            // component.animateIn && component.animate(cfg.animateIn);
            cfg.animateIn&&component.animate(cfg.animateIn);
            return false;
        },
        'onLeave':function () {
            component.addClass(cls + '_leave').removeClass(cls + '_load');
            // component.animateOut && component.animate(cfg.animateOut);
            cfg.animateOut&&component.animate(cfg.animateOut);
            return false;
        }
    })

    return component;
}