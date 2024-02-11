let customers = [
  {
    firstName:'Sam',
    lastName : 'Smith',
    email: "ssmith@gmail.com"
  },
  {
    firstName:'Tom',
    lastName : 'Jones',
    email: "tjones@gmail.com"
  }
  ];

let newRowHTML = "";

for (let customer of customers) {
  newRowHTML = `
  <tr>
    <td>${customer.firstName}</td>
    <td>${customer.lastName}</td>
    <td>${customer.email}</tdL>
  </tr>`;
  $("#tableBody").append(newRowHTML);
}