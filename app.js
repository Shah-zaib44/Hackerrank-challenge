//35- time in words problem
function humanize(num) {
  var ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  var tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  var numString = num.toString();

  if (num < 0) throw new Error("Negative numbers are not supported.");

  if (num === 0) return "zero";

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + " " + ones[numString[1]];
  }

  //100 and more
  if (numString.length == 3) {
    if (numString[1] === "0" && numString[2] === "0")
      return ones[numString[0]] + " hundred";
    else
      return (
        ones[numString[0]] +
        " hundred and " +
        convert(+(numString[1] + numString[2]))
      );
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + " thousand";
    if (end < 100) return ones[numString[0]] + " thousand and " + convert(end);
    return ones[numString[0]] + " thousand " + convert(end);
  }
}

function timeInWords(h, m) {
  if (m == 0) {
    return humanize(h) + " o' clock";
  } else if (m >= 1 && m <= 30) {
    if (m == 15) {
      return "quarter past " + humanize(h);
    } else if (m == 30) {
      return "half past " + humanize(h);
    } else if (m == 1) {
      return humanize(m) + " minute past " + humanize(h);
    } else {
      return humanize(m) + " minutes past " + humanize(h);
    }
  } else if (m > 30) {
    if (m == 45) {
      return "quarter to " + humanize(h + 1);
    } else {
      return humanize(60 - m) + " minutes to " + humanize(h + 1);
    }
  }
}
console.log(timeInWords(1, 1));

// var myObject = { a: [1,2,3,4,5],
// b:[6,7,8,9,10]
// };

// Object.keys(myObject).map(function(a) {
//     console.log(a.a);
// });

// function calculateWinner() {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//    console.log('a:',a)
//    console.log('b:',b)
//    console.log('c:',c)
//    console.log('bye')
//   }
// }
// calculateWinner()
// function complex_function_3 () {
//     let brand = [{"id":1, "brand": "apple"}, {"id":2, "brand": "google"}, {"id":3, "brand": "amazon"},{"id":4, "brand": "google"}, {"id":5, "brand": "ebay"}];
//     let clean_list = [];
//     brand.forEach(function(bran){
//         if(!clean_list.includes(bran.brand))
//         {
//             clean_list.push( bran.brand)
//         }

//    })
//    console.log(clean_list)
// }
// complex_function_3()

//34-icecream parlour
// function icecreamParlor(m, arr) {
// let a=[];
//     for(let i=0;i<arr.length;i++)
//          {
//              for(let j=0;j<arr.length;j++)
//              {
//                  if(j!=i)
//                  {
//                     if(arr[i]+arr[j]==m)
//                     {
//                         a.push(i+1);
//                         a.push(j+1);
//                     }
//                  }

//              }
//              if(a.length==2){
//              break;
//              }
//          }
//          console.log(a);
// }
// icecreamParlor(9
//     , [ 1,3, 4, 6, 7, 9]);

//33-Strong password
// function minimumNumber(n, password) {
//     // Return the minimum number of characters to make the password strong
//     let count=0,countDigits=0,countLower=0,countUpper=0,countSpecial=0;
//     for(let i=0;i<n;i++)
//      {
// if(isDigit(password[i]))
// {
// countDigits++;
// }
// else if(isLowercase(password[i]))
// {
// countLower++;
// }
// else if(isUppercase(password[i]))
// {
// countUpper++;
// }
// else if(isSpecialcharacter(password[i]))
// {
//  countSpecial++;
// }
//      }
//      if(countDigits<1)
//      {
//          count++;
//          n++;
//      }
//       if(countLower<1){
//         count++;
//         n++;
//     }
//      if(countUpper<1)
//      {
//         count++;
//         n++;
//     }
//      if(countSpecial<1){
//         count++;
//         n++;
//     }
//     if(n<=5)
//     {
//         while(n<6)
//         {
//             n++;
// count++;
//         }
//     }
//     console.log(count);
//     console.log(n);
// }
// minimumNumber(2,
//     '12');
//  function isDigit(no)
//  {
//      if(no>=0&&no<=9)
//      {
//          return true;
//      }
//      else
//      {
//          return false;
//      }
//  }
//  function isLowercase(letter)
//  {
//      if(letter>='a'&&letter<='z')
//      {
//          return true;
//      }
//      else
//      {
//          return false;
//      }
//  }
//  function isUppercase(letter)
//  {
//      if(letter>='A'&&letter<='Z')
//      {
//          return true;
//      }
//      else
//      {
//          return false;
//      }
//  }
//  function isSpecialcharacter(letter)
//  {
//      if(letter=='!'||'@'||'#'||'$'||'%'||'^'||'&'||'*'||'('||')'||'-'||'+')
//      {
//          return true;
//      }
//      else
//      {
//          return false;
//      }
//  }

//32-LISA's WORKBOOK
// function workbook(n, k, arr) {
//     let a=[];
//     let ppp,count,pno=0,count1=0;
// for(let i=0;i<n;i++)
// {
//      count=0;
//     ppp=arr[i];
//     while(ppp>k)
//     {
//         ppp=ppp-k;
//             count++
//             pno++;
//             a.push({chap:i+1,ppp:k,pno:pno,count:count});
//         }
//         count++;
//         pno++;
//         a.push({chap:i+1,ppp:ppp,pno:pno,count:count});
// }
// // console.log(a);
// for(let i=0;i<a.length;i++)
// {
//     // console.log((a[i].count*k)-(k-1)+' to '+((a[i].count*k)-(k-1)+(a[i].ppp)-1))
//      if(a[i].pno>=(a[i].count*k)-(k-1) && a[i].pno<=((a[i].count*k)-(k-1)+(a[i].ppp)-1))
//      {
//          count1++;
//      }
// }
// console.log(count1);
// }
// workbook(10, 5,
//     [3, 8, 15,11, 14, 1, 9, 2, 24, 31])
//31-Save the prisoner
// function saveThePrisoner(n, m, s) {
// let count=1;
// let i=s;
// while(count<m)
// {
// if(i==n)
// {
//     i=0;
//     // console.log(count);
// }

//     i++;
//     count++;
// }
// console.log(i);
// }
// saveThePrisoner(7,19,2)
// 30- serviceLane
// function serviceLane(n,t,width, cases) {
//   let a;
//   let b=[];
//   for(let j=0;j<t;j++)
//   {
//     for(let k=0;k<1;k++)
//     {
//       a=width[cases[j][k]];
//       for(let i=cases[j][k];i<=cases[j][k+1];i++)
//       {
//         if(width[i]<a)
//         {
//           a=width[i];
//                 }
//     }
//     b.push(a);
//     }
// }
// console.log(b);
// }
// serviceLane(8, 5,
//   [2 ,3, 1 ,2, 3, 2 ,3, 3],
//   [
//   [0, 3],
//  [4 ,6],
//   [6 ,7],
//  [3, 5],
//   [0, 7],
//   ]);
//29-halloween sale
// function howManyGames(p, d, m, s) {
//   let sum=0,count=0;
//   for(let i=0;p>=m&&sum<=s;i++)
//            {
//             sum+=p;
// p=p-d;
// count++;
//            }
//            console.log(sum);
//            for(let i=0;sum<=s;i++)
//            {
//               sum+=m;

//               count++;
//                        }
//                    console.log(count-1);
//         }

// howManyGames(100 ,19, 1 ,180);
// 28-appendAndDelete
// function appendAndDelete(s, t, k) {

//     let a=[];
//     let b;
//     for(let i=0;i<1;i++)
//            {
//             for(let j=i;j<s.length;j++)
//             {

//            if((s.substring(i,j+1))==(t.substring(i,j+1)))
//            {
//                a.push(s.substring(i,j+1));
//            }
//              }
//             }
//             console.log(a[a.length-1].length)
//           let c=s.length-a[a.length-1].length;
//           console.log("del:"+c);
//           let d=t.length-a[a.length-1].length;
//           console.log("append:"+d);
//           let e=c+d;
//            if(e==k)
//           {
//            return "Yes";
//           }
//          else if(c>k)
//           {
//             return "No";
//           }
//            else if(e>k)
//           {
//              return "No";
//           }
//           else if(e!=k)
//           {
//            return "No";
//           }
//         //   b=  s.slice(0,a[a.length-1].length);
//         //   for(let i=a[a.length-1].length;i<t.length;i++)
//         //    {
//         //   b+=t[i];
//         //    }

//             // return c+d;

//         }
//         //  console.log(appendAndDelete("hackerhappy","hackerrank",9));
//          console.log(appendAndDelete("aaaaaaaaaa","aaaaa",7));
//27- Library fine
// function libraryFine(d1, m1, y1, d2, m2, y2) {
// let fine;
//     if((d1<=d2)&&(m1<=m2)&&(y1<=y2)){
//         fine=0;

// }
// else if((d1>d2)&&(m1==m2)&&(y1==y2))
// {
// fine=15*(d1-d2);
// }
// else if((m1>m2)&&(y1==y2))
// {
// fine=500*(m1-m2);
// }
// else if(y1>y2)
// {
// fine=10000;
// }
// else
// {
//     fine=0;
// }
// return fine;
// }

// console.log(libraryFine(2,7,1014,1,1,1015))
// 26- Drawing Book

// function pageCount(n, p) {
//     let i,count=0,count1=-1,count2=-1,l;
//     let k=1;
//     while(k<=p)
//     {
//         count1++;
//         k++;
//     }
//     let j=n;
//     while(j>=p)
//     {
//         count2++;
//         j--;
//     }

// console.log(count1);
// console.log(count2);
// if(count1<count2)
// {
//     if(p%2==0)
//     {
//         i=2;
//     }
//     else{
//         i=3;
//     }
//     while(i<=   p){
//         count++;
//         i++;
//         i++;
//     }
//     return count;
// }
// else{
//         if(p%2==0)
//         {
//             l=n-1;
//         }
//         else{
//             l=n;
//         }
//         while(l>p){
//             count++;
//             l--;
//             l--;
//         }
//         console.log('def');
//          return count;

// }

// }
// console.log(pageCount(5,4));

//25-Bill division
// function bonAppetit(bill, k, b) {
//     let sum=0;
//     for(let i=0;i<bill.length;i++)
//     {
//         if(i==k)
//         {
//         continue;
//         }
//         else
//         {
//             sum+=bill[i];
//         }
//     }
// let bactual=sum/2;
//     if(b-bactual==0)
// {
//     return 'Bon Appetit';
// }
// else{
//     return b-bactual;
// }

// }
// console.log(
//     bonAppetit(
//         [
//             3,
//             10,
//             2,
//             9
//         ],
//         1,
//         12
//     )
// );
//24-Grading students
// let grades=[
//     73,
//     67,
//     38,
//     33
// ]
// let a=[];
// let b=[];
// let c=[];
// for(let i=0;i<grades.length;i++)
// {
//       a.push(grades[i]);
//     while(grades[i]%5!=0)
//     {
// grades[i]++;
//     }
//   b.push(grades[i]-a[i]);
//   if(b[i]<3)
//   {
//       if(a[i]<38)
//       {
//           c.push(a[i]);
//       }
//       else
//       {
//           c.push(grades[i]);
//       }
//   }
//   else{
//       c.push(a[i]);
//   }
// }
// console.log(c);

//23- Ema's super computer
// let a=[
//     ['B','G','B'],
//     ['G','G','G'],
//     ['B','G','B'],
// ]
// for(let i=0;i<a.length;i++)
// {
//     for(let j=0;j<a.length;j++)
// {
//     console.log(a[i][j]);
// }
// }

//22-Bomberman

//     function bomberMan(r,c,n, grid) {
//         let end;
//         if(n%4 ==3){
//                     end=3;
//                 }
//                 else if(n%4 ==1)
//                 {
//                     end=2;
//                 }
//          let a=[];
//             let count=0;
//               if(n==1){
//                  let t;
//                  let p='';
//               for(let i=0;i<grid.length;i++){
//                   for(let j=0;j<grid[i].length;j++){
//                     t= grid[i][j].split(',').join("");
//                     p+=t;

//                   }
//                   p+='\n';
//                   }
//                   return p;
//             }
//             if(n%2==0)
//             {
//                 let p='';
//                 const ar= Array(r).fill().map(() => Array(c).fill("O"));
//                  let t;
//               for(let i=0;i<ar.length;i++){
//                   for(let j=0;j<ar[i].length;j++){
//                     t= ar[i][j].split(',').join("");
//                     p+=t;

//                   }
//                   p+='\n';
//                   }
//                   return p;
//             }
//             else {
//                 let b=0;

//                 while(b<end)
//                 {

//                   for(let i=0;i<grid.length;i++)
//                          {
//                           for(let j=0;j<grid[i].length;j++)
//                           {
//                               if(grid[i][j]=='O')
//                               {
//                                   a.push({i,j});
//                               }
//                           }
//                          }

//                 grid = Array(r).fill().map(() => Array(c).fill("O"));
//                          for(let k=0;k<a.length;k++)
//                          {
//                              let i=a[k].i;
//                              let j=a[k].j;
//                              grid[i][j] ='.';

//                              if(i!==r-1)
//                              {
//                               grid[i+1][j] ='.';

//                              }
//                              if(j!==c-1)
//                              {
//                               grid[i][j+1] ='.';

//                              }
//                              if(i!==0)
//                              {
//                               grid[i-1][j] ='.';

//                              }
//                              if(j!==0)
//                              {
//                               grid[i][j-1] ='.';

//                              }
//                          }
//       a=[];
//       b++;

//                 }

//                 }
//                      let p='';

//                        let t;
//                   for(let i=0;i<grid.length;i++){
//                       for(let j=0;j<grid[i].length;j++){
//                         t= grid[i][j].split(',').join("");
//                         p+=t;

//                       }
//                       p+='\n';
//                       }
//               return p;
//         }
// console.log(bomberMan(6,7,5,[
//         ['.','.','.','.','.','.','.'],
//         ['.','.','.','O','.','O','.'],
//         ['.','.','.','.','O','.','.'],
//         ['.','.','O','.','.','.','.'],
//         ['O','O','.','.','.','O','O'],
//         ['O','O','.','O','.','.','.'],
//         ]));

//21-Encryption
// function encryption(s) {
//     let l=s.length;
//     let sqrt=Math.sqrt(l);

//     let rows=Math.floor(sqrt);
//     let cols=Math.ceil(sqrt);
//         if(rows*cols<l){
// rows++;
//     }
//     let i=0,m=0;
//     let j=0;
//     let a=[];
//     let k=0;
//     while(k<rows){
//         a.push([]);
//         k++;
//     }

//     while(i<rows)
//        {
//            j=0;
//        while(j<cols)
//                 {
//            a[i].push(s[m]);
//            m++;
//           j++
//         }
//         i++;
//     }
//     console.log(a)
//     let n=0,o=0;
//     let t='';
//     while(n<cols)
//        {
//            o=0;
//        while(o<rows)
//                 {
//                     if(a[o][n]!=null)
//                     {
//                     t += a[o][n];
//                     }

//           o++
//         }
//         t+=' ';
//         n++;
//     }
//     console.log(t)

// }
// encryption("chillout");
// 20- Designer PDF viewer
// function max(a)
//        {
//        let t;
//        let max=a[0];
//        for(let k=0;k<a.length;k++){
//          if(a[k]>max)
//          {
//            max=a[k];

//          }
//        }

//        return max;
//        }
// function designerPdfViewer(h, word) {
//  let j=0;
//  let p=[];
//  let a=[];
// for(let i=97;i<=122;i++)
// {
//   p[j]=String.fromCharCode(i);
// j++;
// }
// for(let j=0;j<word.length;j++)
// {
//   for(let i=0;i<h.length;i++){
//  if(word[j]==p[i])
//     {
// a.push(h[i]);
//     }
//     }
// }
// let b=max(a);
//     return b*word.length;
//     }
//   console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"abc"));

//19- Build a Palindrome
// function isPalindrome(str) {
//   let b='';
//         for(let i=str.length-1;i>=0;i--){
//                b+=str.charAt(i);
//            }
//    if(str==b){
//  return true;
//  }
//  else{
// return  false;
//  }
//        }
//        function longestPalindrome(a)
//        {
//        let t;
//        let max=a[0].length;
//        for(let k=0;k<a.length;k++){
//          if(a[k].length>max)
//          {
//            max=a[k].length;
//            t=k;

//          }
//        }
//       //  console.log(t);
//        return t;
//        }
//             function BuildaPalindrome(a,b) {
//        let arr1=[];
//        let arr2=[];
//        let arr3=[];
//        for(let i=0;i<a.length;i++)
//        {
//         for(let j=i;j<a.length;j++)
//         {
//             arr1.push(a.substring(i,j+1));
//         }
//        }
//        for(let i=0;i<b.length;i++)
//        {
//         for(let j=i;j<b.length;j++)
//         {
//             arr2.push(b.substring(i,j+1));

//         }
//     }
//     //  console.log("str1:",arr1);
//     //  console.log("str2:",arr2);
//     for(let i=0;i<arr1.length;i++)
//        {
//         for(let j=0;j<arr2.length;j++)
//         {
//     if(isPalindrome(arr1[i].concat(arr2[j]))==true)
//     {
//         arr3.push(arr1[i].concat(arr2[j]));
//     }

// }
//        }
//       //  console.log("str3:",arr3.sort());
//        if(arr3.length==0)
//        {
//          return -1;
//        }
//        else
//        {
//       return arr3[longestPalindrome(arr3.sort())];
//        }
// }
// console.log(BuildaPalindrome ("bac","bac"));

//18- catAndMouse
// function catAndMouse(x, y, z) {
//     let a=[];
//  let countr1=0,countr2=0;
//  let gtr=0;

//      countr1=0,countr2=0;

//      if(x>z)
//      {
//          while(x!==z)
//      {
//      x--;
//      countr1++;
//      }
//      }
//       if (x<z){
//          while(x!==z)
//          {
//          x++;
//          countr1++;
//          }
//      }

//      if(y<z)
//      {
//          while(y!==z)
//      {
//      y++;
//      countr2++;
//      }
//      }
//       if(y>z)
//      {
//          while(y!==z)
//      {
//      y--;
//      countr2++;
//      }
//      }

//  //print results
//  if(countr1< countr2)
//  {
//      a.push("Cat A");
//  }
//  else if(countr2< countr1)
//  {
//      a.push("Cat B");
//  }
//  else if(countr1==countr2)
//  {
//      a.push("Mouse C");

//  }

//   let str= a.toString();
//  str=str.split(',').join("\n");
//  return str;
//  }

// console.log(catAndMouse(1,2,3));

//17- PalindromicSubstring
// function isPalindrome(str) {
//   let b='';
//         for(let i=str.length-1;i>=0;i--){
//                b+=str.charAt(i);
//            }
//    if(str==b){
//  return true;
//  }
//  else{
// return  false;
//  }
//        }
//       function longestPalindrome(a)
//        {
//        let t;
//        let max=a[0].length;
//        for(k=0;k<a.length;k++){
//          if(a[k].length>max)
//          {
//            max=a[k].length;
//            t=k;

//          }
//        }
//        return t;
//        }
//       function PalindromicSubstring(str) {
//        let a=[];
//        for(let i=0;i<str.length-1;i++)
//        {
//         for(let j=i;j<str.length;j++)
//         {

//          if(isPalindrome(str.substring(i,j+1))==true)
//          {

//           a.push(str.substring(i,j+1));
//          }

//         }
//        }
//        let n=longestPalindrome(a);
//        if(a[n].length<=2){
//         return "none";
//        }
//        else{
//         return a[n];
//        }
// }
// // keep this function call here
// console.log(PalindromicSubstring (readline()));

//16- RunLength
// function RunLength(str) {
//   // code goes here
//   let count=0;

// let c=[];
//      for(let i=0;i<str.length;i++){
//          count++;
//               if(i!=str.length-1){
//               if(str[i]!=str[i+1]){
//                   c.push(count+""+str[i]);
//                   count=0;

//               }
//               }
//               else{
//                   c.push(count+""+str[i]);
//               }
//               }

//  str= c.toString();
// str=str.split(',').join("");
//   return str;
// }
//    // keep this function call here
//    console.log(RunLength(readline()));

//15- Robots
// function Robot(){
//     let queries=[
//         [1 ,5],
//         [3 ,2],
//         [4 ,3],
//         [2 ,4],
//     ]
// let r1=queries[0][0],r2=0,countr1=0,countr2=0,n=4;
// let gtr=0;
// for(let i=0;i<n;i++)
// {
//     if(i==0)
// {
//     return r1;
// }
// if(i==1)
// {
//     if(r1==queries[i][0])
//     {
//         return r1;
//     }
//     else{
//        return r2;
//     }
// }
// //
// if(r1==queries[i][0])
// {
//     return r1;
// }
// else if(r2==queries[i][0])
// {
//     return r2;
// }
// // else if(r1==queries[i][0]&&r2==queries[i][0])
// // {
// //     console.log('we can start with anyone. both are near');
// // }
// else{
//     while(r1!==queries[i][0])
//     {
//     if(r1>queries[i][0])
//     {
//     r1--;
//     countr1++;
//     }
//     else if (r1<queries[i][0]){
//         r1++;
//         countr1++;
//     }
//     }
//     while(r2!==queries[i][0])
//     {
//     if(r2<queries[i][0])
//     {
//     r2++;
//     countr2++;
//     }
//     else if(r2>queries[i][0])
//     {
//     r2--;
//     countr2++;
//     }
//     }
// }
// //print results
// if(countr1< countr2)
// {
//     return r1;
// }
// else if(countr2< countr1)
// {
//     return r2;
// }
// else if(countr1==countr2&&(countr1!=0&& countr2!=0))
// {
// if(r1>r2)
// {
//     return r1;
// }
// else if(r2>r1)
// {
//     return r2;
// }
// }
// }
// }
// let n=4;
// for(let j=0;j<n;j++)
// {
//     console.log('We should start with:',Robot());
// }

//14- Train tracks
// let track=[

//         [2,2,3],
//         [3,1,4],
//         [4,4,4],

//     ]
//     let k=3;
//      let n=4,m=4;

// let track=[
//     [1, 3, 6],

//     [1, 2 ,4],

//     [1 ,1, 1],

//     [1, 7, 7],

//     [1, 4, 5],

//     [1, 1, 8],

//         ]
//         let k=BigInt(6);
//          let n=1,m=9;
//      const array= Array(n).fill().map(() => Array(m).fill("O"));

// for(let i=BigInt(0);i<k;i++)
// {
// for(let j=BigInt(0);j<track.length;j++)
// {
// for (let l=BigInt(track[j][1]) ;l<=track[j][2];l++)
// {

//         array[(track[j][0])-1][l-BigInt(1)]=1;

//  }
// }

// }
// console.log(array)
// let count=BigInt(0);
// for(let t=BigInt(0);t<array.length;t++)
// {
//     for(let u=BigInt(0);u<array[t].length;u++){
//         if(array[t][u]==null)
//         {
//             count++;
//         }
//     }
// }
//     console.log(count.toString())

//2d array using single for loop
// let a=[

//     [2,2,3],
//     [3,1,4],
//     [4,4,4],

// ]
// let n=3,m=3;
// for(let i=0;i<n*m;i++)
// {
//    let row=Math.floor(i/m);
//    let col=i%m;
//     console.log(`a[${row}][${col}]:`,a[row][col]);

// }

//13-Extra long factorial
// let i=BigInt(4),mul=BigInt(1);
// while(i>0){
//     mul=mul*i;
//     i--;
// }
// console.log(mul.toString());

//12-Electronics shop
// let k=[40,50,60]
// let d=[5,8,12]
// let a=[]
// let i=0,j=0,b=60;
// while(i<k.length){
//     j=0;
//     while(j<d.length){
//        let sum= k[i]+d[j]
//     if(sum<=b)
//         {
// a.push(sum)
//         }

//         j++;
//     }
// i++;
// }
// if(a.length!=0){
//     var max_of_array = Math.max.apply(Math, a);
//     console.log(max_of_array);
// }
// else{

// console.log('-1');
// }
//Javascript sort
// q.sort(function(x,y){
//     console.log(`x:`,x);
//     console.log(`y:`,y);
//     return x-y
// })

//11-New year chaos
//let q=[1,2,5,3,7,8,6,4];
//let q=[2,1,5,3,4];
// let q=[2,5,1,3,4];
// let b=[];
// let i=0,j=0,temp,count=0;
// while(i<q.length-1)
// {
//     count=0;
//     j=i+1;
//     while(j<q.length)
//     {
//         if(q[i]>q[j])
//         {
//                     count++
//         }
//         j++;
//            }
//          if(count>0){
//             b.push(count);
//            }

//            console.log(`Total nos less than ${q[i]}:`,count);
//                i++;
// }
// console.log('b:',b)
// let count1=0,sum=0;
// for (var k in b)
// {
//      if(b[k]>2){
//         count1++;
//     }
//     }
//     for (var k in b)
// {
//     sum+=b[k];
//     }
// if(count1==0)
// {
//     console.log(sum);
// }
// else{
//     console.log("Too chaotic");
// }

//10-Array manipulation
// let a=[
//         [1,5,3],
//         [4,8,7],
//         [6,9,1]
//     ]
//     let i=0;
//     let m=3;
//     let j=0,l,n=10;
//     let b=Array(n).fill(0);

//     while(i<m)
//     {
//             l=a[i][0];
//             while(l<=a[i][1]){

//                 b[l-1]=a[i][2]+b[l-1];

//             l++;
//             }
//             console.log(b)
//                   i++;
//     }
//     var max_of_array = Math.max.apply(Math, b);
//     console.log(max_of_array);

//9-Array Rotation
// let a=[1,2,3,4,5];
// d=4;
// let i=0;
// while(i<d){
//     a.push(a[i]);

//     i++;
// }
// console.log(a);
// let j=0;
// while(j<d){
//     a.splice(0,1);
//     console.log(a);
//     j++
// }
// console.log(a);

//8- Hourglass challenge
// let arr=[
//         [-1,1,-1,0,0,0],
//         [0,-1,0,0,0,0],
//         [-1,-1,-1,0,0,0],
//         [0,-9,2,-4,-4,0],
//         [-7,0,0,-2,0,0],
//         [0,0,-1,-2,-4,0],

//]

// let i=0,j=0,sum=0;colCount=0,rowCount=0,c=0,d=0;
// let b=[];

// while(i<arr.length){

//     colCount=0;
//       j=c;
//      // console.log('j',j);

//     while(j<arr[i].length-2)
//     {
//         while(colCount<3)
//         {
//        if(rowCount==0||rowCount==2){
//     sum+=arr[i][j];

// }
// else if(rowCount==1){
//     if(colCount==1)
//     {
//         sum+=arr[i][j];
//     }
// }
// colCount++;
//         j++;
//             }
//             j++;
//            }
//            rowCount++;
//     i++;
//            if(colCount==3&&rowCount==3)
//            {
//                b.push(sum);
//                i=d;
//                sum=0;
//                rowCount=0;
//                c++;
//                j=c;
//                         }

//                         if(c==4)
//                          {

//                              c=0;
//                              j=c;

//                              sum=0;
//                             rowCount=0;
//                             d++;
//                             i=d;

//                          }

// }

// console.log(b);;
// let max=b[0];
// i=0;
// while(i<b.length){
//     if(b[i]>max)
//     {
//         max=b[i];
//     }
//     i++;
// }
// console.log(max);

//7-Unexpected demand
// let sum=0,count=0;
//     for(let i=0;i<orderCount;i++){

//         sum+=order[i];
//         if(sum<=k) {
//         count++;
//     }

//     }

//    if(count==0){
// return 0;
//    }
//    else{
//        return count;

//    }

//6-Reduction array Elements
// let ar=[3,1,2,3];

// let i=0;

// var sum=0;

// while(i<ar.length-1)
// {
//     sum=ar[i]+ar[i+1];
//     ar.splice(i,1);
//     ar.splice((i+1)-1,1);
//     ar.push(sum);

// }
// console.log(sum);

// function fizzBuzz(n) {
//     // Write your code here
//  let j=1;
// while(j<=n){
//     if(j%3==0 && j%5==0){
//         console.log('FizzBuzz');

//     }
// else if(j%3==0 && j%5!=0){

//     console.log('Fizz');

//        }
//        else if(j%5==0 && j%3!=0){

//     console.log('Buzz');

//        }
//       else {
// console.log(j);
//        }

//     j++;
// }
// }

//Pseudo code 10Pearls
// let a=2437,b=875;
// let x=a,y=b;
// let i=0;
// while(x!=y){
// if(x>y){
//     x=x-y
//     console.log('x:',x);
// }
// else if(x<y){
//     y=y-x;
//     console.log('y:',y);
// }
// i++;
// }

// 5-function minDiff(arr) {

//     let sum=0;
//     let j=0,k;
//     // Write your code here
//      for (let i = 0; i < arr.length-1; i++) {

//          j=arr[i]-arr[i+1];
//         k=Math.abs(j);
//           sum+=k;
//      }

// return sum;
// }

//4-Repeated String
// let s='aba';
// let i=0,count=0,n=1000;

//     while(s.length<n){
//     s+=s[i];
// i++;
// }
// let j=0;
//     while(j<s.length){
//         if(s[j]=='a'){
//             count++;
//         }
//     j++;
// }
// console.log(12/3);
// console.log(count);

//3-Jumping on the clouds
// let c=[0, 0 ,1 ,0 ,0, 1, 0];
// let jump=0;
// let j=0;
// let i=0;

//     j=0;
// while(j<c.length){
//     if(c[j]==0 && c[j+1]==0 && c[j+2]==0){
//         j++;
//         jump++;

//     }
// else if(c[j]==0 && c[j+1]==0){

//     jump++;

//        }
//       else if(c[j]==0 && c[j+1]==1){
// j++;
// jump++;
//        }
//        else if(c[j]==1 && c[j+1]==0){

// jump++;
//        }
//     j++;
// }

// console.log(jump);

//2-Counting valleys
//let ar=['U','D','D','D','U','D','U','U'];
//  let path='UDUUUDUDDD';
//  let valley=0,count=0;
//  let j=0;
//  let i=0;

//      j=0;
//  while(j<path.length){
//              if(j<=path.length-2){
//  if(path[j]=='D'){
//          count--;

//         }
//          if(path[j]=='U'){
//             count++;
//             if (count==0)
//         {
//             valley++;
//         }

//         }

//      }

//  j++;
//  }
// console.log('valley:\n',valley);

//1-Sales by Match

// //let a=[1,2,1,2,1,3,2];
// //let a=[10,20,20,10,10,30,50,10,20];
// //let ar=[1,1,3,1,2,1,3,3,3,3];
// //let a=[1,2,3,4,5,5];
// let ar=[6, 5 ,2, 3 ,5 ,2, 2, 1, 1, 5 ,1, 3 ,3, 3 ,5];
// let pair=0;
// let j=0;
// let i=0;
// for(i=0;i<ar.length;i++){
//     j=0;
// while(j<ar.length){
//             if(j!=i){
// if(ar[i]==ar[j]){
//         pair++;
//             ar.splice(i,1);
//             console.log(`array after removing a[${i}]:`,ar);

//         ar.splice(j-1,1);
//                  console.log(`array after removing a[${j}]:`,ar);
//                     console.log('pairs are no1:',i,'and no2:',j);
//         i=0;
//         j=0;
//        }
//     }
// j++;
// }
// }
// console.log(pair);
