// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2007',
            'physics': 10,
            'chemistry': 12,
            'medicine': 15
        }, {
        	period: '2008',
            'physics': 12,
            'chemistry': 14,
            'medicine': 18
        }, {
        	period: '2009',
            'physics': 9,
            'chemistry': 11,
            'medicine': 20
        }, {
        	period: '2010',
            'physics': 11,
            'chemistry': 13,
            'medicine': 17
        }, {
        	period: '2011',
            'physics': 7,
            'chemistry': 8,
            'medicine': 19
        }, {
        	period: '2012',
            'physics': 13,
            'chemistry': 15,
            'medicine': 16
        }, {
        	period: '2013',
            'physics': 11,
            'chemistry': 12,
            'medicine': 15
        }, {
        	period: '2014',
            'physics': 10,
            'chemistry': 12,
            'medicine': 15
        }, {
        	period: '2015',
            'physics': 10,
            'chemistry': 13,
            'medicine': 16
        }, {
        	period: '2016',
            'physics': 9,
            'chemistry': 12,
            'medicine': 15
        }],
        xkey: 'period',
        ykeys: ['physics', 'chemistry', 'medicine'],
        labels: ['physics', 'chemistry', 'medicine'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "physics",
            value: 12
        }, {
            label: "chemistry",
            value: 30
        }, {
            label: "medicine",
            value: 20
        }],
        resize: true
    });



});
