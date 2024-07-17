const myChart = echarts.init(document.getElementById('skills'));

const option = {
  tooltip: {},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '静态页面', max: 100},
      { name: 'js', max: 100},
      { name: 'Vue', max: 100},
      { name: 'jQuery', max: 100},
      { name: 'React', max: 100},
      { name: 'ts', max: 100}
    ]
  },
  series: [{
    type: 'radar',
    data: [
      {
        value: [100, 93, 90, 80, 70, 60],
        name: '能力雷达'
      }
    ]
  }]
};

myChart.setOption(option);