function addExpense() {
    var amount = document.getElementById('amount').value.trim();
    var description = document.getElementById('description').value.trim();
    var category = document.getElementById('category').value;

    if (amount !== '' && description !== '') {
      var expenseList = document.getElementById('expenseList');
      var li = document.createElement('li');
      li.className = 'list-group-item expense-item';

      li.innerHTML = `
        <span>${amount}</span>
        <span>${description}</span>
        <span>${category}</span>
        <button class="btn btn-info btn-sm" onclick="editExpense(this)">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="removeExpense(this)">Remove</button>
        <button class="btn btn-success btn-sm" onclick="markAsPaid(this)">Mark as Paid</button>
      `;

      expenseList.appendChild(li);

      // Clear the form fields
      document.getElementById('amount').value = '';
      document.getElementById('description').value = '';
      document.getElementById('category').value = 'movie';
    }
  }

  function editExpense(button) {
    var li = button.parentElement;
    var spans = li.getElementsByTagName('span');

    var newAmount = prompt('Enter new amount:', spans[0].innerText);
    var newDescription = prompt('Enter new description:', spans[1].innerText);
    var newCategory = prompt('Enter new category:', spans[2].innerText);

    if (newAmount !== null && newDescription !== null && newCategory !== null) {
      spans[0].innerText = newAmount;
      spans[1].innerText = newDescription;
      spans[2].innerText = newCategory;
    }
  }

  function removeExpense(button) {
    var li = button.parentElement;
    var expenseList = document.getElementById('expenseList');
    expenseList.removeChild(li);
  }

  function markAsPaid(button) {
    var li = button.parentElement;
    li.style.backgroundColor = '#D6DBDF';
    button.style.innerText= 'paid'; // Use a different color to mark as paid
    button.disabled = true; // Disable the "Mark as Paid" button
  }