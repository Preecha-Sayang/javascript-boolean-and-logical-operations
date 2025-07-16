let isOver18; // จะเป็น true ถ้าผู้เข้าร่วมงานคนนี้มีอายุมากกว่า 18 ปีขึ้นไป
let hasCriminalBlacklist; //จะเป็น true ถ้าผู้ร่วมงานคนนี้เคยมีประวัติอาชญากรรม

let isAllow;

// Start coding here

isOver18 = 18;
hasCriminalBlacklist= false;
isAllow= (isOver18>18) && !hasCriminalBlacklist;

console.log(isAllow);
