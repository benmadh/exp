// mainnet rollups
$('#mainnet-token').click(function () {
    mainNetTab = 'token';
    $('#main-table tbody').html("");
    let element_id = '#main-table';
    let api_url = "https://api.etherscan.io/api?module=account&action=txlist&address=0x1da4858ad385cc377165a298cc2ce3fce0c5fd31&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

    mainNetToken(api_url, element_id)
});

// mainnet rolls ups
$('#mainnet-rollup').click(function () {
    mainNetTab = 'rollup';
    console.log("Click Triggered");
    
    $('#main-table tbody').html("");
    let element_id = '#main-table';
    let api_url = "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x2C7716BDf98e181df4CF1b40aD7648A40EE813b9&startblock=0&endblock=999999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"
    
    mainNetRollup(api_url, element_id)
});


// mainnet 
function mainNetToken(api_url, element_id) {

    console.log('Search Term', searchToken);

    $.get(api_url,
        function (data) {
            if (data.status) {

                var html = ''

                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    if (searchToken != '') {
                        if (searchToken == value.hash.toString()) {
                            html += '<tr>'+
                                '<td>'
                                    +value.blockNumber+
                                '</td>'+
                                '<td>'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td>'
                                    +value.gasUsed+
                                '</td>'+
                                '<td>'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td>'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                            '</tr>';
                        }
                    } else {
                        html += '<tr>'+
                                    '<td>'
                                        +value.blockNumber+
                                    '</td>'+
                                    '<td>'
                                        +value.hash.toString()+
                                    '</td>'+
                                    '<td>'
                                        +value.gasUsed+
                                    '</td>'+
                                    '<td>'+
                                        '3.5 ETH'+
                                    '</td>'+
                                    '<td>'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                                '</tr>';
                    }
                });

                if (data.result.length == 0) {
                    html = '<tr><td colspan="5">No records found!</td></tr>'
                } else if (html == '') {
                    html = '<tr><td colspan="5">No records found!</td></tr>'
                }

                $('#main-table tbody').append(html);
            }
        });
}

// roll ups // mainnet 
function mainNetRollup(api_url, element_id) {

    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);

                    if (searchToken != '') {
                        if (searchToken == value.hash.toString()) {
                            html += '<tr>'+
                                    '<td>'
                                        +value.blockNumber+
                                    '</td>'+
                                    '<td>'
                                        +value.hash.toString()+
                                    '</td>'+
                                    '<td>'
                                        +value.gasUsed+
                                    '</td>'+
                                    '<td>'+
                                        '3.5 ETH'+
                                    '</td>'+
                                    '<td>'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                                '</tr>';
                        }
                    } else {
                        html += '<tr>'+
                                    '<td>'
                                        +value.blockNumber+
                                    '</td>'+
                                    '<td>'
                                        +value.hash.toString()+
                                    '</td>'+
                                    '<td>'
                                        +value.gasUsed+
                                    '</td>'+
                                    '<td>'+
                                        '3.5 ETH'+
                                    '</td>'+
                                    '<td>'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                                '</tr>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<tr><td colspan="5">No records found!</td></tr>'
                }

                $('#main-table tbody').html(html);

            }
        });
}