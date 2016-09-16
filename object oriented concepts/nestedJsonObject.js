
        var datas = {
            'tree': [
                {
                    'name': 'name1',
                    'tree': [
                        { 'name': 'name2' },
                        { 'name': 'name3' },
                        {
                            'name': 'name4',
                            'tree': [
                                { 'name': 'name5' },
                                { 'name': 'name6' }
                            ]
                        },
                        { 'name': 'name7' }
                    ]
                },
                {
                    'name': 'name8',
                    'tree': [
                        { 'name': 'name9' }
                    ]
                }
            ]
        }


function gettree(tree) {
    tree.forEach(function (item) {
        document.body.innerHTML += item.name;
        if (item.tree) {
            gettree(item.tree)
        }
    })
}
gettree(datas.tree);
