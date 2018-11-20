let arr = [1,2,3,4]

function binary_search(input_arr, search_value) {

    let mid = input_arr.length / 2;

    if(mid <= search_value) {
        input_arr.slice(0, mid)
    }

    if(mid > search_value) {
        input_arr.slice( mid, input_arr.length)
    }

    return binary_search(input_arr, search_value);

}

binary_search(arr, 2);