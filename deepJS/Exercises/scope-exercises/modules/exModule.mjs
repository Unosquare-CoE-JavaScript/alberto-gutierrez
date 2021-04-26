var currentEnrollment = [];
const studentRecords = [];
class Workshop {
  getStudentFromId(studentId) {
    return studentRecords.find(matchId);

    // *************************

    function matchId(record) {
      return record.id == studentId;
    }
  }
  addStudent(id, name, paid) {
    studentRecords.push({ id, name, paid });
  }
  enrollPaidStudents() {
    currentEnrollment = this.paidStudentsToEnroll();
    this.printCurrentEnrollment();
  }
  enrollStudent(id) {
    if (!currentEnrollment.includes(id)) {
      currentEnrollment.push(id);
    }
  }
  remindUnpaidStudents() {
    this.remindUnpaid(currentEnrollment);
  }
  printCurrentEnrollment() {
    this.printRecords(currentEnrollment);
  }
  printRecords(recordIds) {
    var records = recordIds.map(this.getStudentFromId);

    records.sort(this.sortByNameAsc);

    records.forEach(this.printRecord);
  }
  sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  }
  printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`,
    );
  }
  paidStudentsToEnroll() {
    var recordsToEnroll = studentRecords.filter(this.needToEnroll);

    var idsToEnroll = recordsToEnroll.map(this.getStudentId);

    return [...currentEnrollment, ...idsToEnroll];
  }
  needToEnroll(record) {
    return record.paid && !currentEnrollment.includes(record.id);
  }
  getStudentId(record) {
    return record.id;
  }
  remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

    this.printRecords(unpaidIds);
  }
  notYetPaid(studentId) {
    var record = this.getStudentFromId(studentId);
    return !record.paid;
  }
}
export const deepJS = new Workshop();
