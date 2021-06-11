document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

//load one customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.readyState === 4) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
      <li> ID: ${customer.id}
      <li> ID: ${customer.name}
      <li> Company: ${customer.company}
      <li> ID: ${customer.phone}
      </ul>`;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

//load all customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.readyState === 4) {
      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(function (customer) {
        output += `
      <ul>
      <li> ID: ${customer.id}
      <li> ID: ${customer.name}
      <li> Company: ${customer.company}
      <li> ID: ${customer.phone}
      </ul>`;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
