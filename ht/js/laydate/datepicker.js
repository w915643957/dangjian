
//年选择器
function yearPicker(id) {
    laydate.render({
        elem: '#test',
        type: 'year',
        format: 'yyyy',
        theme: 'molv'
    });
}

//年月选择器
function monthPicker(id) {
    laydate.render({
        elem: id,
        type: 'month',
        format: 'yyyy-MM',
        theme: 'molv'
    });
}
//日期选择器
function datePicker(id) {
    laydate.render({
        elem: id,
        type: 'date',
        format: 'yyyy-MM-dd',
        theme: 'molv'
    });
}

//时间选择器
function timePicker(id) {
    laydate.render({
        elem: id,
        type: 'time',
        format: 'HH:mm:ss',
        theme: 'molv'
    });
}

//日期时间选择器
function dateTimePicker(id) {
    laydate.render({
        elem: id,
        type: 'datetime',
        format: 'yyyy-MM-dd HH:mm:ss',
        theme: 'molv'
    });
}
/* 插件注释*/
/* laydate.render({
    elem: id,
    type: 'datetime',// year month date	datetime time
    //range:'true',// flase true - 开启左右面板范围选择
    format:'yyyy-MM-dd',//yyyy-MM-dd HH:mm:ss
    //value:'2018-08-18', //初始值,必须遵循format参数设定的格式
    // min: '1900-1-1',// 最小范围内的日期时间值
    // max: '2099-12-31',// 最大范围内的日期时间值
    // trigger: 'click' // 自定义弹出控件的事件,默认值：focus
    //show:'false',//默认显示
    //showBottom: false,
    btns: ['clear','now'],//clear、now、confirm
    theme: 'molv',//default（默认简约）、molv（墨绿背景）、#颜色值（自定义颜色背景）、grid（格子主题）
    calendar: true,//是否显示公历节日
   ready: function(date){//控件初始打开的回调
        console.log(date); //得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    },
    change: function(value, date, endDate){//日期时间被切换后的回调
        console.log(value); //得到日期生成的值，如：2017-08-18
        console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
    },
    done: function(value, date, endDate){//控件选择完毕后的回调
        console.log(value); //得到日期生成的值，如：2017-08-18
        console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
    }
});*/