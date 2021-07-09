import toSankeyImageData from "./toSankeyImageData";

/**
 * 桑基图
 */

var initConfig = function (attr, that) {

    if (attr.width == null) attr.width = that._width;
    if (attr.height == null) attr.height = that._height;

    attr._data = toSankeyImageData(attr.data, attr.width, attr.height);

};

export default ['number', 'json', '$getLoopColors', function ($number, $json, $getLoopColors) {
    return {
        attrs: {

            // 大小和位置
            x: $number(0)(true),
            y: $number(0)(true),
            width: $number(null)(true),
            height: $number(null)(true),

            // 数据
            // {nodes:[{name:""},...],links:[{source:"",target:"",value:""},...]}
            data: $json()
        },
        link: function (painter, attr) {
            initConfig(attr, this);

            // 获取颜色
            var nodeColors = $getLoopColors(attr.data.nodes.length);
            var lineColors = $getLoopColors(attr.data.nodes.length, 0.5);

            painter.config({
                "font-size": 10
            });

            // 绘制
            var key, node;
            for (key in attr._data) {
                node = attr._data[key];

                // 结点
                painter.config('fillStyle', nodeColors.pop()).fillRect(node.left, node.top, node.width, node.height);

                // 连线

                // 文字
                painter.config('fillStyle', '#555555').fillText(key, node.left + node.width, node.top + node.height * 0.5);

            }

            console.log(attr._data);

        }
    };
}];
