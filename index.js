
/**
 * 桑基图
 */

var initConfig = function (attr, that) {



};

export default ['number', 'json', '$getLoopColors', '$rotate', function ($number, $json, $getLoopColors, $rotate) {
    return {
        attrs: {



            // 数据
            // [{name:"",value:""},...]
            data: $json()
        },
        region: {
            default: function (render, attr) {
                initConfig(attr, this);



            }
        },
        link: function (painter, attr) {
            initConfig(attr, this);



        }
    };
}];
