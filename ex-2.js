// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

hasPromotion = false;

if((lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum){
    hasPromotion = true;
}

console.log(hasPromotion);
