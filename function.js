// Function to redirect to the add book form
function addbookform() {
    window.location.href = "request.html";
  }
  
  // Function to redirect to the search page
  function searchBook() {
    window.location.href = "search.html";
  }
  
  // Function to show book suggestions
  function showSuggestions() {
    const searchInput = document.getElementById('search-input-container');
    const suggestionsContainer = document.getElementById('suggestions');
  
    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';
  
    // Retrieve the search value
    const searchValue = searchInput.value;
  
    // Perform AJAX request to fetch book suggestions
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchValue)}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          data.forEach(bookName => {
            const suggestion = document.createElement('p');
            suggestion.textContent = bookName;
            suggestionsContainer.appendChild(suggestion);
          });
        } else {
          const noSuggestions = document.createElement('p');
          noSuggestions.textContent = 'No suggestions found';
          suggestionsContainer.appendChild(noSuggestions);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Get references to the form and submit button
  const issueForm = document.getElementById('issueform');
  const submitBtn = document.getElementById('submitBtn');
  
  // Add submit event listener to the form
  issueForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve the form data
    const studentID = document.getElementById('studentid').value;
    const studentName = document.getElementById('studentname').value;
    const bookName = document.getElementById('bookname').value;
    const bookID = document.getElementById('bookID').value;
    // Retrieve other form data in a similar way
  
    // Check if any of the fields are blank
    if (studentID === '' || studentName === '' || bookName === '' || bookID === '') {
      alert('Please fill in all the fields');
      return; // Stop further execution
    }
  
    // Reset the form
    issueForm.reset();
  
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = 'Your request has been submitted';
  });
  