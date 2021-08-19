 // testnet token
 $('#testnet-token').click(function () {

     $('#test-token tbody').html("");

     let element_id = '#test-token'
     let api_url =
         "https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x5D0778eDE3867c69590FE611fCF8e233887CB655&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

     testNetToken(api_url, element_id);
 });


 // testnet rollups
 $('#testnet-rollup').click(function () {
     $('#test-token tbody').html("");
     let element_id = '#test-token'
     let api_url = "https://api-ropsten.etherscan.io/api?module=account&action=txlistinternal&address=0xFa32465ddFC3628F8723fe7941F035a494bfbFf2&startblock=0&endblock=999999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

     rollup(api_url, element_id);
 });


 // testnet & mainnet 
 function testNetToken(api_url, element_id) {
    
     $.get(api_url,
         function (data) {
             if (data.status) {
                 console.log(data.result+ "Data");
                 var html = ''
                 $.each(data.result, function (index, value) {
                     const date = new Date(value.timeStamp * 1000);

                     html += '<tr>'+
                                '<td>'+
                                    +value.blockNumber+
                                '</td>'+
                                '<td>'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td>'+
                                    +value.gasUsed+
                                '</td>'+
                                '<td>'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td>'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                            '</tr>';
                     
                     if (!$.inArray(tokens,value)) {
                        tokens.push(value);
                    }

                });

                if (data.result.length == 0) {
                    html = '<tr><td colspan="5">No records found!</td></tr>'
                }

                 $('#test-token').append(html);

                //  tokens.push(data.result)
             }
         });
 }


 // roll ups // testnet & mainnet 
 function rollup(api_url, element_id) {

     $.get(api_url,
         function (data) {
             
             if (data.status) {
                 var html = ''
                 $.each(data.result, function (index, value) {
                     
                    const date = new Date(value.timeStamp * 1000);
            
                     html += '<tr>'+
                                '<td>'+
                                    +value.blockNumber+
                                '</td>'+
                                '<td>'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td>'+
                                    +value.gasUsed+
                                '</td>'+
                                '<td>'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td>'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                         '</tr>';
                     
                    console.log(html);

                });

                if (data.result.length == 0) {
                    html = '<tr><td colspan="5">No records found!</td></tr>'
                }
                 
                 $('#test-token tbody').append(html);
             }
         });
 }