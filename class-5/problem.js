function maxCommStr(s1, s2) {
    let m = s1.length;
    console.log(`M length is: ${m}`);
    
    let n = s2.length;
    console.log(`N length is: ${n}`);
    
    let resLength = 0;  // To store the maximum length
    let longestSubstring = '';  // To store the longest common substring

    for (let i = 0; i < m; i++) {
        console.log(`I value is: ${i}`);
        
        for (let j = 0; j < n; j++) {
            console.log(`J value is: ${j}`);
            let curr = 0;

            while ((i + curr) < m && (j + curr) < n && s1[i + curr] === s2[j + curr]) {
                curr++;
            }

            if (curr > resLength) {
                resLength = curr;
                longestSubstring = s1.slice(i, i + curr);
                console.log(longestSubstring);
                
            }
        }
    }
    
    console.log(`Longest common substring: "${longestSubstring}"`);
    console.log(`Length of longest common substring: ${resLength}`);
    return resLength;
}

let s1 = "geeksforgeeks";
let s2 = "practicewritegeekscourses";
maxCommStr(s1, s2);
