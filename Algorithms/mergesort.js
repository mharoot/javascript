
var a = [1,20,12,3,4,5,9, 16, 8, 100,13,14,6,5,4,100,19,18];

//var a = [2,4,5,3,4,5,9]

function merge (A, p, q, r) {
    var n1 = q - p + 1;
    var n2 = r - q;
    var L = [n1+1];
    var R = [n2+1];

    // infinity
    L[n1] = 1.7976931348623157E+10308;
    R[n2] = 1.7976931348623157E+10308;

    for (var i = 0; i < n1; i++) {
        L[i] = A[p+i];//A[p+i-1];
    }

    for (var j = 0; j < n2; j++) {
        R[j] = A[q+j+1];
    }

    var i = 0;
    var j = 0;
    for (k=p; k <= r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
    }

}

function mergesort (A, p, r) {
    if (p < r) {
        var q = Math.floor((p+r)/2);
        mergesort (A, p, q);
        mergesort (A, q+1, r);
        merge(A, p, q, r);
    }
}

console.log(a);
mergesort(a, 0, a.length-1);
//merge(a,0,3,a.length);
console.log(a);
