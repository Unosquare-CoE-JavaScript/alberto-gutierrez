function printRecords(recordIds) {
  const records = studentRecords;
  records
    .filter(function getByIds(record) {
      return recordIds.includes(record.id);
    })
    .sort(function checkAlphaOrder(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    })
    .forEach(function printData(record) {
      const paymentStatus = record.paid ? "Pagado" : "con adeudo";
      console.log(
        `El estudiante ${record.id}:${record.name} esta ${paymentStatus}`,
      );
    });
}

function paidStudentsToEnroll() {
  const records = studentRecords
    .filter(function getPaidRecord(record) {
      return !currentEnrollment.includes(record.id) && record.paid;
    })
    .map(getIds);
  return [...records, ...currentEnrollment];
}

function remindUnpaid(recordIds) {
  const records = studentRecords
    .filter(function getUnpaid(record) {
      return !record.paid && recordIds.includes(record.id);
    })
    .map(getIds);
  printRecords(records);
}

function getIds(record) {
  return record.id;
}
// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
