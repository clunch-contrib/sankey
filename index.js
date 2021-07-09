import toSankeyImageData from "./toSankeyImageData";

/**
 * 桑基图
 */

var initConfig = function (attr, that) {

    if (attr.width == null) attr.width = that._width;
    if (attr.height == null) attr.height = that._height;

    attr._data = toSankeyImageData(attr.data, attr.width, attr.height, attr.x, attr.y);

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
            var lineColors = $getLoopColors(attr.data.nodes.length, 0.2);

            painter.config({
                "font-size": 10
            });

            // 先绘制连线
            var key, node, tNode, i, _helpDis;
            for (key in attr._data) {
                node = attr._data[key];

                painter.config('fillStyle', lineColors.pop());
                // 连线
                for (i = 0; i < node.nexts.length; i++) {
                    tNode = attr._data[node.nexts[i].name];

                    _helpDis = (tNode.left - (node.left + node.width)) * 0.5;

                    painter
                        .beginPath()
                        .moveTo(node.left + node.width, node.nextTops[i])
                        .bezierCurveTo(node.left + node.width + _helpDis, node.nextTops[i], tNode.left - _helpDis, tNode.preTops[0], tNode.left, tNode.preTops[0])
                        .lineTo(tNode.left, tNode.preTops[1])
                        .bezierCurveTo(tNode.left - _helpDis, tNode.preTops[1], node.left + node.width + _helpDis, node.nextTops[i + 1], node.left + node.width, node.nextTops[i + 1])
                        .fill();
                    tNode.preTops.shift();
                }

            }

            // 再绘制别的
            for (key in attr._data) {
                node = attr._data[key];

                // 结点
                painter.config('fillStyle', nodeColors.pop()).fillRect(node.left, node.top, node.width, node.height);

                // 文字
                painter.config('fillStyle', '#555555').fillText(key, node.left + node.width, node.top + node.height * 0.5);

            }

        }
    };
}];
