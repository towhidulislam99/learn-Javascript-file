


// Function to clear form fields
function clearFields() {
    document.querySelector("#productName").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#description").value = "";
}

// Add Data
document.querySelector("#productForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const productName = document.querySelector("#productName").value;
    const price = document.querySelector("#price").value;
    const description = document.querySelector("#description").value;

    // Validate form
    if (productName === "" || price === "" || description === "") {
        alert("Please fill up all the fields");
        return;
    }

    // Select the table body where new rows will be appended
    const productList = document.querySelector("#productList");

    // Append a new row to the table body
    productList.innerHTML += `
        <tr class="border-t border-gray-300">
            <td class="p-4">${productName}</td>
            <td class="p-4">$${price}</td>
            <td class="p-4">${description}</td>
            <td class="p-4">
                <button class="editProduct bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Edit</button>
                <button class="deleteProduct bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
            </td>
        </tr>
    `;

    // Clear the form fields
    clearFields();
});



//Delete Data

document.querySelector("#productList").addEventListener("click", (e) => {
   const target = e.target
    if(target.classList.contains("deleteProduct")){
        if(confirm("Are you sure you want to delete this product?")){
            target.closest("tr").remove();
            alert("Product deleted successfully");
        }
    }
})