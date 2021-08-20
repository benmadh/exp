$('#etcpeg-token').click(function () {
    etcTab = 'token';

    $('#etcpeg-card').html("");
    let element_id = '#etcpeg-card';
    let api_url =
        "https://blockscout.com/etc/mainnet/api?module=account&action=txlist&address=0x9186ff77866DfD1007429F552e48C6d1A927297A"
    etcPegToken(api_url, element_id)
});

$('#etcpeg-rollup').click(function () {
    etcTab = 'rollup';

    $('#etcpeg-card').html("");
    let element_id = '#etcpeg-card';
    let api_url =
        "https://blockscout.com/etc/mainnet/api?module=account&action=txlist&address=0x6f6ed4820E44128794D22eB0b8B5c035a8Eac4E6"
    etcPegRollup(api_url, element_id);
});


// etc peg token
function etcPegToken(api_url, element_id) {
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    if (searchToken != '') {
                        if (searchToken == value.hash.toString()) {
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
                            '<p class="text-light-p text-center">3.2 ETC</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="col-sm-4 col-md-4">' +
                            '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        }
                    } else {
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
                            '<p class="text-light-p text-center">3.2 ETC</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="col-sm-4 col-md-4">' +
                            '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }
                    
                });

                if (data.result.length == 0) {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                } else if (html == '') {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                }

                $(element_id).append(html);

            }
        });
}

// etc peg roll ups
function etcPegRollup(api_url, element_id) {
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    if (searchToken != '') {
                        if (searchToken == value.hash.toString()) {
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
                            '<p class="text-light-p text-center">3.2 ETC</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="col-sm-4 col-md-4">' +
                            '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        }
                    } else {
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
                            '<p class="text-light-p text-center">3.2 ETC</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="col-sm-4 col-md-4">' +
                            '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                } else if (html == '') {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                }

                $(element_id).append(html);
            }
        });
}