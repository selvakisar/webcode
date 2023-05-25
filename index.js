const handleSearch = async () => {
    const searchTerm = document.getElementById("searchTerm").value;
    if (!searchTerm) return;
    try {
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${searchTerm}&per_page=1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const breweries = await response.json();
      const name = document.createElement("p");
      const type = document.createElement("p");
      const address = document.createElement("p");
      const web = document.createElement("p");
      const phone = document.createElement("p");
      const node1 = document.createTextNode(breweries[0].name);
      const node2 = document.createTextNode(breweries[0].brewery_type);
      const node3 = document.createTextNode(breweries[0].address_1);
      const node4 = document.createTextNode(breweries[0].website_url);
      const node5 = document.createTextNode(breweries[0].phone);
      name.appendChild(node1);
      type.appendChild(node2);
      address.appendChild(node3);
      web.appendChild(node4);
      phone.appendChild(node5);
      const element = document.getElementById("details");
      element.appendChild(name);
      element.appendChild(type);
      element.appendChild(address);
      element.appendChild(web);
      element.appendChild(phone);
    } catch (error) {
      console.log("something went erong please try again", error)
    }
  }
  