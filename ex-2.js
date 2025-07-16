// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000; //จะเป็น true ถ้าผู้ซื้อสินค้ามียอดซื้อทั้งหมดในเดือนที่แล้วมากกว่า 4000 บาท
let isWeekday; //จะเป็น true ถ้าวันที่ซื้อสินค้าเป็นวันจันทร์ ถึง วันศุกร์
let hasBoughtProductFromITCategory; //จะเป็น true ถ้าผู้ซื้อสินค้าเคยซื้อสินค้าในหมวดหมู่ IT
let hasAttendedDiscountEvent; // จะเป็น true ถ้าผู้ซื้อสินค้าเคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อนหน้านี้
let isPlatinum; //ถ้าผู้ซื้อสินค้าเป็นสมาชิกในระดับ Platinum

let hasPromotion;

//john
lastMonthPaidMoreThan4000 = 4001;
isWeekday="Friday";
hasBoughtProductFromITCategory=false;
hasAttendedDiscountEvent=true
isPlatinum="Gold";


hasPromotion= ((lastMonthPaidMoreThan4000>4000) && (isWeekday == "Monday" || isWeekday == "Thesday" ||     
isWeekday == "Wednesday"|| isWeekday == "Thursday"||isWeekday == "Friday") && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent)||(isPlatinum == "Platinum"); //ถ้าผู้ซื้อสินค้ามีสิทธิได้รับโปรโมชั่นส่วนลด

console.log(hasPromotion); 

