// bnbpeg click event
$('#bnbpeg-token').click(function () {
    $('#bnbpeg-card').html("");
    let element_id = '#bnbpeg-card';
    // let token = "TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD";
    let api_url = "https://api.bscscan.com/api?module=account&action=txlist&address=0x3e3B357061103DC040759aC7DceEaba9901043aD&startblock=1&endblock=99999999&sort=asc&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"

    bnbPegToken(api_url, element_id);

});


$('#bnbpeg-rollup').click(function () {
    $('#bnbpeg-card').html("");
    let element_id = '#bnbpeg-card';
    // let token = "TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"
    let api_url = "https://api.bscscan.com/api?module=account&action=txlist&address=0xABa46894aCaB62A47Ff28c0a69e6333B80425dA5&startblock=1&endblock=99999999&sort=asc&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"

    bnbPegRollup(api_url, element_id);
});


function bnbPegToken(api_url, element_id) {

    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    html += '<div class="card no-border mb-3 bg-dark1">' +
                        '<div class="card-body bg-dark1 mb-3">' +
                        '<div class="row mb-2">' +
                        '<div class="col-sm-2 col-md-2">' +
                        '<div class="row">' +
                        '<div class="col-sm-12 col-md-12">' +
                        '<h6 class="text-white text-center">#' + value.blockNumber + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col-sm-12 col-md-12">' +
                        '<h6 class="text-purple text-center">Block</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-sm-6 col-md-6">' +
                        '<div class="row">' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p">3 Transactions </p>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p"> 1,840 bytes </p>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p">35 seconds ago </p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col-sm-2 col-md-2">' +
                        '<p class="text-light-p text-left">Miner</p>' +
                        '</div>' +
                        '<div class="col-sm-10 col-md-10">' +
                        '<h6 class="text-purple text-center hash">' + value.hash + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p text-left">Reward</p>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p text-center">3.2 BNB</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                    if (!$.inArray(tokens,value)) {
                        tokens.push(value);
                    }

                });

                if (data.result.length == 0) {
                    html = '<div>No records found!</div>'
                }

                $(element_id).append(html);
                
            }
        });
}


function bnbPegRollup(api_url, element_id) {
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    html += '<div class="card no-border mb-3 bg-dark1">' +
                        '<div class="card-body bg-dark1 mb-3">' +
                        '<div class="row mb-2">' +
                        '<div class="col-sm-2 col-md-2">' +
                        '<div class="row">' +
                        '<div class="col-sm-12 col-md-12">' +
                        '<h6 class="text-white text-center">#' + value.blockNumber + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col-sm-12 col-md-12">' +
                        '<h6 class="text-purple text-center">Block</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-sm-6 col-md-6">' +
                        '<div class="row">' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p">3 Transactions </p>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p"> 1,840 bytes </p>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p">35 seconds ago </p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col-sm-2 col-md-2">' +
                        '<p class="text-light-p text-left">Miner</p>' +
                        '</div>' +
                        '<div class="col-sm-10 col-md-10">' +
                        '<h6 class="text-purple text-center hash">' + value.hash + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p text-left">Reward</p>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p text-center">3.2 BNB</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-sm-4 col-md-4">' +
                        '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                });

                if (data.result.length == 0) {
                    html = '<div>No records found!</div>'
                }

                $(element_id).append(html);
            }
        });
}